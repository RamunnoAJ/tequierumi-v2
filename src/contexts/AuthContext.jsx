import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useContext, useState, useEffect, createContext } from 'react'
import { auth } from '../firebase'

const UserContext = createContext()
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const logout = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <UserContext.Provider value={{ logout, user, signIn, googleSignIn }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}

import Header from '../components/Header'
import { LoginMain } from '../components/Login/LoginMain'
import Footer from '../components/Footer'

function Login() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <LoginMain />
      <Footer />
    </div>
  )
}

export default Login

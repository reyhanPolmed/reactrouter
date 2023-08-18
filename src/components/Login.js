import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'


export const Login = (props) => {
    const [user, setUser] = useState()
    const auth = useAuth()
    const navigate = useNavigate()
    const [isLoggedIn,setIsLoggedIn] = useState();

    const handleLogin = () => {
        setUser(user);
        auth.login(user)
        console.log(auth)
        navigate('/products', {replace: true})
    }

    const email = useRef()
    const password = useRef()

    const handleSubmit = () => {
      if(email.current.value==="reyhanbatubara@gmail.com"&&password.current.value==="reyhan123"){
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
      }
    }
    
  return (
    <div>
        <label>
            USername: {' '}
            <input type='text' onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={()=> handleLogin()}>login</button>
        <form onSubmit={handleSubmit}>
          <div>
            <input type='text' ref={email}/>
          </div>
          <div>
            <input type='password' ref={password}/>
          </div>
          <button>Login</button>
        </form>
    </div>
  )
}

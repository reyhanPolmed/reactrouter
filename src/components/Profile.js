import { useAuth } from "./auth"
import { useNavigate } from "react-router-dom"

export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    
    const handleLogout = () => {
      auth.logout()
      navigate('/')
    }
    
  return (
    <div>welcome {auth.user}
    <button onClick={handleLogout}>logout</button>
    </div>
  )
}

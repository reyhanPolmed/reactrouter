import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'

export const RequireAuth = ({children}) => {
    const auth= useAuth();
    if(!auth.user) {
        return <Navigate to='/login' />
    }
    return children
}

export const RequireLogin = ({children}) => {
    const auth= useAuth()
    if(auth.user) {
        return <Navigate to='/home' />
    }
    return children
}


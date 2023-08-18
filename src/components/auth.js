import { useState,createContext, useContext } from "react"

const AuthContext = createContext(false)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')

    const login = user => {
        setUser(user)
        console.log(user)
    }

    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
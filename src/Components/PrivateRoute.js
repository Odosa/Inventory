import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [pwd, setPwd] = useState(null)

    const signUp = (user, pwd) => {
        setUser(user)
        setPwd(pwd)
    }
    const login = (user, pwd) => {
        setUser(user)
        setPwd(pwd)
    }


    return (
        <AuthContext.Provider value={{ user, pwd, login, signUp}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
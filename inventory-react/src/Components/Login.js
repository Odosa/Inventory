import "./welcome.css"
import { useRef, useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom';
import { useAuth } from "./PrivateRoute";

const Login = ({onLogin}) => {
    const userRef = useRef();

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const auth = useAuth()
    

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        auth.login(user, pwd)
        onLogin({user, pwd})

        setUser('');
        setPwd('');
    }

return(
    <div className="cover">
        <form onSubmit={handleSubmit} className="login_form">
            <h1>Welcome Back</h1>
            <div className="form-control">
                <label>Username: </label>
                <input type="text" 
                className="login-dec"
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required />
            </div>
            <div className="form-control">
                <label>Password: </label>
                <input 
                    type="password" 
                    className="login-dec"
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
            </div>
            
            <input type="submit" className="login-btn" value="sign in" />

            <div className="form-end">
                <p>
                    Don't have an account?
                    <span className='line'>
                        <NavLink to='/Signup'>Sign up</NavLink>
                    </span>
                </p>
            </div>
        </form>
    </div>
)}


export default Login
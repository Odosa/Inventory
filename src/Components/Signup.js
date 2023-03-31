import { useRef, useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "./PrivateRoute";

const Signup = () => {
    const userRef = useRef();

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        auth.signUp(user, pwd)
        navigate('/Inventory')
    }

return(
    <div className="cover">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                placeholder="Username"
                className="login-dec"
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />
            <input 
                type="password" 
                placeholder="Password"
                className="login-dec"
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
            <input type="submit" className="login-btn" value="sign in" />
            <p>
                Already have an account?<br />
                <span className='line'>
                    <NavLink to='/Login'>Login</NavLink>
                </span>
            </p>
        </form>
    </div>
)}


export default Signup
import { useRef, useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const Login = ({onLogin}) => {
    const userRef = useRef();

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        onLogin({user, pwd})

        setUser('');
        setPwd('');
    }

return(
    <div className="cover">
        <h1>Login Page</h1>
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
                Don't have an account?<br />
                <span className='line'>
                    <NavLink to='/Signup'>Sign up</NavLink>
                </span>
            </p>
        </form>
    </div>
)}


export default Login
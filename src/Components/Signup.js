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
        <form onSubmit={handleSubmit} className="login_form">
            <h1>Register</h1>
            <div className="form-control">
                <label>Username: </label>
                <input
                    type="text" 
                    placeholder="Username"
                    className="login-dec"
                    id='username'
                    ref={userRef}
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
            </div>
            <div className="form-control">
                <label>Password: </label>
                <input 
                    type="password" 
                    placeholder="Password"
                    className="login-dec"
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
            </div>

            <input type="submit" className="login-btn" value="sign up" />

            <div className="login_form_end">
                <p>
                    Already have an account?
                    <span className='line'>
                        <NavLink to='/Login'>Login</NavLink>
                    </span>
                </p>
            </div>
        </form>
    </div>
)}


export default Signup
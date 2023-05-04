import { useRef, useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "./PrivateRoute";
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore";

const Signup = () => {
    const userRef = useRef();
    const ref = collection(firestore, "UserLoginInfo")

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const userDetails = {
        user, pwd
    }

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        auth.signUp(user, pwd)

        let data ={
            messages: userDetails,
        }
    
        try{
            addDoc(ref, data)
        }catch(e){
            console.log(e)
        }
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
                    className="login-dec"
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
            </div>

            <input type="submit" className="login-btn" value="sign up" />

            <div className="form-end">
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
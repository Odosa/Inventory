import { NavLink } from "react-router-dom"

const Button = () => {
    return(
        <div>
            <NavLink to='/Signup'><button>Sign up</button></NavLink>
            <NavLink to='/Login'><button>Login</button></NavLink>
        </div>
    )
}

export default Button
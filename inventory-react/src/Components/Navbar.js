import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./PrivateRoute"
import brand from "../brand.png"

const Navbar = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    return (
        <nav>
            <div className="brand">
                <img onClick={() => navigate('/')} src={brand} className="" alt="" />
                <NavLink to='/'>
                    Inventory
                </NavLink>
            </div>
            <div className="nav-right">
                {
                    auth.user !== null ? (
                        <NavLink to='/profile'>
                            Profile
                        </NavLink>
                    ):(
                        <NavLink to='/login'>
                            Login
                        </NavLink>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
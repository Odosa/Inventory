import { useAuth } from "./PrivateRoute"
import { useNavigate} from "react-router-dom";

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    const toInventory = () => {
        navigate("/Inventory")
    }

    return (
        <div className="profile">
            <button onClick={toInventory}>back</button>
            <h1>{auth.user}'s Profile</h1>
            <button onClick={handleLogout}>Logout</button>
            <h1>Under Construction</h1>
        </div>
    )
}

export default Profile

import { useNavigate } from "react-router-dom";
import { useAuth } from "./PrivateRoute";

const RequirePR = ({children}) => {
    const auth =  useAuth()
    const navigate = useNavigate()

    if(!auth.user) {
        navigate('/Login')
    }

    return children;
}

export default RequirePR;
import { Routes, Route, Outlet } from 'react-router';
import { useNavigate } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Button from './Components/Buttons';
import Usage from './Components/usage';
import RequirePR from "./Components/RequirePR";
import Inventory from "./Components/Inventory"
import { AuthProvider } from './Components/PrivateRoute';

const App = () => {
  const navigate = useNavigate()
  const userInfoDefault =
  {
    user:'Izodosa',
    pwd: 'odosa'
  }

  const logUser = (userinfo) => {
    if(userinfo.user !== userInfoDefault.user || userinfo.pwd !== userInfoDefault.pwd){
      alert('Invalid Username or Password')
      return
    }
    navigate('/Inventory')
  }

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<div className="welcome"><h1>Welcome to INVENTORY</h1><div className="break"></div><Button/></div>}></Route>
        <Route path='/Login' element={<div><Login onLogin={logUser} /><Outlet/></div>}></Route>
        <Route path='/Signup' element={<div><Signup /><Outlet/></div>}></Route>
        <Route path='/Inventory' element={<div><RequirePR><Inventory /></RequirePR><Outlet/></div>}></Route>
        <Route path='/usage' element={<div><Usage /><Outlet/></div>}></Route>
      </Routes>
    </AuthProvider>
);
}

export default App;

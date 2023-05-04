import { Routes, Route, Outlet } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import LandingPage from './Components/landingPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Profile from './Components/profile';
import Usage from './Components/usage';
import RequirePR from "./Components/RequirePR";
import Inventory from "./Components/Inventory";
import Alert from './Components/alertBox';
import { AuthProvider } from './Components/PrivateRoute';

const App = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState("")
  const navigate = useNavigate()
  const userInfoDefault =
  {
    user:'Izodosa',
    pwd: 'odosa'
  }

  const logUser = (userinfo) => {
    if(userinfo.user !== userInfoDefault.user || userinfo.pwd !== userInfoDefault.pwd){
      setShowAlert(true)
        setMessageType('login_warning')
        setMessage("Invalid Username or Password")
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
      return
    }
    navigate('/Inventory')
  }

  return (
    <AuthProvider>
      {showAlert && <Alert type={messageType} message={message} close={() => setShowAlert(!showAlert)} />}
      <Navbar />
      <Routes>
        <Route path='/' element={<div><LandingPage /><Outlet/></div>}></Route>
        <Route path='/Login' element={<div><Login onLogin={logUser} /><Outlet/></div>}></Route>
        <Route path='/Signup' element={<div><Signup /><Outlet/></div>}></Route>
        <Route path='/Inventory' element={<div><RequirePR><Inventory /></RequirePR><Outlet/></div>}></Route>
        <Route path='/Usage' element={<div><Usage /><Outlet/></div>}></Route>
        <Route path='/Profile' element={<div><RequirePR><Profile /></RequirePR><Outlet/></div>}></Route>
      </Routes>
    </AuthProvider>
);
}

export default App;

import { Routes, Route, Outlet } from 'react-router';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Button from './Components/Buttons';
import Inventory from './Components/Inventory';
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate =useNavigate();
  const userInfoDefault =
  {
    user:'Izodosa',
    pwd: 'odosa'
  }

    const logUser = (userinfo) => {
      if(userinfo.user !== userInfoDefault.user || userinfo.pwd !== userInfoDefault.pwd){
        alert('Invalid Username or Password')
        return
      }else{
        return navigate("/inventory");
      }
    }

  return (
    <Routes>
      <Route path='/' element={<div className="welcome"><h1>Welcome to INVENTORY</h1><div className="break"></div><Button/></div>}></Route>
      <Route path='/Login' element={<div><Login onLogin={logUser} /><Outlet/></div>}></Route>
      <Route path='/Signup' element={<div><Signup /><Outlet/></div>}></Route>
      <Route path='/inventory' element={<div><Inventory /><Outlet/></div>}></Route>
    </Routes>
);
}

export default App;

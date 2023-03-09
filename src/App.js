import { Routes, Route, Outlet } from 'react-router';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Button from './Components/Buttons';
import Inventory from './Components/Inventory';
import Header from './Components/inventory-header';

const App = () => {
  const userInfoDefault =
  {
    user:'Izodosa',
    pwd: 'odosa'
  }

    const logUser = (userinfo) => {
      if(userinfo.user !== userInfoDefault.user){
        alert('Invalid Username')
      }else if(userinfo.pwd !== userInfoDefault.pwd){
        alert('Invalid Password')
      }
    }

  return (
    <Routes>
      <Route path='/' element={<div><h1>Welcome to INVENTORY</h1><Button/></div>}></Route>
      <Route path='/Login' element={<div><Login onLogin={logUser} /><Outlet/></div>}></Route>
      <Route path='/Head' element={<Header username={userInfoDefault.user}/>} />
      <Route path='/Signup' element={<div><Signup /><Outlet/></div>}></Route>
      <Route path='/inventory' element={<div><Inventory /><Outlet/></div>}></Route>
    </Routes>
);
}

export default App;

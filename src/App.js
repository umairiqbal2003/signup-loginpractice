
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import Home from './screeens/home';
import Login from './screeens/login';
import Signup from './screeens/Signup';

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />

   <Route element={<ProtectedRoute/>} >

    <Route path='/home' element={<Home/>}   />
   </Route>

   </Routes>

    </>
  );
}

export default App;

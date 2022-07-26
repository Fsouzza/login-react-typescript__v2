import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

export const AppRouter = () =>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  );
};
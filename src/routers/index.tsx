import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from '../pages/login/login'
import { Register } from '../pages/register/register'

export const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
}
import Home from './home';
import LoginLogic from './loginLogic';
import AboutUS from './aboutUs';
import Category from './categorys';
import {BrowserRouter, Navigate,Route,Routes} from 'react-router-dom';

function Main (){
    return(
        <div>
        <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<LoginLogic/>}/>
        <Route path='/about' element={<AboutUS/>}/>
        <Route path='/category' element={<Category/>}/>
        </Routes>
        </BrowserRouter>
        
        </div>
    )      
}

export default Main
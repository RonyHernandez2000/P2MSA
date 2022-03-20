import Home from './home';
import LoginLogic from './loginLogic';
import AboutUS from './aboutUs';
import {BrowserRouter, Navigate,Route,Routes} from 'react-router-dom';
import RandomUser from './RandomUser';
import Entertainment from './entertainment';
import Sports from './sports';
import News from './news';
const React = require('react')


function Main (){
    return(
        <div>
        <BrowserRouter>
        <Routes>
        <Route path='/login' element={<LoginLogic/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/devs' element={<AboutUS/>}/>
        <Route path='/random' element={<RandomUser/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>


        <Route path="*" element={<Navigate to="/login" replace />} />
        
        </Routes>
        </BrowserRouter>
        
        </div>
    )      
}

export default Main
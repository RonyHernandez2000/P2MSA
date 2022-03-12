<<<<<<< HEAD
import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
=======

import './App.css';
import LoginLogic from './components/loginLogic';
>>>>>>> 38bdb9b9766a84ae02ef1729e8ce44a1c7cabaac

function App() {
 
  return (
<<<<<<< HEAD
    
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    
=======
   <div className="app">
     <LoginLogic/>
    </div>
>>>>>>> 38bdb9b9766a84ae02ef1729e8ce44a1c7cabaac
  );
}

export default App;

import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { navbarlogic } from "./navbarlogic";
//npm install react-icons --save
//https://react-icons.github.io/react-icons/ 




//Code this needs to be worked on
/*{ navbarlogic.map({item, index} => {
  return (
    <li key={index} className={item.className}>
      <Link to={item.path}>
        {item.icon}
        <span>{item.title}</span>
        </Link>
      </li>
    );
  })}*/

//SHORTCUT (rfce) => "enter"
function NavBar() {
  const [sidebar, setSidebar] = useState
  (false);

  const showSidebar = () => setSidebar
  (!sidebar);
  
  
  return (
    <>
    <div className="navbar">
        <Link to ="#" className="menu-bars">
            <FaIcons.FaBars />
        </Link>
    </div>
    <nav className= { sidebar ? "nav-menu active" : "nav-menu"}>
      <ul className='nav-menu-items'>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <AiOutlineClose />
          </Link>
        </li>



      </ul>
    </nav>
  </>
  )
}

export default NavBar

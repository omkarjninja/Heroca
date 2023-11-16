import "./NavLinks.css";
import { NavLink } from "react-router-dom";
function NavLinks(){
    return(
        <ul className="nav-links">
        <li>
        <NavLink to="/about">
            About
        </NavLink>
        </li>
        <li>
        <NavLink to="/contact">
           Contact
        </NavLink>
        </li>
        <li>
        <NavLink to="/">
            Home
        </NavLink>
        </li>
        </ul>
        
       
      
    )
}
export default NavLinks;
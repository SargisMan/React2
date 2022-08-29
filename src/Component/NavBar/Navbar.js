import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import styles from "./navbar.module.css"

const Navbar=()=>{
    return(
    <Nav    activeKey="/home">
        
      <Nav.Item>
        <NavLink to="/"  >Home</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/contact" >Contact</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/about" >About</NavLink>
      </Nav.Item>
    </Nav>
  );
}
export default Navbar;
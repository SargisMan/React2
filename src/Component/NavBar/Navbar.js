import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from "./navbar.module.css";

const navbarItems=[
  {
    to:"/",
    value:"Home"
  },
  {
    to:"/contact",
    value:"Contact"
  },
  {
    to:"/about",
    value:"About Us"
  }
]

const Navbar=()=>{
  const navbarList=navbarItems.map((item,index) => {
    return (
      <Nav.Item key={index}>
        <NavLink 
        to={item.to}  
        activeClassName={styles.activeNavLink}
        exact
        >
        {item.value}
        </NavLink>
      </Nav.Item>
    )
  });
    return(
    <Nav    activeKey="/home">
        {navbarList}

      {/* <Nav.Item>
        <NavLink to="/"  >Home</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/contact" >Contact</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/about" >About</NavLink>
      </Nav.Item> */}
    </Nav>
  );
}
export default Navbar;
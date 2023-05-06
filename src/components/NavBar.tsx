import { NavLink } from "react-router-dom"
const NavBar = () => {

  return(
    <div className="nav-bar">
      <NavLink to="/">Kawaaii App</NavLink>
      <NavLink to="/bank">Bank App</NavLink>
    </div>
  )
}

export default NavBar;
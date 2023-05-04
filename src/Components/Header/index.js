import { NavLink } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg  headerNav">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'> SlamBook ! </NavLink>
                
                <div className="collapse navbar-collapse mx-2 border-start border-danger" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-3">
                    <NavLink className="nav-link" to='/dashboard'> Dashboard </NavLink>
                    <NavLink className="nav-link" to='/profile'> Profile </NavLink> 
                    <NavLink className="nav-link" to='/edit-profile'> Edit </NavLink> 
                    <NavLink className="nav-link" to='/login'> User-Login </NavLink>
                    <NavLink className="nav-link" to='/register'> Register </NavLink>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
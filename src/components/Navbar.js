import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";


export const Navbar = () => {
    const navlinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive? 'bold':'normal',
            textDecoration: isActive? 'none' : 'underline',
        }
    }

    const auth = useAuth()
    
    return (
        <nav className="primary-nav">
            <NavLink style={navlinkStyles} to='/'>
                Home
            </NavLink>
            <NavLink style={navlinkStyles} to='/about'>
                About
            </NavLink>
            <NavLink style={navlinkStyles} to='/products'>
                products
            </NavLink>
            <NavLink style={navlinkStyles} to='/Profile'>
                profile
            </NavLink>
            <NavLink style={navlinkStyles} to='/contact'>
                contact
            </NavLink>
            {!auth.user && (
                <NavLink style={navlinkStyles} to='./login'>
                    Login
                </NavLink>
            )
            }
        </nav>
    )
}
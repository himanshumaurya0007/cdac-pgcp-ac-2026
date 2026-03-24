import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <h2 className="navbar__logo">Navigation Menu (Navbar)</h2>

                <ul className="navbar__menu">
                    <li>
                        <NavLink to="/home" className="navbar__link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" className="navbar__link">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" className="navbar__link">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
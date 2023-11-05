

import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <img width={70} height={70} src={logo} alt="logo" />
            <ul className="nav-menu">
                <li className="nav-link mobile-hide">Me</li>
                <li className="nav-link mobile-hide">Projects</li>
                <li className="nav-link mobile-hide">Contact</li>
                <a href='https://github.com/ronrustemi123' target='_blank'>GitHub <i className="fa-brands fa-github"></i></a>
            </ul>
        </nav>
    );
}
 
export default Navbar;
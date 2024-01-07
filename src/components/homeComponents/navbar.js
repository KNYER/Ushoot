import { useRef } from "react";
import Images from "../../assets";
import {FaBars,FaTimes} from "react-icons/fa";
const NAVBAR = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return ( 
        <div>
            <header>
            <div className="logo">
                <img className="ushootLogo" src= {Images.logo}></img>
            </div>    
            <nav ref={navRef} className="nav-menu">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#service">service</a>
                <a href="#contact">contact</a>
                <button className="nav-btn nav-closbtn" onClick={showNavbar}>
                <FaTimes/>
            </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
            </header>
        </div>
     );
}
 
export default NAVBAR;
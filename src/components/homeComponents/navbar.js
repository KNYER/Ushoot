import { useRef } from "react";
import Images from "../../assets";
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
               
            </nav>
            </header>
        </div>
     );
}
 
export default NAVBAR;
import { useEffect, useState } from "react";
import NavbarMenu from "./_components/navbar-menu";
import './styles/navbar.css'
import Sidebar from "./_components/sidebar";
import { Logo } from "./_components/logo";
import ContactButton from "./_components/contact-button";


const Navbar = () => {

  const [isOpen, setIsOpen ] = useState()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const toggleMenu = () => setIsOpen((isOpen) => !isOpen)
  const handleResize = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 980) { 
      setIsOpen(false);
    }
  }, [windowWidth]);

  return ( 
    <div className="navbar-container">
      <Logo />
      <NavbarMenu />
      <div className="contact-div">
        <ContactButton />
      </div>
      <div className="hamburger-div">
        <button className="hamburger-button" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </button>
      </div>
      <Sidebar isOpen={isOpen}/>
    </div>
   );
}
 
export default Navbar;
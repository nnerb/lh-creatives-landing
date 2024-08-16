/* eslint-disable react/prop-types */

import { Logo } from "./logo"
import ContactButton from "./contact-button"
import MenuItems from "./menu-items"
import '../styles/sidebar.css'

const SIDEBAR_CONTACT_BUTTON_STYLE = {
  width: '100%',
  maxWidth: '344px'
}

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Logo />
      <nav className="sidebar-menu">
        <MenuItems  />
        <ContactButton style={SIDEBAR_CONTACT_BUTTON_STYLE} />
      </nav>
      
    </div>
  );
};

export default Sidebar;


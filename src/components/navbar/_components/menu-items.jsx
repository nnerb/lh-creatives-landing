import { menuItems } from "../../../constants/menuItem";
import iconUrl from "../../../assets/images/icon-external.svg"

const MenuItems = () => {
  return (
    <>
      {menuItems.map((item) =>  (
        <a href={item.href} key={item.name} className='menu-item'>
          {item.name}
          {item.name === 'RECRUIT' && <img src={iconUrl} alt="" className="icon" />}
        </a>
       )   
      )}
    </>
  );
};

export default MenuItems;

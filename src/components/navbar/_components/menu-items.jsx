import { menuItems } from "../../../constants/menuItem"
import iconUrl from "../../../assets/images/icon-external.svg"
import { scrollToElement } from "../../../../utils/scrollUtils"

const MenuItems = () => {

  const handleClick = (e, id) => {
    e.preventDefault()
    scrollToElement(id, 150)
  };

  return (
    <>
      {menuItems.map((item) =>  (
        <a 
          href={item.href} 
          key={item.name} 
          className='menu-item' 
          onClick={(e) => handleClick(e, item.href)}
        >
          {item.name}
          {item.name === 'RECRUIT' && <img src={iconUrl} alt="" className="icon" />}
        </a>
       )   
      )}
    </>
  )
}

export default MenuItems

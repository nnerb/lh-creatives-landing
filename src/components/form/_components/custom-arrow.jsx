import { components } from 'react-select'

const CustomArrow = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg 
        fill="#AAAAAA" 
        height="12px" 
        width="14px" 
        version="1.1" 
        id="Capa_1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 450 450" 
        xmlSpace="preserve" 
        stroke="#AAAAAA"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <polygon points="245,456.701 490,33.299 0,33.299 "></polygon> 
        </g>
      </svg>
    </components.DropdownIndicator>
  );
};

export default CustomArrow

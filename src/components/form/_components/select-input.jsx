/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Select from 'react-select'
import CustomArrow from './custom-arrow'

const customSelectStyle = (width) => ({
  control: (provided, state) => ({
    ...provided,
    width: width < 889 ? '100%' : '302px', 
    boxShadow: state.isFocused ? '0 0 0 1px black' : 'none',
    border: `1px solid ${state.isFocused ? 'black' : '#AAAAAA'}`,
    '&:hover': {
      borderColor: state.isFocused ? 'black' : '#AAAAAA',
    },
    borderRadius: '3px',
  }),
})

const SelectInput = ({ options, value, onChange }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="form-group-input">
      <Select
        options={options}
        styles={customSelectStyle(windowWidth)}
        value={value}
        onChange={onChange}
        components={{ DropdownIndicator: CustomArrow }}
        placeholder=""
      />
    </div>
  );
};

export default SelectInput

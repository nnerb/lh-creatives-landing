/* eslint-disable react/prop-types */
import CustomCheck from "./custom-check"

const CheckboxInput = ({ checkboxOptions, formData, handleChange }) => {
  return ( 
    <div className="form-group">
      <div className="form-group-text">
        <legend>Checkbox Field</legend>
      </div>
      <div className='form-checkbox-container'>
        {checkboxOptions.map((option) => (
          <label key={option.id} className="form-group-box">
            <input
              type="checkbox"
              name="checkboxField"
              value={option.label}
              checked={formData.checkboxField.includes(option.label)}
              onChange={handleChange}
            />
            <span className="checkmark-checkbox">
              {formData.checkboxField.includes(option.label) && <CustomCheck />}
            </span>
            <p>{option.label}</p>
          </label>
        ))}
      </div>
    </div>
  )
}

export default CheckboxInput

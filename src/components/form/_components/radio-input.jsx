/* eslint-disable react/prop-types */
const RadioInput = ({ radioOptions, formData, handleChange}) => {
  return (
    <div className="form-group">
      <div className="form-group-text">
        <legend>Radio Field</legend>
      </div>
      <div className="form-radio-container">
        {radioOptions.map((option) => (
          <label key={option.id} className="form-group-box">
            <input
              type="radio"
              name="radioField"
              value={option.label}
              checked={formData.radioField === option.label}
              onChange={handleChange}
            />
            <span className="checkmark-radio"></span>
            <p>{option.label}</p>
          </label>
        ))}
      </div>
    </div>
  )
}


export default RadioInput

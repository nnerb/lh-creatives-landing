import { useState } from 'react'
import './form.css'
import CustomCheck from './_components/custom-check'
import SelectInput from './_components/select-input'
import { checkboxOptions, radioOptions, selectOptions } from '../../constants/formOptions'
import TextInput from './_components/text-input'


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    selectField: '',
    radioField: '',
    checkboxField: []
  })

  console.log(formData)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox'
        ? checked
          ? [...prevData.checkboxField, value]
          : prevData.checkboxField.filter((item) => item !== value)
        : value
    }))
  }

  const handleSelectChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      selectField: selectedOption ? selectedOption.label : ''
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  const selectedOption = selectOptions.find(option => option.label === formData.selectField)

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className='form-group-container'>
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          label="Company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        <TextInput
          label="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="form-group">
          <div className="form-group-text">
            <label>Select Field</label>
          </div>
          <SelectInput
            options={selectOptions}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </div>

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
      </div>
      <div className="submit-button-container">
        <button type="submit" className='submit-button'>Submit</button>
      </div>
      
    </form>
  );
};

export default Form

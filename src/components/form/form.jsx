import { useState } from 'react'
import './form.css'
import SelectInput from './_components/select-input'
import { checkboxOptions, radioOptions, selectOptions } from '../../constants/formOptions'
import TextInput from './_components/text-input'
import CheckboxInput from './_components/checkbox-input'
import RadioInput from './_components/radio-input'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    selectField: '',
    radioField: '',
    checkboxField: []
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox'
        ? checked
          ? [...prevData.checkboxField, value]
          : prevData.checkboxField.filter((item) => item !== value)
        : type === 'radio'
        ? value
        : value
    }))
  }

  const handleSelectChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      selectField: selectedOption ? selectedOption.label : ''
    }))
  }

  const selectedOption = selectOptions.find(option => option.label === formData.selectField)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="form-container" id="recruit">
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
        <SelectInput
          options={selectOptions}
          value={selectedOption}
          onChange={handleSelectChange}
        />
        <RadioInput
          radioOptions={radioOptions}
          formData={formData}
          handleChange={handleChange}
        />
        <CheckboxInput
          checkboxOptions={checkboxOptions}
          formData={formData}
          handleChange={handleChange}
        />
      </div>
      <div className="submit-button-container">
        <button type="submit" className='submit-button'>Submit</button>
      </div>
    </form>
  )
}

export default Form

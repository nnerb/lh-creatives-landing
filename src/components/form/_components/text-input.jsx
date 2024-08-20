import PropTypes from 'prop-types';

const TextInput = ({ label, type, name, value, onChange }) => {
  return (
    <div className="form-group">
      <div className="form-group-text">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="form-group-input">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="input-text"
        />
        <span className="checkmark"></span>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;

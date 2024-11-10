// src/components/Input.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Input = ({
  label,
  value,
  onChange,
  type = 'text',
  disabled = false,
  placeholder = '',
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
    />
  );
};

Input.propTypes = {
  /** Label for the input field */
  label: PropTypes.string.isRequired,
  /** Value of the input field */
  value: PropTypes.string.isRequired,
  /** Function to handle value change */
  onChange: PropTypes.func.isRequired,
  /** Type of the input (text, password, number, etc.) */
  type: PropTypes.string,
  /** Whether the input is disabled */
  disabled: PropTypes.bool,
  /** Placeholder text for the input */
  placeholder: PropTypes.string,
};

export default Input;

// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

// Primary UI component for user interaction
const Button = ({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label,
  disabled = false,
  onClick = undefined,
}) => {
  const variant = primary ? 'contained' : 'outlined';
  const sizeMapping = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };

  return (
    <MuiButton
      variant={variant}
      color={primary ? 'primary' : 'secondary'}
      size={sizeMapping[size]}
      style={backgroundColor ? { backgroundColor } : undefined}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;

// src/components/Input.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  test('renders the input with the provided label', () => {
    render(<Input label="Test Input" value="" onChange={() => {}} />);
    const labelElement = screen.getByLabelText(/Test Input/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('calls onChange handler when value changes', () => {
    const handleChange = jest.fn();
    render(<Input label="Test Input" value="" onChange={handleChange} />);
    const inputElement = screen.getByLabelText(/Test Input/i);
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('is disabled when the disabled prop is true', () => {
    render(<Input label="Disabled Input" value="" onChange={() => {}} disabled />);
    const inputElement = screen.getByLabelText(/Disabled Input/i);
    expect(inputElement).toBeDisabled();
  });
});

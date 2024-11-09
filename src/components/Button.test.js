// src/components/Button.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button with the provided label', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies primary styling if primary prop is true', () => {
    render(<Button primary={true} label="Primary Button" />);
    const buttonElement = screen.getByText(/Primary Button/i);
    expect(buttonElement).toHaveClass('MuiButton-containedPrimary');
  });

  test('applies secondary styling if primary prop is false', () => {
    render(<Button primary={false} label="Secondary Button" />);
    const buttonElement = screen.getByText(/Secondary Button/i);
    expect(buttonElement).toHaveClass('MuiButton-outlinedSecondary');
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button label="Disabled Button" onClick={handleClick} disabled />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('is disabled when the disabled prop is true', () => {
    render(<Button label="Disabled Button" disabled />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toBeDisabled();
  });

  // Example for async events or delayed effect without act
  test('handles delayed click event', () => {
    const handleClick = jest.fn();
    render(<Button label="Delayed Button" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Delayed Button/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});

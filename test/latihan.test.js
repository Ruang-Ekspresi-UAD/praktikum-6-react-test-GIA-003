import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom'; 
import React from 'react';

describe('Counter Component', () => {
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });

  test('Reset the count using reset button', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
  });
});

describe('Greeting Component', () => {
  test('Greeting component shows your name', () => {
    render(<Greeting name="agusTheKing" />);
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('Hello, agusTheKing');
  });

  test('Greeting component shows your professor\'s name', () => {
    render(<Greeting name="Dr. Budi" />);
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('Hello, Dr. Budi');
  });
});

describe('AlertButton Component', () => {
  test('Triggers alert with correct message when clicked', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<AlertButton message="Hello agusTheKing" />);
    
    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);
    
    expect(mockAlert).toHaveBeenCalledWith('Hello agusTheKing');
    mockAlert.mockRestore();
  });
});

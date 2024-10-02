// src/__tests__/BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';

test('renders booking form', () => {
  render(<BookingForm />);
  expect(screen.getByText(/Book a Table/i)).toBeInTheDocument();
});

test('validates form inputs', () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByText(/Book Now/i));
  
  expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
  expect(screen.queryByText(/At least one guest is required/i)).not.toBeInTheDocument();
});

test('submits form with valid data', () => {
  console.log = jest.fn();
  render(<BookingForm />);
  
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-12-25' } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '19:00' } });
  fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'birthday' } });
  
  fireEvent.click(screen.getByText(/Book Now/i));
  
  expect(console.log).toHaveBeenCalledWith('Booking Successful', {
    name: 'John Doe',
    email: 'john@example.com',
    date: '2024-12-25',
    time: '19:00',
    guests: '4',
    occasion: 'birthday'
  });
  
  expect(screen.getByLabelText(/Name/i).value).toBe('');
  expect(screen.getByLabelText(/Email/i).value).toBe('');
});

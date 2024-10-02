// src/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email) {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        errors.email = 'Email is invalid';
      }
    }
    if (!form.date) errors.date = 'Date is required';
    if (!form.time) errors.time = 'Time is required';
    if (form.guests < 1) errors.guests = 'At least one guest is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log('Booking Successful', form);
      // Reset form
      setForm({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 1,
        occasion: ''
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form" className="booking-form">
      <h2>Book a Table</h2>
      <div className="form-group">
        <label htmlFor="name">Name<span aria-hidden="true">*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <span className="error" role="alert">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email<span aria-hidden="true">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <span className="error" role="alert">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="date">Date<span aria-hidden="true">*</span></label>
        <input
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.date ? "true" : "false"}
        />
        {errors.date && <span className="error" role="alert">{errors.date}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="time">Time<span aria-hidden="true">*</span></label>
        <input
          type="time"
          id="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.time ? "true" : "false"}
        />
        {errors.time && <span className="error" role="alert">{errors.time}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests<span aria-hidden="true">*</span></label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          value={form.guests}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.guests ? "true" : "false"}
        />
        {errors.guests && <span className="error" role="alert">{errors.guests}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;

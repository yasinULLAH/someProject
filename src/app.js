// src/App.js
import React from 'react';
import BookingForm from './BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Little Lemon Restaurant</h1>
      </header>
      <main>
        <BookingForm />
      </main>
      <footer>
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

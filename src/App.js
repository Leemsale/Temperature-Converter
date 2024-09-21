import React, { useState } from "react";
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Function to convert Celsius to Fahrenheit
  const convertToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

  // Function to convert Fahrenheit
  const convertToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

  // Event handler for Celsius input change
  const handleCelsiusChange = (event) => {
    const value = event.target.value;

    if (value === '') {
      setCelsius('');
      setFahrenheit(''); //clear both fields
    } else {
      const newCelsius = parseFloat(value);
      setCelsius(newCelsius);
      setFahrenheit(convertToFahrenheit(newCelsius).toFixed(2));
    }
  };

  // Event handler for Fahrenheit input change
  const handleFahrenheitChange = (event) => {
    const value = event.target.value;

    if (value === '') {
      setFahrenheit('');
      setCelsius(''); // Clear both fields
    } else {
      const newFahrenheit = parseFloat(value);
      setFahrenheit(newFahrenheit);
      setCelsius(convertToCelsius(newFahrenheit).toFixed(2));
    }
  };

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <div>
        {/* Input for Celsius */}
        <label>Celsius:
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Enter celsius"
          />
        </label>

        {/* Input for Fahrenheit */}
        <label>Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Enter Fahrenheit"
          />
        </label>
      </div>

      {/* Resseting the input fields */}
      <button onClick={() => (setFahrenheit(''), setCelsius(''))}>Reset</button>

      {/* Display the conversion for either */}
      {celsius !== '' && !isNaN(celsius) && (<h2>{celsius}°C is {convertToFahrenheit(celsius).toFixed(1)}°F</h2>)}
      {/* {fahrenheit !== '' && !isNaN(fahrenheit) && (<h2>{fahrenheit}° is {convertToCelsius(fahrenheit).toFixed(1)}°C</h2>)} */}

      {/* Display error message only for the relevant field */}
      {celsius !== '' && isNaN(celsius) && (
        <h2>Enter a valid Celsius tempetature</h2>
      )}
      {fahrenheit !== '' && isNaN(fahrenheit) && (
        <h2>Enter a valid Fahrenheit tempetature</h2>
      )}
    </div>
  );
}

export default App;
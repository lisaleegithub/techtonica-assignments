// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [day, setDay] = useState({})
    
  {/* useEffect(<function>, <dependency>) */}

    useEffect(() => {
      fetch("/api/weather")
      .then((response) => response.json())
      .then((data) => setDay(data.day))
    }, [])

    return (
    <div className="App">
      <h1>Weather App</h1>

      {(day === "undefined") ? (
        <p>Loading...</p>
      ) : (
        // otherwise
        <div>
          <p>{day.dt_txt}</p>
          {/* <p>{day.main.temp}</p> */}
          {/* <p>{day.weather[0].description}</p> */}
        </div>
      )
    }
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [day, setDay] = useState({})
    
  {/* useEffect(<function>, <dependency>) */}
// useEffect: pass a function () everything inside the function 
// executes every time app renders

    useEffect(() => {
      fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => setDay(data.day))
      console.log("hello");
    }, [])
    console.log(day)

    return (
    <div className="App">
      <h1>Weather App</h1>
      
      {(Object.keys(day).length === 0) ? (
        <p>Loading...</p>
      ) : (
        // show: day, date, time, icon, temp, descrip
        <div>
          <p>{day.dt_txt}</p>
          <p>Icon Here</p>
          <p>Temperature: {day.main.temp} &deg;F</p>
          <p>Description: {day.weather[0].description}</p>
        </div>
      )
    }
    </div>
  );
}

export default App;

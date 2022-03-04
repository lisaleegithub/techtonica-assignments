// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

function App() {
  const [days, setDay] = useState({})
    
  {/* useEffect(<function>, <dependency>) */}
// useEffect: pass a function () everything inside the function 
// executes every time app renders

    useEffect(() => {
      fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => setDay(data.days))
      console.log("hello");
    }, [])
    console.log(days)

    return (
    <div className="App">
      <h1>Weather App</h1>
      
      {(Object.keys(days).length === 0) ? (
        <p>Loading...</p>
      ) : (
        // show: day, date, time, icon, temp, descrip
        <div>
          <p>{days[0].dt}</p>
          <p>Icon Here</p>
          <p>Min. Temperature: {days[0].temp.min} &deg;F</p>
          <p>Max. Temperature: {days[0].temp.max} &deg;F</p>
          <p>Description: {days[0].weather[0].description}</p>
        </div>
      )
    }
    </div>
  );
}

export default App;

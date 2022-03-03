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
    }, []) // empty array = this runs on the first render

    return (
    <div className="App">
      <h1>Weather App</h1>

    {/* Q to ask: is this the right check? */}
      {(day === "undefined") ? (
        <p>Loading...</p>
      ) : (
        // otherwise
        <div>
          {/* <p>{day.main.temp}</p>  */}
          <p>{day.dt_txt}</p>
          {/* <p>{day.clouds.all}</p> */}
        </div>
      )
    }
    </div>
  );
}

export default App;

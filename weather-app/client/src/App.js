import './styles.css';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';

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
      <h1>5-Day Forecast for Seattle, WA</h1>
      
      {(Object.keys(days).length === 0) ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Card props={days[0]} />
          <Card props={days[1]} />
          <Card props={days[2]} />
          <Card props={days[3]} />
          <Card props={days[4]} />
        </div>
      )
    }
    </div>
  );
}

export default App;

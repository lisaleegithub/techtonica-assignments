
import './App.css';
import React, { useState, useEffect } from 'react';
import Quizbox from './Components/Quizbox';

function App() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch("/api/quiz")
    .then((res) => res.json())
    .then((data) => 
      {setData(data[0])
      console.log(data[0])})
    }, [])

  return (
    <div className="App">
      <h1>Quiz App</h1> 
      {/* properties within react can be str, obj, array
      pass in anything (almost)
      i could iterate over an array */}

      <div className='question-test'>
        <Quizbox question={data.question}/>
      </div>

    </div>
  );
}

export default App;

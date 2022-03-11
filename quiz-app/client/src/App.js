
import './App.css';
import React, { useState, useEffect } from 'react';
import Quizbox from './Components/Quizbox';

function App() {
  const [data, setData] = useState({});
  
  const fetchData = () => {
    fetch("/api/quiz")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(data)
        console.log(data)
        // console.log(data[0].question)
        // console.log(data[0].incorrect_answers)
        // console.log(data[0].correct_answer)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
       <h1>Quiz App</h1> 

      {/* condition ? ifTrue : ifFalse 
      if data object keys length is 0, return loading
      if not true, return <div> </div>*/}
      {(Object.keys(data).length === 0) ? (
        <p>Loading...</p>
      ) : (
      <div>  
        <Quizbox quiz={data[0]}/> 
      </div>

      )}
    </div>
  )
}

export default App;


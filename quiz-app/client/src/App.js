
import './App.css';
import React, { useState, useEffect } from 'react';
import Quizbox from './Components/Quizbox';

function App() {
  const [data, setData] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

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

  const nextClicked = () => {
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		}
  }

  return (
    <div className="App">
       <h1>Quiz App</h1> 

      {/* condition ? ifTrue : ifFalse 
      if data object keys length is 0, return loading
      if not true, return <div> </div>*/}
      {(Object.keys(data).length === 0) ? (
        <p>Loading...</p>
      ) : (
      <div className="question-text">  
        <Quizbox quiz={data[currentQuestion]} />
        <button onClick={() => nextClicked()}>Next</button>
      </div>
      )}
    </div>
  )
}
export default App;


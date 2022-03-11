import { useState } from "react";
import RadioButton from "./RadioButton";
import Next from "./Next";

const Quizbox = (props) => {
    const [message, setMessage]  = useState("");
    let options = combineAnswers(props.quiz); 

    // combine incorrect & correct answers into an array
    function combineAnswers(quiz) {
        let answerOptions = [];
        let incorrect = quiz.incorrect_answers;
        let correct = quiz.correct_answer

        for (let i = 0; i < incorrect.length; i++) {
            answerOptions.push(incorrect[i])
        }
        answerOptions.push(correct);
        console.log(answerOptions)
        return answerOptions;
    }

    // decoding
    function htmlDecode(input){
        var e = document.createElement('textarea');
        e.innerHTML = input;
        // handle case of empty input
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    const handleChange = (label) => {
        // check against correct answer
        if (label === props.quiz.correct_answer) {
            setMessage("yay you got it right!")
        } else {
            setMessage("wrong :(");
        }
        console.log(label);
      }

    function nextClicked(){
        console.log("next button clicked");
    }

    return (
        <div>
            <p>{htmlDecode(props.quiz.question)}</p>
            <ul>
                {options.map((option) => <RadioButton label={option} onChange={handleChange} />)}
            </ul>
            <div className="message">
                {message}
            </div>
            <Next onClick={nextClicked}  />
        </div>
    )
}

export default Quizbox;
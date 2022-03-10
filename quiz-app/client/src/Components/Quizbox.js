// import React, { useState } from 'react';

const Quizbox = (props) => {

    return (
        <div>
            <p>{props.question}</p>
            {/* {props.incorrectAnswer}
            {props.correctAnswer} */}
        </div>
    )
}

export default Quizbox;

    // // decoding
    // function htmlDecode(input){
    //     var e = document.createElement('textarea');
    //     e.innerHTML = input;
    //     // handle case of empty input
    //     return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    // }
    
    // return (
    // <div>
    //     Question: {htmlDecode(props.question)};
    //     Inc Answer: {htmlDecode(props.incorrectAnswer)};
    //     Cor Answer: {htmlDecode(props.correctAnswer)};
    // </div>
    // )
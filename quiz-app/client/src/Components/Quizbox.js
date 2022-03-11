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

const Quizbox = (props) => {
    let options = combineAnswers(props.quiz); 

    return (
        <div>
            <p>{htmlDecode(props.quiz.question)}</p>
            <p>{options}</p>
        </div>
    )
}

export default Quizbox;
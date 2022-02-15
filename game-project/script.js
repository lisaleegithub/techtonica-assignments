// REACT things
// parent to child only
// state for counter

// from MDN get random int between two values inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}  

// start game button generates a secret number (answer)
// resets if pressed again
let firstForm = document.getElementById("firstForm")
let answer = 0;
let guessCounter = 0;
let numbersList = [];
firstForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let min = document.getElementById("minimum").value;
    let max = document.getElementById("maximum").value;
    answer = getRandomIntInclusive(min, max);
    console.log("The secret number is: " + answer);

    document.body.style.backgroundColor = "white";
    guess.value = "";
    message[0].innerHTML = "";
    guessCounter = 0;
    numbersList = [];
    counter[0].innerHTML = "Number of guesses: ";
    list[0].innerHTML = "Your guesses: ";
})

//enable submit button only after start game button clicked
function enableSubmitButton() {
    document.getElementById("submit").disabled = false;
}
let guess = document.getElementById("guess")
let message = document.getElementsByClassName("message");
let counter = document.getElementsByClassName("counter");
let list = document.getElementsByClassName("list");
// let guessCounter = 0;
// let numbersList = [];

// submit guess button
let secondForm = document.getElementById("secondForm");
secondForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // change guess to number type
    let userGuess = Number(guess.value);

    if (userGuess == "") {
        message[0].innerHTML = "Try again!"
        document.body.style.backgroundColor = "#E5C2D4";
        message[0].style.color = "red";
        console.log(userGuess);
    }   
    else if (answer === userGuess) {
        message[0].innerHTML = "Yay you guessed it right!! :D"
        document.body.style.backgroundColor = "#B5D1C2";
        message[0].style.color = "blue";
        guessCounter += 1;
        counter[0].innerHTML = "Number of guesses: " + guessCounter;
    } 
    else {
        if (userGuess < document.getElementById("minimum").value || userGuess > document.getElementById("maximum").value) {
            message[0].innerHTML = "Input not within the range" 
        } else if (userGuess > answer) {
            message[0].innerHTML = `Answer is lower than ${userGuess}`
        } else if (userGuess < answer) {
            message[0].innerHTML = `Answer is higher than ${userGuess}`
        }
        document.body.style.backgroundColor = "#E5C2D4";
        message[0].style.color = "red";
        
        guessCounter += 1;
        // console.log(guessCounter);
        numbersList.push(userGuess);
        // console.log(numbersList);
        counter[0].innerHTML = "Number of guesses: " + guessCounter;
        list[0].innerHTML = "Your guesses: " + numbersList;
    }
})

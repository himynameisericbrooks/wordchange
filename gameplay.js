const startword = "lemon";
var starthtml = document.querySelector("#start-word");
starthtml.innerHTML = "Starting word: " + startword;

var currentword = startword;
var currenthtml = document.querySelector("#current-word");
currenthtml.innerHTML = "Current word: " + currentword;

const destinationword = "ladle";
var destinationhtml = document.querySelector("#destination-word");
destinationhtml.innerHTML = "Destination word: " + destinationword;

const validwords = ["a", "as", "at", "ab", "ad", "ah", "al", "am", "an", "ap", "aw", "ax", "ba", "bc", "be", "bi", "bo", "bp", "br", "bs", "by", "ca", "cc", "cd", ]

console.log("It is your turn:")

console.log("bye")


// Attempts counter
var tryCount = 1;

// ask the user to guess the random number
var guess = 0;

// input and output
var input = document.querySelector("#input");
var output = document.querySelector("#output");

// button stuff
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", playGame, false);

function playGame()
{
    guess = input.value;

// if they guess wrong, tell them if they were too high or too low and have them guess again
    output.innerHTML = '<span>' + 'Number of changes so far: ' + tryCount + '<br>' + ' You changed the word to: ' + input.value + " Now it's someone else's turn turn." + '</span>';
    tryCount +=1;

    // If a non-number is submitted
//     else {
//         output.innerHTML = 'That is not a valid number. <br> <span>Try again!</span>';
//         }
}



// Display starting word and the destination word



// Display current word



// Tell the player what is happening in the game:
// If it is your turn, this will tell you that it is your turn and will explain that you should change one letter in the current word to make it more similar to the destination word
// If it is not your turn, this will let you know the user name of the active player



// When it is your turn, an input button and text input field will display
// The input field will have the input text of the current word by default, but the button will only except the input if it is a legal change



// If the button is pushed with an illegal change, it will tell the user that that word is not a legal change and ask for a different word
// If the button is pushed with a legal word, the html output will let you know that it was a legal play and above instances of current word will be replaced by your input. It will no longer be your turn
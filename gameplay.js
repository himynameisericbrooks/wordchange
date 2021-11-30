// const awords = require('./valid-words/awords')
// const bwords = require('./valid-words/bwords')
// const cwords = require('./valid-words/cwords')
// const dwords = require('./valid-words/dwords')
// const ewords = require('./valid-words/ewords')
// const fwords = require('./valid-words/fwords')
// const gwords = require('./valid-words/gwords')
// const hwords = require('./valid-words/hwords')
// const iwords = require('./valid-words/iwords')
// const jwords = require('./valid-words/jwords')
// const kwords = require('./valid-words/kwords')
// const lwords = require('./valid-words/lwords')
// const mwords = require('./valid-words/mwords')
// const nwords = require('./valid-words/nwords')
// const owords = require('./valid-words/owords')
// const pwords = require('./valid-words/pwords')
// const qwords = require('./valid-words/qwords')
// const rwords = require('./valid-words/rwords')
// const swords = require('./valid-words/swords')
// const twords = require('./valid-words/twords')
// const uwords = require('./valid-words/uwords')
// const vwords = require('./valid-words/vwords')
// const wwords = require('./valid-words/wwords')
// const xwords = require('./valid-words/xwords')
// const ywords = require('./valid-words/ywords')
const zwords = require('./valid-words/zwords.js');

const startword = "lemon";
var starthtml = document.querySelector("#start-word");
starthtml.innerHTML = "Starting word: " + startword;

var currentword = startword;
var currenthtml = document.querySelector("#current-word");
currenthtml.innerHTML = "Current word: " + currentword;
document.getElementById("input").defaultValue = currentword;

const destinationword = "ladle";
var destinationhtml = document.querySelector("#destination-word");
destinationhtml.innerHTML = "Destination word: " + destinationword;

console.log(zwords)


// Attempts counter
// var count = 1;

// input and output
// var input = document.querySelector("#input");
// var output = document.querySelector("#output");

// button stuff
// var button = document.querySelector("button");
// button.style.cursor = "pointer";
// button.addEventListener("click", playGame, false);

// function playGame()
// {
    // output.innerHTML = '<span>' + 'Number of changes so far: ' + count + '<br>' + ' You changed the word to: ' + input.value + " Now it's someone else's turn turn." + '</span>';
    // tryCount +=1;
// }
// Display starting word and the destination word



// Display current word



// Tell the player what is happening in the game:
// If it is your turn, this will tell you that it is your turn and will explain that you should change one letter in the current word to make it more similar to the destination word
// If it is not your turn, this will let you know the user name of the active player



// When it is your turn, an input button and text input field will display
// The input field will have the input text of the current word by default, but the button will only except the input if it is a legal change



// If the button is pushed with an illegal change, it will tell the user that that word is not a legal change and ask for a different word
// If the button is pushed with a legal word, the html output will let you know that it was a legal play and above instances of current word will be replaced by your input. It will no longer be your tur
//This is our array storing all of our alphabet letters as strings.
var alphabetSoup = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 //These are our variables that are global in scope. 
var gamesWon = 0;
var gamesLost = 0;
var remainingGuesses = 10;

var hangmanVocab = [
    "insouciant",
    "eudaemonic",
    "smaragdine",
    "esquamulose",
    "elucubrate",
    "odontalgia",
    "staphylococci",
    "antipyretic",
    "xanthosis",
    "vivisepulture",
    "euonym",
    "chiaroscurist",
    "logorrhea",
    "prospicience",
    "autochthonous",
    "ursprache",
    "cymotrichous",
    "scherenschnitte"
];
/*
var hangmanVocab = {
    insouciant: "Definition",
    eudaemonic: "Definition",
    smaragdine: "Definition",
    esquamulose: "Definition",
    elucubrate: "Definition",
    odontalgia: "Definition",
    staphylococci: "Definition",
    antipyretic: "Definition",
    xanthosis: "Definition",
    vivisepulture: "Definition",
    euonym: "Definition",
    chiaroscurist: "Definition",
    logorrhea: "Definition",
    prospicience: "Definition",
    autochthonous: "Definition",
    ursprache: "Definition",
    cymotrichous: "Definition",
    scherenschnitte: "Definition"
}; */

var letterContainer = [];
var correctLetter = [];
var incorrectLetter = [];
var correctCounter = 0;

var randomizedNumber = Math.floor(Math.random() * hangmanVocab.length);
var randomizedWord = hangmanVocab[randomizedNumber];
console.log(randomizedWord);//Word printed to console


//Places all text in the game in the reset position.
document.getElementById("startGame").innerHTML = "Press any key to begin the game.";
document.getElementById("pLettersMissed").innerHTML = "Letters Missed: ";
document.getElementById("pRemainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;
document.getElementById("pWins").innerHTML = "Wins: " + gamesWon;
document.getElementById("pLosses").innerHTML = "Losses: " + gamesLost;


//Hiding the letters of each word in play in place of underlines.
var underlineToHTML;
var underline = [];// Pushing underlines into this array.
function underlineConvert() {
    for (var i = 0; i < randomizedWord.length; i++) {
        underline[i] = '_';

    }
    underlineToHTML = underline.join(" ");
    document.getElementById("pHiddenWord").innerHTML = underlineToHTML;
}

underlineConvert();




document.onkeyup = function (event) {
    var humanChoice = String.fromCharCode(event.which).toLowerCase();
    if (alphabetSoup.indexOf(humanChoice) >= 0 && randomizedWord.indexOf(humanChoice) > -1) {
        underlineToLetter();
        correctLetter.push(humanChoice);
        

        //console.log("Correct Letter: " + correctLetter); // Testing

    } else {
        incorrectLetter.push(" " + humanChoice);
        //console.log("Incorrect Letter: " + incorrectLetter); // Testing
        document.getElementById("pLettersMissed").innerHTML = "Letters Missed: " + incorrectLetter;
        remainingGuesses--;

        document.getElementById("pRemainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;
    }

    if (remainingGuesses === 0) {
        gamesLost++;
        document.getElementById("startGame").innerHTML = "You Lose.  Press any key to begin another game.";
        document.getElementById("pLosses").innerHTML = "Losses: " + gamesLost;

    }



}
// function startingGame() {

//     // for(var i = 0; i< underline; i++){
//     // 		correctLetter.push('_');
//     // 		document.getElementById('pHiddenWord').innerHTML = correctLetter;
//     // 	}

//     //document.getElementById('pHiddenWord').innerHTML = underline;
//     //document.getElementById('pHiddenWord').innerHTML = randomizedWord;
// }


function underlineToLetter() {
    
    var humanChoice = String.fromCharCode(event.which).toLowerCase();
    var letterPushed = humanChoice;
    for (var i = 0; i < randomizedWord.length; i++) {
        if (randomizedWord[i] == letterPushed) {
            underline[i] = letterPushed; // pushes all the letters of equivalent value to an empty array
            correctCounter++;
            console.log("Underline dot length: " + underline.length);
            console.log("Letter Pushed: " + letterPushed.length);
            console.log("Correct Counter"+ correctCounter);
        }
        
    }

    
    document.getElementById("pHiddenWord").innerHTML = underline.join(" ");


    if (correctCounter == randomizedWord.length){
        console.log("You win!");
        gamesWon++;
        document.getElementById("startGame").innerHTML = "You Win! Press any key to begin another game.";
        document.getElementById("pWins").innerHTML = "Wins: " + gamesWon;
        remainingGuesses = 10;
        document.getElementById("pRemainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;


        
    }

}
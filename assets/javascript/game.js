//Both Bootstrap and Vanilla CSS Portfolios have been updated.
//Find both links here:
//https://tlorenzo.github.io/Bootstrap-Portfolio/portfolio.html
//https://tlorenzo.github.io/Responsive-Portfolio/Basic-Portfolio/portfolio.html

// !!IMPORTANT!! Pseudocode - Still to be Done:  Find a way to have the app ignore all keystrokes that aren't letters.
//This will address the issue of how double key strokes decrement from our correctCounter.

//!!IMPORTANT!! Pseudocode - Still to be Done:  Reset the game adding a new word to the game board while
//having all of our scores updated.

//!!IMPORTANT!! Pseudocode - Still to be Done: Write code that ignores keystrokes that have already been
//pressed during a game.

//Pseudocode - Still to be Done: Add sounds that indicate that the user has won or lost a game.
//Pseudocode - Still to be Done: Add visuals of the hangman.  Ten separate images representing
//ten progressive pieces of the hangman image, to be stored in our
//assets folder and displayed through the DOM in succession each time the user makes an incorrect guess.





//This is our array storing all of our alphabet letters as strings.
var alphabetSoup = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 //These are our variables that are global in scope. 

//Will be incremented with a ++ operator and displayed through the DOM once the user guesses all letters in time. 
var gamesWon = 0;
//Will be incremented with a ++ operator and displayed through the DOM once the user fails to guess all letters in time. 
var gamesLost = 0;
//Will be decremented with a -- operator and displayed through the DOM everytime the user guesses an incorrect letter.
var remainingGuesses = 10;

//Array holding all of our Spelling Bee vocab words.  
// https://www.littlethings.com/national-spelling-bee-winning-words/
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
Pseudocode - Still to be Done: Convert all code into Object-Oriented program.  
Words will be made as keys and their definitions will be their respective values.  
The values of each word will be displayed to give the user a hint on how to spell out
each word:  As per the rules of Spelling Bee competitions.
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
}; 

Pseudocode - Still to be Done: Save all functions as methods to be called below our object declarations with event listeners.


*/

//An empty array where all of our correctly guessed letters will be pushed into once certain conditionals are met.
var correctLetter = [];
//An empty array where all of our incorrectly guessed letters will be pushed into once certain conditionals are met.
var incorrectLetter = [];
//A variable that gets incremented with a ++ operator each time the user guesses a correct letter.
//Once the number of correct guesses matches the number of characters.length of a randomized word chosen by the browser,
//We execute a function where we congratulate the user on their win and display a new game.
var correctCounter = 0;

// !!IMPORTANT!! Pseudocode - Still to be Done:  Find a way to have the app ignore all keystrokes that aren't letters.
//This will address the issue of how double key strokes decrement from our correctCounter.

//Through this line of code,
//We store a random value of the zero-based vocabulary array within this variable.
var randomizedNumber = Math.floor(Math.random() * hangmanVocab.length);
//This determines our word for the user to guess.
var randomizedWord = hangmanVocab[randomizedNumber];
console.log(randomizedWord);//Word will be logged to the console.



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
    //This loop will push however many underlines equivalent to the number of characters in each randomized word.
    //Once we have pushed enough underlines to match the number of characters there are, the loop stops.
    for (var i = 0; i < randomizedWord.length; i++) {
        underline[i] = '_';

    }
    //Here we are adding blank spaces in with this join method for however many times the above executes.
    underlineToHTML = underline.join(" ");
    //Then we are adding the result to the front end through the DOM.  
    document.getElementById("pHiddenWord").innerHTML = underlineToHTML;
}
//Pseudocode - Still to be Done:  This is a placeholder function call.  Will find a more efficient way to call this function.
underlineConvert();

//Pseudocode - Still to be Done: Create a start up screen that will be executed through a function that 
//begins the game from scratch.
//Pseudocode - Still to be Done: Organize all functions in a more efficient and more readable way.

//!!IMPORTANT!! Pseudocode - Still to be Done: Write code that ignores keystrokes that have already been
//pressed during a game.


//Once the user hits a key, execute everything in the curly braces.
document.onkeyup = function (event) {
    //Takes whatever key the user presses and stores it in the variable humanChoices
    var humanChoice = String.fromCharCode(event.which).toLowerCase();
    //The 0 and the -1 in this conditional refer to the place in the arrays.
    //This conditional says that as long as the letter that the user types matches whatever is in the alphabet array
    //AND as long as it's ALSO within the characters of the hidden word, execute the code in the curly braces.  
    //Otherwise move on.
    if (alphabetSoup.indexOf(humanChoice) >= 0 && randomizedWord.indexOf(humanChoice) > -1) {
        //If we have a match, we execute the function below that converts our underlines into letters 
        //on the main playing area of the page.
        underlineToLetter();
        //This will store all the correct letters typed, into the array declared above.
        correctLetter.push(humanChoice);
        

        //console.log("Correct Letter: " + correctLetter); // Testing

    } else {
        //This will store all the incorrect letters into our array declared above.  
        incorrectLetter.push(" " + humanChoice);
        //console.log("Incorrect Letter: " + incorrectLetter); // Testing
        //The results of which will be displayed with commas and a space below through the DOM.
        document.getElementById("pLettersMissed").innerHTML = "Letters Missed: " + incorrectLetter;
        //Here we decrement the remaining guesses.
        //Pseudocode - Still to be Done:  Create an option at the beginning of the game giving the user
        //the option to proceed with an easier or harder game.  An easier game will give them more tries.
        //A harder game will give them less tries.
        remainingGuesses--;
        //Updates the user on how many guesses they have left.
        document.getElementById("pRemainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;
    }
        //This conditional ends the current game.  Once we run out of guesses, we implement a new word in play.
        //!!IMPORTANT!! Pseudocode - Still to be Done:  Reset the game adding a new word to the game board while
        //having all of our scores updated.
    if (remainingGuesses === 0) {
        gamesLost++;
        document.getElementById("startGame").innerHTML = "You Lose.  Press any key to begin another game.";
        document.getElementById("pLosses").innerHTML = "Losses: " + gamesLost;

    }



}

//This function is responsible for converting all the underlines into the respective words that they
//are hiding.
function underlineToLetter() {
    
    var humanChoice = String.fromCharCode(event.which).toLowerCase();
    //New variable created just for further clarity.
    var letterPushed = humanChoice;
    //This loop is designed to comb through all the letters of the length of each randomized word.
    for (var i = 0; i < randomizedWord.length; i++) {

        //Once we get a match for letters that have been typed in...
        if (randomizedWord[i] == letterPushed) {
            //We are essentially telling the code to swap out the underline for the correct word.
            //The reason why we push these into the underline array is to take care of all
            //Whatever multiple instances of each letter may exist within a chosen word.
            underline[i] = letterPushed; // Pushes all the letters of equivalent value to an empty array
            //This increments the number of correct guesses.
            correctCounter++;
            //console.log("Underline dot length: " + underline.length); //Testing
            //console.log("Letter Pushed: " + letterPushed.length); //Testing
            //console.log("Correct Counter"+ correctCounter); //Testing
        }
        
    }

    //the .join method makes this visible in the front end without affecting the rest of the underlines.
    document.getElementById("pHiddenWord").innerHTML = underline.join(" ");

//This conditional is responsible for ending the game and starting a new one once the user is successful
    if (correctCounter == randomizedWord.length){
        //Pseudocode - Still to Be Done: Have a more prominent win notification displayed through the DOM
        console.log("You win!");
        //Changes the value of how many games we have won in the variable declared up top.
        gamesWon++;

        document.getElementById("startGame").innerHTML = "You Win! Press any key to begin another game.";
        //Displays wins results through the DOm.
        document.getElementById("pWins").innerHTML = "Wins: " + gamesWon;
        //Resets to the our chosen default number of guesses so they can begin a new game.
        remainingGuesses = 10;
        //Displays this result through the DOM
        document.getElementById("pRemainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;


        
    }

}
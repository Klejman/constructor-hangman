//require Letter.js HERE
const Letter = require('./Letter.js');
const BoobooButt = require('./AuthorQuotes.js');

const Game = new BoobooButt();

const Word = function(selectedForGamePlay){
  this.guessesRemaining = 10;
  this.selectedForGamePlay = selectedForGamePlay;
  // loop through letters of selected word
  this.letters = [];
  this.guessesSoFar = [];
  console.log(this.selectedForGamePlay);
  // for (let i = 0; i < this.selectedForGamePlay.length; i++) {
  //   this.letters.push(new Letter.Letter(this.selectedForGamePlay[i]));
  // }
};

const testWord = new Word(Game.roundWord);

Word.prototype.checkGuess = function(letterEntered) {
  // return true false
  // this.incorrect = true;
  // this.hasLetterBeenGuessed = false;
  letterEntered.toLowerCase();

  if (this.guessesSoFar.indexOf(letterEntered) !== -1) {
    //saved the value of 'this' in a local variable, to make it explicitly part of the lexical context for the function and for all nested function scopes.
    this.hasLetterBeenGuessed = true;
  } else {
    this.guessesSoFar.push(letterEntered);
    for(let i = 0; i < this.letters.length; i++){

      if(this.letterEntered[i].letterEntered.toLowerCase() === letterEntered){
        this.incorrect = false;
        this.letterEntered[i].show = true;
      }
    }

    if (this.incorrect) {
      this.guessesRemaining--;
    }
  }
};

Word.prototype.isComplete = function() {
  for(let i = 0; i < this.letters.length; i++){
    //return Boolean values
    if(!this.letters[i].show){
      return false;
    }
  }
  return true;
};

Word.prototype.print = function() {
  let output = "";

  for(let i = 0; i < this.letters.length; i++){
    output += this.letters[i].printInfo();
  }
  return output;
};

// testWord();
// Game.play();
module.exports = Word;

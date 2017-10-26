//require Letter.js HERE
const Letter = require('./Letter.js');


let Word = (selectedForGamePlay) => {
  this.guessesRemaining = 7;
  this.selectedForGamePlay = selectedForGamePlay;
  this.letters = [];
  this.guessesSoFar = [];

  for (let i = 0; i < this.selectedForGamePlay.length; i++) {
    this.letters.push(new Letter.Letter(this.selectedForGamePlay[i]));
  }
};

Word.prototype.checkLetter = (letter) => {
  this.incorrect = true;
  this.hasLetterBeenGuessed = false;
  let letter = letter.toLowerCase();

  if (this.guessesSoFar.indexOf(letter) !== -1) {
    this.hasLetterBeenGuessed = true;
  } else {
    this.guessesSoFar.push(letter);
    for(let i = 0; i < this.letters.length; i++){

      if(this.letters[i].letter.toLowerCase() === letter){
        this.incorrect = false;
        this.letters[i].show = true;
      }
    }

    if (this.incorrect) {
      this.guessesRemaining--;
    }
  }
};

Word.prototype.isComplete = () => {
  for(let i = 0; i < this.letters.length; i++){
    //return Boolean values
    if(!this.letters[i].show){
      return false;
    }
  }
  return true;
};

Word.prototype.print = () => {
  let output = "";

  for(let i = 0; i < this.letters.length; i++){
    output += this.letters[i].printInfo();
  }
  return output;
};

module.exports = Word;
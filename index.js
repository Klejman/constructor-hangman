const inquirer = require('inquirer');
const Letter = require('./Letter.js');
const Word = require('./Word.js');
const BoobooButt = require('./AuthorQuotes.js');
const emojis = require("emojis");
const Game = require("./AuthorQuotes.js");

console.log(emojis.unicode('Get ready to play a game of terminal :skull: hangman !'));
function guess(){
  console.log(testWord);
  inquirer.prompt([
    {
      name: 'letter',
      type: 'text',
      message: 'Enter a letter:'
    }
  ]).then(function(playerPrompt){
    console.log(playerPrompt);
    console.log(testWord);
    let letter = playerPrompt.letter;
    //testWord.checkWord --checking each letter
    testWord.playerPrompt(letter);
    if (testWord.hasLetterBeenGuessed) {
      console.log('Now try a letter you haven\'t already guessed!');
      guess();
    } else {
      if(testWord.isComplete()) {
        console.log('You guesses it this rounds word to guess was ' + testWord.selectedForGamePlay + ', YOU WON!');
        //Winner! ask if would like to play again
        playAgain();
      }else if (testWord.guessesRemaining === 0) {
        console.log('Out of guesses. Better luck next time. This rounds word was ' + testWord.selectedForGamePlay);
        //Player Lost! Ask if they want to play again
        playAgain();
      } else {
        //default game is NOT over therefore game is currently running. Give some status
      }
      console.log('You have ' + testWord.guessesRemaining + ' guessesRemaining left.');
      guess();
    }
  });


  function playAgain(){
    inquirer.prompt([
      {
        type: 'list',
        message: 'Do you want to play again?',
        name: 'playAgain',
        choices: ['yes', 'no']
      }
    ]).then(function(user){
      let answer = user.playAgain;
      if (answer === 'yes') {
        console.log(emojis.unicode('Want to play another round :stuck_out_tongue_winking_eye: ?'));
        game.playerPrompt(function(){
          let game = new Game();
          testWord = new Word(game.roundWord);
          guess();
        });
      } else {
        console.log(emojis.unicode(':wave:'));
      }
      console.log('Ok, thanks for playing!');
    })
  }
}

function playerPrompt(){
  let game = new Game();
  testWord = new Word(game.roundWord);
  guess();
};

playerPrompt();

module.exports = playerPrompt;
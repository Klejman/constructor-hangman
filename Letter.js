//constructor function HERE
function Letter(letter) {
  this.letter = letter;
  //if word has space-- account for this HERE
  if (this.letter === ' ') {
    //@return tag? so when called with new constructor would not loose 'this'
    return this.show = true;
  } else{
    this.show = false;
  }
}

Letter.prototype.printInfo = () => {
  if (this.show) {
    return this.letter + ' ';
  } else {
    return '_';
  }
};

module.exports = {Letter};

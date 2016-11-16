// object constructor creating a Scrabble object:
var Scrabble = function() {
  this.word = word || "";
};


// This is adding a method to the Scrabble object:
Scrabble.prototype.scoreWord = function(word) {
  score = 0;
  word.forEach(function(letter){
    if (letter == "A"|| "E" || "I" || "O" || "U" || "L" || "N" || "R" || "S" || "T") {
      score += 1;
    } else if (letter == "D" || "G") {
      score += 2;
    } else if (letter == "B" || "C" || "M" || "P") {
      score += 3;
    } else if (letter == "F" || "H" || "V" || "W" || "Y") {
      score += 4;
    } else if (letter == "K") {
      score += 5;
    } else if (letter == "J" || "X") {
      score += 8;
    } else
      score += 10;
  });
  return score;
};

var gameOne = new Scrabble;

gameOne.word = "JAX"
console.log(Scrabble.scoreWord(word));

// what is this for?:
module.exports = Scrabble;

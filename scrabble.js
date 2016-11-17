// object constructor creating a Scrabble object:
var Scrabble = function() {};


// This is adding a method to the Scrabble object:
Scrabble.prototype.scoreWord = function(word) {
  word = Array.from(word);

  score = 0;

  word.forEach(function(letter){
    if (letter == "A"|| letter == "E" || letter == "I" || letter == "O" || letter == "U" || letter == "L" || letter == "N" || letter == "R" || letter == "S" || letter == "T") {
      score += 1;
    } else if (letter == "D" || letter == "G") {
      score += 2;
    } else if (letter == "B" || letter == "C" || letter == "M" || letter == "P") {
      score += 3;
    } else if (letter == "F" || letter == "H" || letter == "V" || letter == "W" || letter == "Y") {
      score += 4;
    } else if (letter == "K") {
      score += 5;
    } else if (letter == "J" || letter == "X") {
      score += 8;
    } else
      score += 10;
  });
  return score;
};

var gameOne = new Scrabble;

// word = "JAX"
console.log(gameOne.scoreWord("JAX"));

// what is this for?:
module.exports = Scrabble;

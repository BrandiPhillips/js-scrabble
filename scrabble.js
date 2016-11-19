// object constructor creating a Scrabble object:
var Scrabble = function() {};

// ************** Scoring Functions ***************** //
// ************************************************** //

Scrabble.prototype.scoreWord = function (word) {

  // if (word == "" || !word.match(/^[[:alpha:]]+$/) ) {
  //   return "invalid entry"
  // }; **** tried this to make sure a word entered doesn't have specia charactors or numbers... couldn't get it to work.
  word = word.toLowerCase(); // I changed this as a debugging attempt from uppercase...
  word = Array.from(word);
  // console.log(word);
  score = 0;

  for (var i = 0; i < word.length; i++) {
    if (word[i].length === 7){
      score += 50;
    }
    if (word[i] == "a"|| word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u" || word[i] == "l" || word[i] == "n" || word[i] == "r" || word[i] == "s" || word[i] == "t") {
      score += 1;
    } else if (word[i] == "d" || word[i] == "g") {
      score += 2;
    } else if (word[i] == "b" || word[i] == "c" || word[i] == "m" || word[i] == "p") {
      score += 3;
    } else if (word[i] == "f" || word[i] == "h" || word[i] == "v" || word[i] == "w" || word[i] == "y") {
      score += 4;
    } else if (word[i] == "k") {
      score += 5;
    } else if (word[i] == "j" || word[i] == "x") {
      score += 8;
    } else if (word[i] == 'q' || word[i] == "z") {
      score += 10;
    };
  };
  return score;
};

Scrabble.prototype.highScore = function(arrayOfWords) {
  arrayOfWords = arrayOfWords;
  wordScore = [];
  highScoringWords = [];
  this.winningWord = "";
  wordLength = 7;

  //iterate over array to put the score of each word into wordScore array:
  for (var i = 0; i < arrayOfWords.length; i++) {
    wordScore.push(this.scoreWord(arrayOfWords[i]));
  };
  // console.log(wordScore);

  // find the highest score:
  highScore = Math.max.apply(Math, wordScore);
  // console.log(highScore);

  // are there more than one high score:
  for (var i = 0; i < wordScore.length; i++) {
    if (wordScore[i] === highScore) {
      highScoringWords.push(arrayOfWords[i]);
    };
  };
  // console.log(highScoringWords)

  if (highScoringWords.length === 1) {
      winningWord = highScoringWords[0];
  } else {
      for(var i=0; i < highScoringWords.length; i++){
        if (highScoringWords[i].length === wordLength) {
            winningWord = highScoringWords[i];
        } else if(highScoringWords[i].length < wordLength){
          wordLength = highScoringWords[i].length;
          winningWord = highScoringWords[i];
        };
      };
    };
    return this.winningWord
    return this.highScore
};

// **************** Player objects ****************** //
// ************************************************** //

var Player= function (name) {
  this.name = name;
  this.wordsArray = [];
  this.totalScore = 0;
  // give the player object access to the scrabble game:
  scrabbleGame = new Scrabble();
};

  // play(word): Function which adds the input word to the plays Array Returns false if player has already won
Player.prototype.playWord = function(word){
  if (this.totalScore === 100) {
    return false
  } else {
    this.wordsArray.push(word);
    this.totalScore += scrabbleGame.scoreWord(word);
  }
};



// ******************** Testing ********************* //
// ************************************************** //
// word = "JAX"
// console.log(scoreWord("one"));
var arrayOfWords = ['one', 'two', 'three', 'tank']
var newGame = new Scrabble;
console.log(newGame.highScore(arrayOfWords));

var malika = new Player('Malika');
console.log(malika.name);
malika.playWord("three");
console.log(malika.totalScore);
console.log(malika.wordsArray);


module.exports = Scrabble;

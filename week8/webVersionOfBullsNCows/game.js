appendText = function(text) { 
  $("body").append(text+"<br>");
};
var numberToGuess = getUnique(4),
    numberArray = numberToGuess.toString(),
    myNumber = 0;
    appendText("You have to guess:"+numberToGuess);

function getUnique(numLength){
  var number = getRandomInt(1,9).toString();
  for (var i = 0; i < numLength-1; i++) {
    var currentNum = getRandomInt(0,9).toString();
    if(number.indexOf(currentNum) < 0){
      number+= currentNum;
    }else{
      i--;
    }
  };
  return number;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function checkNumbers(numberArray, guessArray){
  var bullsCount = 0, cowsCount = 0;
  for (var i = 0; i < 4; i++) {
    if(numberArray[i] == guessArray[i]){
      bullsCount++;
    }else{
      if(guessArray.indexOf(numberArray[i])>0){
        cowsCount++;
      }
    }
  };
  return {bulls:bullsCount, cows:cowsCount};
}
function getMyGuess(number){
    var guessArray = "";
    if(number == numberToGuess){
      youWin();
    }else{
      guessArray = number.toString()
      result = checkNumbers(numberArray, guessArray)
      appendText("You have "+result.bulls+" and "+result.cows+" cows." );
    }
}
$("#guess").click(function(){
  var number = parseInt($("#number").val());
  getMyGuess(number);
});
function youWin(){
  appendText("You win!");
}

  

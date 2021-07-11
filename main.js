/**********
* DATA *
**********/



const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];



/********************
* HELPER FUNCTIONS *
********************/



const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
}



const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }
  
  return arr.slice().sort(byNumber);
}



/*******************
* YOUR CODE BELOW *
*******************/



const sixDie = document.querySelector('#d6-roll');

const doubleSixA = document.querySelector('#double-d6-roll-1');

const doubleSixB = document.querySelector('#double-d6-roll-2');

const twelveDie = document.querySelector('#d12-roll');

const twentyDie = document.querySelector('#d20-roll');

const resetButton = document.querySelector('#reset-button');




/*******************
* EVENT LISTENERS *
*******************/



sixDie.addEventListener('click', rollSix);

doubleSixA.addEventListener('click', rollDoubleSix);

doubleSixB.addEventListener('click', rollDoubleSix);

twelveDie.addEventListener('click', rollTwelve);

twentyDie.addEventListener('click', rollTwenty);

resetButton.addEventListener('click', reset);



/******************
* RESET FUNCTION *
******************/



function reset () {

  sixes.splice(0, sixes.length);
  doubleSixes.splice(0, doubleSixes.length);
  twelves.splice(0, twelves.length);
  twenties.splice(0, twenties.length);

}





/****************************
* CLICK HANDLING FUNCTIONS *
****************************/



function rollSix() {
  
  result = getRandomNumber(6);
  console.log('Your roll of the 6 die is,', result, '.png');

  sixes.push(result);
  console.log(sixes);

  const newImg = 'images/d6/' + result + '.png';

  sixDie.src = newImg;
  
}



function rollDoubleSix() {
  
  resultA = getRandomNumber(6);
  resultB = getRandomNumber(6);

  console.log('Your roll of the double 6 die is,', resultA, ' ', resultB);

  doubleSixes.push(resultA, resultB);
  console.log(doubleSixes);

  const newImgA = 'images/d6/' + resultA + '.png';
  const newImgB = 'images/d6/' + resultB + '.png';

  doubleSixA.src = newImgA;
  doubleSixB.src = newImgB;
  
}



function rollTwelve() {
  
  result = getRandomNumber(12);
  console.log('Your roll of the 12 die is,', result);

  twelves.push(result);
  console.log(twelves);

  const newImg = 'images/numbers/' + result + '.png';

  twelveDie.src = newImg;
  
}



function rollTwenty() {
  
  result = getRandomNumber(20);
  console.log('Your roll of the 20 die is,', result);

  twenties.push(result);
  console.log(twenties);

  const newImg = 'images/numbers/' + result + '.png';

  twentyDie.src = newImg;

}



/****************
* MATH SECTION *
****************/

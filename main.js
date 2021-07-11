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


const d6Mean = document.querySelector('#d6-rolls-mean')
// const d6Median;
// const d6Mode;


const double6Mean = document.querySelector('#double-d6-rolls-mean');



const d12Mean = document.querySelector('#d12-rolls-mean');


const d20Mean = document.querySelector('#d20-rolls-mean');





sixDie.src = 'images/start/d6.png'

doubleSixA.src = 'images/start/d6.png'

doubleSixB.src = 'images/start/d6.png'

twelveDie.src = 'images/start/d12.jpeg'

twentyDie.src = 'images/start/d20.jpg'





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
  
  
  //Splice out the contents of our arrays to reset the data.
  sixes.splice(0, sixes.length);
  
  doubleSixes.splice(0, doubleSixes.length);
  
  twelves.splice(0, twelves.length);
  
  twenties.splice(0, twenties.length);
  
  
  //Reset the images to their starter position.
  sixDie.src = 'images/start/d6.png'
  
  doubleSixA.src = 'images/start/d6.png'
  
  doubleSixB.src = 'images/start/d6.png'
  
  twelveDie.src = 'images/start/d12.jpeg'
  
  twentyDie.src = 'images/start/d20.jpg'
  
  
  //Update the mean, median and mode results.
  d6Mean.innerText = '';

}





/****************************
* CLICK HANDLING FUNCTIONS *
****************************/



function rollSix() {
  
  //This section gets the roll, console logs it, and pushes it to our array.
  
  result = getRandomNumber(6);
  console.log('Your roll of the 6 die is,', result, '.png');
  
  sixes.push(result);
  console.log(sixes);
  
  
  //Change the die image to match the roll.
  
  const newImg = 'images/d6/' + result + '.png';
  
  sixDie.src = newImg;
  
  
  //Update the mean, median and mode results.
  d6Mean.innerText = (mean(sixes)).toFixed(2);
  
  
  
}



function rollDoubleSix() {
  
  //This section gets the roll, console logs it, and pushes it to our array.
  
  resultA = getRandomNumber(6);
  resultB = getRandomNumber(6);
  
  console.log('Your roll of the double 6 die is,', resultA, ' ', resultB);
  
  doubleSixes.push(resultA, resultB);
  console.log(doubleSixes);
  
  
  //Change the die image to match the roll.
  
  const newImgA = 'images/d6/' + resultA + '.png';
  const newImgB = 'images/d6/' + resultB + '.png';
  
  doubleSixA.src = newImgA;
  doubleSixB.src = newImgB;
  
  
  //Update the mean, median and mode results.
  double6Mean.innerText = (mean(doubleSixes)).toFixed(2);
  
}



function rollTwelve() {
  
  //This section gets the roll, console logs it, and pushes it to our array.
  
  result = getRandomNumber(12);
  console.log('Your roll of the 12 die is,', result);
  
  twelves.push(result);
  console.log(twelves);
  
  
  //Change the die image to match the roll.
  
  const newImg = 'images/numbers/' + result + '.png';
  
  twelveDie.src = newImg;
  
  
  //Update the mean, median and mode results.
  d12Mean.innerText = (mean(twelves)).toFixed(2);
  
}



function rollTwenty() {
  
  //This section gets the roll, console logs it, and pushes it to our array.
  
  result = getRandomNumber(20);
  console.log('Your roll of the 20 die is,', result);
  
  twenties.push(result);
  console.log(twenties);
  
  
  //Change the die image to match the roll.
  
  const newImg = 'images/numbers/' + result + '.png';
  
  twentyDie.src = newImg;
  
  
  //Update the mean, median and mode results.
  d20Mean.innerText = (mean(twenties)).toFixed(2);
  
}



/****************
* MATH SECTION *
****************/


function mean(arr) {
  
  let total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
    )
    
    let mean = total / arr.length;
    
    return mean
    
    
    
  }
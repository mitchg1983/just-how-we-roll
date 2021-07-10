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

function rollSix() {
  
  result = getRandomNumber(6);
  console.log('Your roll of the 6 die is,', result);


  
  
}



rollSix();

/*******************
* EVENT LISTENERS *
*******************/




/******************
* RESET FUNCTION *
******************/



/****************************
* CLICK HANDLING FUNCTIONS *
****************************/



/****************
* MATH SECTION *
****************/

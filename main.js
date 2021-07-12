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

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
};

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  };

  return arr.slice().sort(byNumber);
};

/*******************
 * YOUR CODE BELOW *
 *******************/

//Declare the dies present on the index.
const sixDie = document.querySelector("#d6-roll");

const doubleSixA = document.querySelector("#double-d6-roll-1");

const doubleSixB = document.querySelector("#double-d6-roll-2");

const twelveDie = document.querySelector("#d12-roll");

const twentyDie = document.querySelector("#d20-roll");

const resetButton = document.querySelector("#reset-button");

//Declare our mean, median & mode user outputs.
const d6Mean = document.querySelector("#d6-rolls-mean");
const d6Median = document.querySelector("#d6-rolls-median");
const d6Mode = document.querySelector("#d6-rolls-mode");

const double6Mean = document.querySelector("#double-d6-rolls-mean");
const double6Median = document.querySelector("#double-d6-rolls-median");
const double6Mode = document.querySelector("#double-d6-rolls-mode");

const d12Mean = document.querySelector("#d12-rolls-mean");
const d12Median = document.querySelector("#d12-rolls-median");
const d12Mode = document.querySelector("#d12-rolls-mode");

const d20Mean = document.querySelector("#d20-rolls-mean");
const d20Median = document.querySelector("#d20-rolls-median");
const d20Mode = document.querySelector("#d20-rolls-mode");

//Declare new objects to help store data for the mode calculation
let mode6 = {};

let modeD6 = {};

let mode12 = {};

let mode20 = {};

//Set the starting page for the user. Because 'reset' is a function declaration, not an expression,
//we can use it here but declare it later.
reset();

/*******************
 * EVENT LISTENERS *
 *******************/

sixDie.addEventListener("click", rollSix);

doubleSixA.addEventListener("click", rollDoubleSix);

doubleSixB.addEventListener("click", rollDoubleSix);

twelveDie.addEventListener("click", rollTwelve);

twentyDie.addEventListener("click", rollTwenty);

resetButton.addEventListener("click", reset);

/******************
 * RESET FUNCTION *
 ******************/

function reset() {
  //Splice out the contents of our arrays to reset the data. Because these arrays were declared as CONST, we cannot just
  //declare them again ... sixes = [] will NOT work here.
  sixes.splice(0, sixes.length);

  doubleSixes.splice(0, doubleSixes.length);

  twelves.splice(0, twelves.length);

  twenties.splice(0, twenties.length);

  //Reset the images to their starter position.
  sixDie.src = "images/start/d6.png";

  doubleSixA.src = "images/start/d6.png";

  doubleSixB.src = "images/start/d6.png";

  twelveDie.src = "images/start/d12.jpeg";

  twentyDie.src = "images/start/d20.jpg";

  //Reset the mean, median & mode results.
  d6Mean.innerText = "N/A";
  d6Median.innerText = "N/A";
  d6Mode.innerText = "N/A";

  double6Mean.innerText = "N/A";
  double6Median.innerText = "N/A";
  double6Mode.innerText = "N/A";

  d12Mean.innerText = "N/A";
  d12Median.innerText = "N/A";
  d12Mode.innerText = "N/A";

  d20Mean.innerText = "N/A";
  d20Median.innerText = "N/A";
  d20Mode.innerText = "N/A";

  //Reset the objects used to calculate the mode. Because I use LET to delcare these, I do not
  //need to splice or get fancy here.
  mode6 = {};
  modeD6 = {};
  mode12 = {};
  mode20 = {};
}

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

function rollSix() {
  //This section gets the roll and pushes it to our array.
  result = getRandomNumber(6);
  sixes.push(result);

  //Change the die image to match the roll.
  const newImg = "images/d6/" + result + ".png";

  sixDie.src = newImg;

  //This line of code will update our mode object, with the data from this roll.
  mode6[result] === undefined ? (mode6[result] = 1) : mode6[result]++;

  //Update the mean, median & mode results.
  d6Mean.innerText = mean(sixes).toFixed(2);
  d6Median.innerText = median(sixes);
  d6Mode.innerText = mode(mode6);
}

function rollDoubleSix() {
  //This section gets the roll and pushes it to our array.
  resultA = getRandomNumber(6);
  resultB = getRandomNumber(6);
  doubleSixes.push(resultA, resultB);

  //Change the die image to match the roll.
  const newImgA = "images/d6/" + resultA + ".png";
  const newImgB = "images/d6/" + resultB + ".png";

  doubleSixA.src = newImgA;
  doubleSixB.src = newImgB;

  //This line of code will update our mode object, with the data from this roll.
  modeD6[resultA] === undefined ? (modeD6[resultA] = 1) : modeD6[resultA]++;
  modeD6[resultB] === undefined ? (modeD6[resultB] = 1) : modeD6[resultB]++;

  //Update the mean, median and mode results.
  double6Mean.innerText = mean(doubleSixes).toFixed(2);
  double6Median.innerText = median(doubleSixes);
  double6Mode.innerText = mode(modeD6);
}

function rollTwelve() {
  //This section gets the roll and pushes it to our array.
  result = getRandomNumber(12);
  twelves.push(result);

  //Change the die image to match the roll.
  const newImg = "images/numbers/" + result + ".png";

  twelveDie.src = newImg;

  //This line of code will update our mode object, with the data from this roll.
  mode12[result] === undefined ? (mode12[result] = 1) : mode12[result]++;

  //Update the mean, median and mode results.
  d12Mean.innerText = mean(twelves).toFixed(2);
  d12Median.innerText = median(twelves);
  d12Mode.innerText = mode(mode12);
}

function rollTwenty() {
  //This section gets the roll and pushes it to our array.
  result = getRandomNumber(20);
  twenties.push(result);

  //Change the die image to match the roll.
  const newImg = "images/numbers/" + result + ".png";

  twentyDie.src = newImg;

  //This line of code will update our mode object, with the data from this roll.
  mode20[result] === undefined ? (mode20[result] = 1) : mode20[result]++;

  //Update the mean, median and mode results.
  d20Mean.innerText = mean(twenties).toFixed(2);
  d20Median.innerText = median(twenties);
  d20Mode.innerText = mode(mode20);
}

/****************
 * MATH SECTION *
 ****************/

function mean(arr) {
  let total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  let mean = total / arr.length;

  return mean;
}

function median(arr) {
  //Startng variables.
  const sortedArr = sortByNumber(arr);
  const length = sortedArr.length;
  const midPoint = Math.floor(length / 2);

  //Cases for the first two rolls only.
  if (length === 1) {
    return sortedArr[0];
  }

  if (length === 2) {
    return ((sortedArr[0] + sortedArr[1]) / 2).toString();
  }

  //Return the median depending on the length of the array; odd or even.
  if (length % 2 !== 0 && length > 2) {
    return sortedArr[midPoint].toString();
  }

  if (length % 2 === 0 && length > 2) {
    const a = sortedArr[midPoint];
    const b = sortedArr[midPoint - 1];

    return ((a + b) / 2).toString();
  }
}

function mode(modeObj) {
  //The tempArr is the output; this is where I store the current 'highest' count we have so far.
  let tempArr = [];
  let tempValue = 0;

  //Iterate through the object's properties, one at a time.
  for (prop in modeObj) {
    //Set a variable for whatver the value of the current property is.
    let value = modeObj[prop];

    //Because mode can have multiple potential values, we need to use an array to store the data.
    if (value === tempValue) {
      tempArr.push(prop);
    }

    //If we come across a new 'high value' in our search, we clear the array and the current prop becomes
    //the new high value.
    if (value > tempValue) {
      tempValue = value;
      tempArr = [];
      tempArr.push(prop);
    }

    if (value < tempValue) {
      continue;
    }
  }

  return tempArr;
}

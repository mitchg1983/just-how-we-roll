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

//Declare the dies present on the page
const sixDie = document.querySelector("#d6-roll");

const doubleSixA = document.querySelector("#double-d6-roll-1");

const doubleSixB = document.querySelector("#double-d6-roll-2");

const twelveDie = document.querySelector("#d12-roll");

const twentyDie = document.querySelector("#d20-roll");

const resetButton = document.querySelector("#reset-button");

//Declare our mean, median & mode user outputs
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
const mode6 = {};

const modeD6 = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

const mode12 = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};

const mode20 = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
};

//Set the starting page for the user. Because 'reset' is a function declaration, not an expression,
//we can use it here, and declare it later.
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
  //Splice out the contents of our arrays to reset the data.
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

  //Update the mean, median and mode results.
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
}

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

function rollSix() {
  //This section gets the roll, console logs it, and pushes it to our array.

  result = getRandomNumber(6);

  sixes.push(result);

  //Change the die image to match the roll.

  const newImg = "images/d6/" + result + ".png";

  sixDie.src = newImg;

  //Update the mean, median & mode results.
  d6Mean.innerText = mean(sixes).toFixed(2);
  d6Median.innerText = median(sixes);

  mode6[result] === undefined ? (mode6[result] = 1) : mode6[result]++;

  //Update the mode result.
  d6Mode.innerText = mode(mode6);
}

function rollDoubleSix() {
  //This section gets the roll, console logs it, and pushes it to our array.

  resultA = getRandomNumber(6);
  resultB = getRandomNumber(6);

  console.log("Your roll of the double 6 die is,", resultA, " ", resultB);

  doubleSixes.push(resultA, resultB);
  console.log(doubleSixes);

  //Change the die image to match the roll.

  const newImgA = "images/d6/" + resultA + ".png";
  const newImgB = "images/d6/" + resultB + ".png";

  doubleSixA.src = newImgA;
  doubleSixB.src = newImgB;

  //Update the mean, median and mode results.
  double6Mean.innerText = mean(doubleSixes).toFixed(2);
  double6Median.innerText = median(doubleSixes);
}

function rollTwelve() {
  //This section gets the roll, console logs it, and pushes it to our array.

  result = getRandomNumber(12);
  console.log("Your roll of the 12 die is,", result);

  twelves.push(result);
  console.log(twelves);

  //Change the die image to match the roll.

  const newImg = "images/numbers/" + result + ".png";

  twelveDie.src = newImg;

  //Update the mean, median and mode results.
  d12Mean.innerText = mean(twelves).toFixed(2);
  d12Median.innerText = median(twelves);
}

function rollTwenty() {
  //This section gets the roll, console logs it, and pushes it to our array.

  result = getRandomNumber(20);
  console.log("Your roll of the 20 die is,", result);

  twenties.push(result);
  console.log(twenties);

  //Change the die image to match the roll.

  const newImg = "images/numbers/" + result + ".png";

  twentyDie.src = newImg;

  //Update the mean, median and mode results.
  d20Mean.innerText = mean(twenties).toFixed(2);
  d20Median.innerText = median(twenties);
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
  let tempArr = [];
  let tempValue = 3;

  for (prop in modeObj) {
    // console.log(tempArr);
    let value = modeObj[prop];
    let tempProp = prop;


    if (value > tempValue) {
      console.log(value, 'is greater than', tempValue);
    }

    if (value < tempValue) {
      console.log(value, 'is less than', tempValue);
    }

    if (value === tempValue) {
      console.log(value, 'is EQUAL to', tempValue);
    }


}


}
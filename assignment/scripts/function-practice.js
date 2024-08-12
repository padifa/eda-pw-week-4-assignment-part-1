console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  //the parameter is what the function will use
  //in this case, we have a parameter called 'name'
  //return the hello message and use the parameter
  // return 'Hello, ' + name + '!';
  return `My name is, ${name}`;

}
// Remember to call the function to test
console.log('Test - should say "Hello, Papa!"', helloName('Papa'));




// 3. Function to add two numbers together & return the resultfunction addNumbers(firstNumber, secondNumber) {
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;

}
console.log('The sum of 3 + 4 = 7:', addNumbers(3, 4));

function subtractNumbers(num1, num2) {
  return num1 - num2;
}
console.log('The result of 10 - 7 = 3 :', subtractNumbers(10, 7));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2) {
  let answer = num0 * num1 * num2;
  return answer;

}
console.log('The result of 7 * 3 * 2 = 42 ', multiplyThree(7, 3, 2));

function addFour(num0, num1, num2, num3) {
  return num0 + num1 + num2 + num3;
}
console.log('The sum of 39 + 45 + 28 + 9 :', addFour(39, 45, 28, 9));
console.log('The sum of 57 + 1 + 62 + 100 :', addFour(57, 1, 62, 100));
console.log('The sum of 12 + 32 + 2 + 63 :', addFour(12, 32, 2, 63));
console.log('The sum of 68 + 32 + 2 + 9 :', addFour(68, 24, 75, 9));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
console.log('Is the number positive?', isPositive(1));
console.log('Is the number positive?', isPositive(0));
console.log('Is the number positive?', isPositive(0 / 5));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = ['books', 'laptop', 'pen', 'notebook'];
function getLast(array) {
  return array[array.length - 1];
}
console.log('The last item in the array is:', getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(array, value) {
  for (let i = 0; i < array.length; i++) {
    console.log('array value at i', array[i]);
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
let myNumbers = [1, 3, 100, 4, 56, 89];
console.log(' The value is:', find(myNumbers, 100));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let i = 0; i < string.length; i++) {
    if (letter[i] === string) {
      return true;
    }
    else {
      return false;
    }
  }
}

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {

  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}

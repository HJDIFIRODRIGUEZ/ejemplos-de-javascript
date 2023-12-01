//Write a JavaScript program to find the largest of three given integers.
function findLargest(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(findLargest(10, 145, 30)); // Output: 30
console.log(findLargest(5, 2, 8)); // Output: 8


function nummax(num1, num2) {
  return Math.Max(num1, num2)
}
console.log(nummax(6, 47));


//Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string . If "Script" appears in the string, return the string without "Script"; otherwise , return the original one.
function checkStringPosition(str) {
  if (str.substring(4, 10) === "Script") {
    return str.replace("Script", "");
  } else {
    return str;
  }
}

console.log(checkStringPosition("JavaScript")); // Output: Java
console.log(checkStringPosition("HelloScriptWorld")); // Output: HelloWorld


//Write a JavaScript program to find the closest value to 100 from two numerical values.
function findClosestTo100(num1, num2) {
  if (Math.abs(100 - num1) < Math.abs(100 - num2)) {
    return num1;
  } else {
    return num2;
  }
}

console.log(findClosestTo100(90, 95)); // Output: 95
console.log(findClosestTo100(89, 121)); // Output: 89



//Write a JavaScript function that takes a string as input and returns the reverse of that string.
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("Hello")); // Output: olleH
console.log(reverseString("JavaScript")); // Output: tpircSavaJ

//Write a JavaScript function that takes a string as input and returns the number of vowels (a, e, i, o, u) in that string.

function countVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello")); // Output: 2
console.log(countVowels("JavaScript")); // Output: 3


//Write a JavaScript function that takes a string as input and returns true if it is a palindrome (reads the same forwards and backwards), and false otherwise.
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//Write a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers in the array.
function sumArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

console.log(sumArray([1, 2, 5, 4, 5])); // Output: 15
console.log(sumArray([-1, 0, 1])); // Output: 0



//Write a JavaScript function that takes an array of numbers as input and returns the maximum number in the array.

function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMaxNumber([1, 5, 3, 9, 2])); // Output: 9
console.log(findMaxNumber([-1, -5, -3, -9, -2])); // Output: -1


function saludar(nombre) {

  if (nombre === 'Ana' || nombre === 'Camila') {
    return `este nombre no es permitido ${nombre}`;
  
  } else {
    return`Hola ${nombre}`

  }

}
console.log(saludar('Ana'))




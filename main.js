'use strict';


const names = ['pino', 'paolo', 'piero', 'luca', 'gianni'];

function likes(names){
    if(names.length === 0){
        console.log('nobody likes it!');
    }else if(names.length === 1){
        console.log(`${names[0]} likes this`);
    }else if(names.length > 1 && names.length < 4){
        let str = '';
        for(let i = 0; i < names.length; i++){
            if(names.length === 3 && i === 0){
                str += `${names[i]}, `;
            }else if(i === names.length - 1){
                str += ` and ${names[i]} like this`;
            }else {
                str += names[i];
            }
        }
        console.log(str);
    }else {
        let str = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
        console.log(str);
    }
}

// likes(names);


// ----------------------------------------------

// PANGRAM EXERCISE

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" 
// is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(str){
    const numberOfLetters = 26;
    const singularChars = [];
    const charArray = str.split('');
    for(let char of charArray){
        if(singularChars.includes(char) ||
        isFinite(char) ||
        char === ',' ||
        char === '.' ||
        char === ':' ||
        char === ';' ||
        char === '?' ||
        char === '!' ||
        char === '-' ||
        char === '_' ||
        char === ' ' ||
        char === '/'){
            continue;
        }else {
            singularChars.push(char.toLocaleLowerCase());
        }
    }
    if(singularChars.length === numberOfLetters){
        return true;
    }else{
        return false;
    }
}

// let str = 'The quick brown fox jumps over the lazy dog';

// let checkstr = isPangram(str);

// console.log(checkstr);

// ----------------------------------------------

// DESCRIPTION:
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.


function findNextSquare(number){
    if(!Number.isInteger(Math.sqrt(number))){
        return -1;
    }else{
        do{
            number++;
        }while((!Number.isInteger(Math.sqrt(number))))
        return number;
    }
}

// let num = 25;

// let next = findNextSquare(num);
// console.log(next);


// ----------------------------------------------


// DESCRIPTION:
// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

const startingPopulation = 1000;
const increasePerYear = 0.02;
const newInhabitantsPerYear = 50;
const endingPopulation = 1200;


function howManyYears(startingPopulation, increasePerYear, newInhabitantsPerYear, endingPopulation){
    let currentPopulation = startingPopulation;
    let yearsRequired = 0;
    while(currentPopulation < endingPopulation){
        currentPopulation = currentPopulation + ((currentPopulation * increasePerYear) + newInhabitantsPerYear);
        yearsRequired = yearsRequired + 1;
    }
    return yearsRequired;
}

// let years = howManyYears(startingPopulation, increasePerYear, newInhabitantsPerYear, endingPopulation);

// console.log(years);



// ----------------------------------------------

// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
//  continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


function digitalRoot(n){
    let stringNum = n.toString();
    let stringNumArray = [];
    let sum = 0;
    if(stringNum.length > 1){
        let arrEle = stringNum.split('');
        stringNumArray = [...arrEle];
    }
    for(let num of stringNumArray){
        sum += Number(num);
    }
    if(sum.toString().length > 1){
        sum = digitalRoot(sum);
    }
    return sum;
}

// let number = 1246;
// let root = digitalRoot(number);
// console.log(root);



// ----------------------------------------------

// DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
//  The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.



function duplicateCount(text){
    const textArray = text.toLowerCase().split('');
    const comparisonArray = [];
    const duplicateArray = [];
    let duplicate = 0;
    for(let char of textArray){
        if(comparisonArray.includes(char)){
            if(!duplicateArray.includes(char)){
                duplicate = duplicate + 1;
                duplicateArray.push(char);
            }
        }else {
            comparisonArray.push(char);
        }
    }
    return duplicate;
}

// let stroo = "aabBcde";
// let result = duplicateCount(stroo);
// console.log(result);



// ----------------------------------------------



// DESCRIPTION:

// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2){
    const arrayS1 = s1.split('');
    const arrayS2 = s2.split('');
    const finalArray = [];
    arrayS1.forEach((char)=>{
        if(!finalArray.includes(char)){
            finalArray.push(char);
        }
    });
    arrayS2.forEach((char)=>{
        if(!finalArray.includes(char)){
            finalArray.push(char);
        }
    });
    finalArray.sort();
    let longest = finalArray.join();
    return longest;
}

// let a = "abcdefghijklmnopqrstuvwxyz";
// let b = "xxxxyyyyabklmopq";

// console.log(longest(a, a));



// ----------------------------------------------



// DESCRIPTION:

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(str){
    const arrayString = str.toLowerCase().split('');
    const finalArray = [];
    for(let i = 0; i < arrayString.length; i++){
        if(i === 0){
            let letter = `${arrayString[i].toUpperCase()}-`;
            finalArray.push(letter);
        }else if(i === arrayString.length - 1){
            let letter = '';
            for(let j = 0; j <= i; j++){
                if(j === 0){
                    letter = arrayString[i].toUpperCase();
                }else{
                    letter += arrayString[i];
                }
            }  
            finalArray.push(letter);
        }else {
            let letter = '';
            for(let j = 0; j <= i; j++){
                if(j === 0){
                    letter = arrayString[i].toUpperCase();
                }else{
                    letter += arrayString[i];
                }
            }  
            letter = `${letter}-`;
            finalArray.push(letter);
        }
    }
    let finalWord = finalArray.join('');
    return finalWord;
}


function accum2(s){
    const wordArray = s.toLowerCase().split('');
    const finalArray = [];
    for(let i = 0; i < wordArray.length; i++){
        let word = '';
        for(let j = 0; j <= i; j++){
            if(j === 0){
                word = wordArray[i].toUpperCase();
            }else{
                word += wordArray[i];
            }
        }
        finalArray.push(word);
    }
    let finalWord = finalArray.join('-');
    return finalWord;
}


// let str = "RqaEzty";

// console.log(accum2(str));


// ----------------------------------------------


// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr){
    const noZerosArr = [];
    const zerosArr = [];
    for(let element of arr){
        if(element === 0){
            zerosArr.push(element);
        }else {
            noZerosArr.push(element);
        }
    }
    const mergedArr = [...noZerosArr, ...zerosArr];
    return mergedArr;
}

// const test = [false,1,0,1,2,0,1,3,"a"];

// console.log(moveZeros(test));


// ----------------------------------------------

// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


function createPhoneNumber(arr){
    if(arr.length > 10){
        return;
    }else {
        for(let num of arr){
            if(num > 9){
                return;
            }
        }
    }
    let stringDigit = '';
    for(let i = 0; i < arr.length; i++){
        stringDigit += arr[i].toString();
        if(i === 2){
            stringDigit = `(${stringDigit}) `;
        }else if(i === 5){
            stringDigit = `${stringDigit}-`;
        }
    }
    return stringDigit;
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// console.log(createPhoneNumber(numbers));


// ----------------------------------------------


// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(str){
    const arrayOfWords = str.split(' ');
    const finalArray = [];
    for(let i = 0; i < arrayOfWords.length; i++){
        if(arrayOfWords[i].length >= 5){
            let newWordArr = arrayOfWords[i].split('');
            let finalNewArr = [];
            for(let j = newWordArr.length; j >= 0; j--){
                finalNewArr.push(newWordArr[j]);
            }
            let finalStr = finalNewArr.join('');
            finalArray.push(finalStr);
        }else{
            finalArray.push(arrayOfWords[i]);
        }
    }
    let finaltwist = finalArray.join(' ');
    return finaltwist;
}

// let str = 'Hey fellow warriors';
// let test1 = "Just kidding there is still one more";
// let test2 = "This is another test";
// let test3 = "Welcome";

// console.log(spinWords(test3));


// ----------------------------------------------


// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value 
// next to each other and preserving the original order of elements.


function uniqueInOrder(list){
    const finalArray = [];
    if(typeof list === 'string'){
        const listArray = list.split('');
        for(let i = 0; i < listArray.length; i++){
            if(listArray[i] !== listArray[i -1]){
                finalArray.push(listArray[i]);
            }
        }
    }else if(Array.isArray(list)){
        for(let i = 0; i < list.length; i++){
            if(list[i] !== list[i -1]){
                finalArray.push(list[i]);
            }
        }
    }
    return finalArray;
}

// let arr = [1,2,2,3,3];

// console.log(uniqueInOrder(arr));




// ----------------------------------------------



// DESCRIPTION:
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

function inArray(array1, array2){
    const finalArray = [];
    for(let i = 0; i < array1.length; i++){
        let substring = array1[i];
        for(let j = 0; j < array2.length; j++){
            let string = array2[j];
            if(string.includes(substring) && !finalArray.includes(substring)){
                finalArray.push(substring);
            }
        }
    }
    return finalArray.sort();
}

// const a1 = ["arp", "live", "strong"];
// const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// console.log(inArray(a1, a2));


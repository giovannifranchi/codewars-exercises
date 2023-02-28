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

let str = 'The quick brown fox jumps over the lazy dog';

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

let num = 25;

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










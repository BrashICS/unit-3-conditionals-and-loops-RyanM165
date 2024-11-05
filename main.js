/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function user() {
    let age = parseInt(prompt("Please enter your age:"));

    if (age >= 60) {
        console.log("You qualify for the senior discount!");
        return
    }
    if (age < 16) {
        console.log("You're not old enough to drive yet.");
    }
    if (age === 44) {
        console.log("So is Mr. Squirrel!");
    }

    let user_name = prompt("Please enter your name:");

    if (user_name === "Mr. Squirrel") {
        console.log("🐿️");
    }
    if (user_name.length > 7) {
        console.log("You have a long name.");
    }

    let name_length_guess = parseInt(prompt("How long do you think your name is (in characters)?"));

    if (name_length_guess === user_name.length) {
        console.log("That's correct! ✔️");
    } else if (name_length_guess > user_name.length) {
        console.log("Too high ✖️");
    } else {
        console.log("Too low ✖️");
    }
}

function startGame() {
    let playerName = prompt("What is your name?");
    alert(`🎃Welcome, ${playerName}, to Haunted St. Matthew HS!🎃`);
    
    let pathChoice = prompt("Do you want to go into the (1) library or (2) basement?");
    if (pathChoice === '1') {
        library();
    } else if (pathChoice === '2') {
        basement();
    } else {
        alert("Invalid choice. Please refresh and try again.");
    }
}
function library() {
    const libraryChoice = prompt("You see a creepy old book on a dusty bench. Do you (1) open it or (2) leave it alone?");
    if (libraryChoice === '1') {
        alert("A ghoul emerges from the book and scares you to death!");
    } else if (libraryChoice === '2') {
        alert("You quietly leave the library and find the exit. You survive!");
    } else {
        alert("Invalid choice. Please refresh and try again.");
    }
    alert("The End. Thanks for playing!");
}

function basement() {
    const basementChoice = prompt("You hear strange noises. Do you (1) investigate or (2) run away?");
    if (basementChoice === '1') {
        alert("You discover a car trunk filled with candy!");
    } else if (basementChoice === '2') {
        alert("👿You trip and fall... The ghost catches you!👿");
    } else {
        alert("Invalid choice. Please refresh and try again.");
    }
    alert("The End. Thanks for playing!");
}

function menu() {
let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`
// Prompt with the menu
let selection = Number(prompt(message));}
if (selection == 1) {
    alert("Let's Play!")
    let difficulty = +prompt
}

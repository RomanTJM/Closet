// Задание 5.3 N1
let value = +prompt("please, enter a value");

if (typeof value === "number" && !isNaN(value)) {
    let nums = value % 2 === 0 ? console.log(value + " is odd number") : console.log(value + " is even number");

} else {
    console.log("Whoops, you are definately wrong");
}

// Задание 5.3 N2
let x = 2;

switch (typeof x) {
    case "number":
        console.log(x + " is a number");
        break;
    case "string":
        console.log(x + " is a string");
        break;
    case "boolean":
        console.log(x + " is a boolean");
        break;
    default:
        console.log("type of value is undefined");
}

let x = "string";

switch (typeof x) {
    case "number":
        console.log(x + " is a number");
        break;
    case "string":
        console.log(x + " is a string");
        break;
    case "boolean":
        console.log(x + " is a boolean");
        break;
    default:
        console.log("type of value is undefined");
}

let x = true;

switch (typeof x) {
    case "number":
        console.log(x + " is a number");
        break;
    case "string":
        console.log(x + " is a string");
        break;
    case "boolean":
        console.log(x + " is a boolean");
        break;
    default:
        console.log("type of value is undefined");
}

//Задание 5.4 N3

function reversedString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("")

    return joinArray;
}

console.log(reversedString("Hello"));

// OR

let str = "Hello"

let reversedString = str.split("").reverse().join("");

console.log(reversedString)

// OR

let string = "hello!".split("").reverse().join("");

console.log(string)

//Задание 5.4 N4

let randomNumber = Math.random() * 100;
randomNumber = Math.round(randomNumber)

console.log(randomNumber)

//Задание 5.5 N5

let arr = [132, true, "string"];
console.log(arr.length)

arr.map(function(item, index, arr) {
    console.log(item);
})

//Задание 5.6 N7

let arr = [1, 23, 0, false, 2, 54, 13, ''];

let sumOfEvenNums = 0;
let sumOfOddNums = 0;
let nullItem = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number' && arr[i] != 0 && !isNaN(arr[i])) {
        let nums = arr[i] % 2 === 0 ? sumOfEvenNums++ : sumOfOddNums++;
    } else if (arr[i] === 0) {
        nullItem++;
    }
}

console.log('sum of even numbers is ' + sumOfEvenNums);
console.log('sum of odd numbers is ' + sumOfOddNums);
console.log('there is a null in the array: ' + nullItem);

//Задание 5.6 N6

let arr = [1, 23, 0, 2, 54, 13, ""];

let types;

for (let i = 0; i < arr.length - 1; i++) {
    types = typeof arr[0] === typeof arr[i + 1] ? true : false;
}

console.log(types)

//Задание 5.7 N8

let composers = new Map([
    ['bach', 'baroque era'],
    ['chopin', 'romantic era'],
    ['beethoven', 'classic era'],
    ['lachenmann', 'contemporary era']
])

for (let [name, era] of composers) {
    console.log(`Key is ${name}, value is ${era}`)
}
// multi import
import { apikey1,apikey2,apikey3 as keys} from "./util.js";

// for default no {}
import apiKeyDefault from "./util.js";

console.log("Api key :: " ,apikey1,apikey2,keys);
console.log("Api key :: " ,apiKeyDefault);

// assigned alias to apiKey3
console.log("Keys :: " , keys);

// let -reassign const -nope

// fnc

function hello()
{
    return "hello : Hello";
}

const sayHello = hello();
console.log("sayHello :: ",sayHello);

function user(uName)
{
    console.log("user : ",uName);
}

user("bot");

// arrow fnc

const arrow = () => { console.log("arrow :: fnc")}
arrow();

const cube = n => n**3;
console.log(cube(3));

const cubeObj = n => ({cube : n**3});
console.log(cubeObj(2));

// objects 

const currUser = {
    name : "Bob" ,
    code : 4523,
    hello()
    {
        console.log(this.name);
    }
}

console.log(currUser.name , " :: " , currUser.code);

// classes

class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(userName)
    {
        console.log("User :: Hi ",userName);
    }
}

const user1 = new User("Rob",34);
console.log(user1);
user1.greet(user1.name);

// arrays

const hobbies = ["sports","cooking","reading"];

const index = hobbies.findIndex((item)=> item === "cooking");
console.log(index);

// maps
const editHobbies = hobbies.map((item) => ({ hobby : item}));
console.log(editHobbies);

// destructing

// const userNameData = ["Bobby" , "Millie"];

// destrucuting 1
// const fName = userNameData[0];
// const lName = userNameData[1];

// destrucuting 2
const [fName,lName] = ["Bobby" , "Millie"];
console.log(fName," :: ",lName)

// use same key names or create alias
const {name : Name, age :Age} = {
    name:"Millie",
    age:245
};

console.log(Name," :: ",Age)

// spread operator

const newHobbies = ["reading"];

const mergeHobbies = [...newHobbies,...hobbies];
console.log(mergeHobbies);

const person1 = {
    name:"Millie",
    age:245
};

const person1Extented = {
    address:"gg",
    ...person1
};
console.log(person1Extented);

// print index
for(const hobby in mergeHobbies)
    {
        console.log("My hobby is : " ,hobby);
    }

// print values in array
for(const hobby of mergeHobbies)
    {
        console.log("My hobby is : " ,hobby);
    }

function handleTimeout()
{
    console.log("Timed out!!");
}

// passes the function reference to timeout
setTimeout(handleTimeout,1000);
setTimeout(handleTimeout,2000);
setTimeout(handleTimeout,3000);

// passes return value to timeout
// setTimeout(handleTimeout());


// pass fnc as argument for fnc
function greeter (greetFn)
{
    greetFn();
}

greeter(()=>console.log("Hi"));


// exec func inside fnc scope
function init()
{
    function greet(){
        console.log("Inside init greet");
    }
    greet();
}

init();

// primitive vs reference values

// Primitive Values vs Reference Values
// Primitive Values:

// Primitive values include string, number, boolean, null, undefined, symbol, and bigint.
// They are immutable, meaning their value cannot be changed once created.
// Variables that hold primitive values store the actual value directly.
// Reference Values:

// Reference values include objects, arrays, and functions.
// They are mutable, meaning their contents can be changed.
// Variables that hold reference values store a reference (or pointer) to the actual value in memory, not the value itself.

// const userMsg = "My Message";
// userMsg = "ss";
// console.log(userMsg);

const testArr = ["1","2"];
testArr.push("3");
console.log(testArr);

// array functions

// map , find , findIndex , filter , reduce , concat , slice , splice 


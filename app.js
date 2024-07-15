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
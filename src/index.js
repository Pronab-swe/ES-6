//const { SourceMapDevToolPlugin } = require("webpack");

const name='Pronab Biswas'
const age=24
const email='pronab.swe@gmail.com'

//Multi String
//const details = 'Name: '+name+' Age: '+age+' Email: '+email;

//Template String
const details=`Name: ${name}, Age: ${age}, Email: ${email}.`

console.log(details);
console.log("Hahhahahahaha");
alert('Life is Beautiful without Female Person')

//**Arrow Function

//Normal Function
function print(){
    console.log("ColorBangla");
}
print()

//Arrow Function print shortcut
const print1=() =>{
    console.log("Color with arrow Function");
}
print1()

//Arrow Function single parameter
const name1=n =>{
    return n;
}
console.log(name1("Bangla")); 

//Arrow Function double parameter
const sum=(a,b)=>{
    return a+b;
}
console.log('Sum is '+sum(12,34));

//Arrow Function double parameter in single line
const sum1=(a,b)=> a+b;
console.log('Sum is '+sum1(12,34));

//Arrow Function double parameter in single line(Square)
const sqrt=a => a*a 
console.log('Square is '+sqrt(12));


//*Lexical This in ES6

const objt = {
    names:'ColorBangla',
    love: function(){
        setTimeout(() => {
            console.log(this.names);
        },1000);
    }
}
objt.love()

//*Lexical This in ES6

const obj = {
    names:'ColorBangla IT',
    love1: function(){
            console.log(this.names);
    }
}
obj.love1()



//*Enhance Object, here able to use object very dynamacily

let namenew='Biswas'
let emailnew='biswas@gmail.com'

const objec1={
    namenew,
    emailnew,
    prin(){
        console.log("Name:"+this.namenew + " Email:"+this.emailnew);
    }
}
objec1.prin()
console.dir(objec1);


//* Destructing Array and Object, Here able use all properties by assigning into a variable

//Array destructing
const object=[43,65,232]

let [p, ,s]=object;

console.log(`P ${p}; S ${s}`);

//Object destructing
const object1={
    name10:'Pronab',
    emailn:'pronab@gmail.com'
}

let {name10,emailn}=object1;
console.log(name10,emailn);

function bis({name10,emailn}){ //Here Pass object in parameter for get actual value of variable
    console.log(`Name:${name10} Email:${emailn}`);
}
bis({emailn,name10}); // Here pass, firstly email but output get firstly name because of object match order by '{}' 


//*Default Parameter

let c1=(a=1,b=a)=>a+b; // Here we give default value of two parameter.

console.log(c1()); // For default parameter, we are able to print  without NaN(Not a Number)


//Rest Operator

function pr(...name){
    return name.reduce((a,b)=>a+b);
}

let xr=pr(12,432,56,645,654,6,5)
console.log(xr);

//Spread Operator
var obj10 ={
    name:'ColorBangla',
    email:'colorbangla@gmail.com'
}

var obj2={
    ...obj10,
    name:'Biswas'
}

console.log("Object Two Name:"+ obj2.name)

//Module System export and import , able to access const function from another js file

import * as math from './math';   //By * we got all function and everything from another js file.

console.log(math.add);

import {sub,div} from './math';      //By { } curly we are able to destructing and some specific access from another js file.  

console.log(sub(54,19)+' '+div(11,3)); 


//Class uses and import from another js file.

import Person from './person';

var p10=new Person('Tonmoy',' tonmoy@gmail.com');

p10.print();

//Class Inheritence by extends and access an another js file and run to another file. 

import Student from  './student';

var n1=new Student('Color','bangla@gmail.com',128)

n1.print();


//*Promise for clean code

//Example of asyncronus
console.log('ColorBangla');

setTimeout(()=>{
    console.log("i am waiting");
},3000)

console.log('I am Powerful');

//Promise start example
let myPromise=new Promise((resolve,reject)=>{
    let name='Daffodil'
    resolve(name)
})
console.log(myPromise);

//Promise start example with .then()and .catch()
let myPromise1=new Promise((resolve,reject)=>{
    let name1='Daffodil'
    //resolve(name1)
    setTimeout(()=>resolve(name1),5000)
})

myPromise1
    .then((name1)=>{
        console.log('We are '+name1);
    })


//* fetch(link-api) use it and get data fron server 

fetch('https://jsonplaceholder.typicode.com/users')

    .then((response)=> response.json())
    .then((body)=>{
        const lis=body.map(data =>{
            let li=document.createElement('li')
            let text=`ID: ${data.id} Name: ${data.name} Email: ${data.email}`
            let textNode=document.createTextNode(text)

            li.appendChild(textNode)

            return li;
        })
        
        lis.forEach((li) => {
            document.getElementById('mylist').appendChild(li);            
        });
    })

    .catch((err)=>console.log(err))

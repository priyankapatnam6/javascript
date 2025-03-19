console.log("I'm Priyanka");
// reverse a string



const stringReverse =(str)=>{
    return  str.split('').reverse().join('');}
console.log("stringReverse",stringReverse('priyanka patnam'));



const reverseNumber= (num)=>{
    return parseInt(num.toString().split('').reverse().join(''),10);}
console.log("reverseNumber",reverseNumber(12345678));



const name = 'madam';
console.log(name===stringReverse(name));


console.log("---------------------------------------------------let/var/const & hoisting---------------------------------------------"); 
// let var const 
function exampleVar() {
    console.log(x); 
    var x = 10;
    // let x = 10;
    // const x = 10;
    console.log(x);  
}
exampleVar();
var a = 1;
let b = 2;
const c = 3;
if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
}
console.log(a);  
console.log(b);  
console.log(c); 

var x = 10;
x = 30;
console.log(x); 
 const letvarconst = [
    {name:'var',scope:'variable/global',hoisting:'hoisted but var is initialized with undefined',Reassignment:'var can reassigned'},
    {name:'let',scope:'blocked',hoisting:'hoisted but let raise a ReferenceError if accessed before their declaration',Reassignment:'let can reassigned'},
    {name:'const',scope:'blocked',hoisting:'hoisted but const raise a ReferenceError if accessed before their declaration',Reassignment:'const cannot reassigned'},
];
console.table(letvarconst);
console.table([{name:'declaration',value:'var = x'},{name:'initialization',value:'x=20'},{name:'declaration& initialization',value:'var x= 30'}])
console.table([{name:'hoisting',definition:'the variable/function declarations are hoisted to the top of their scopes during the compilation phase before the code is executed.'}])





console.log("---------------------------------------------------sample examples---------------------------------------------"); 
console.log("1"+1);
console.log(1+1);
console.log(true+1);
console.log('true'+1);
console.log(false+6);
console.log('false'+6);
console.log("------------------------------------------------------------------------------------------------"); 


let an = [[1,2],[2,4],[5,7],[6,9],[3,1]];
const flattened = an.flat();
const set = [...new Set(flattened)]
const sort = set.sort((x,y)=>y-x);
console.log("sort",sort);
// console.log(...new Set(flattened));
console.log(Math.max(...sort));
console.log(Math.min(...sort));
const string = 'priyanka';
console.log(string.split('a').length-1);
console.log(true || false);
console.log(true && false);

const namee = {person:'priyanka'};
console.log(namee.person);
namee.person="patnam";
console.log(namee.person);



console.log(parseInt(12.2876));
console.log(parseFloat(12.987));


console.log("---------------------------------------------------loops---------------------------------------------"); 
// loops:-- iterates the loop syntax is for(i = 0; i<condition; i++/i--)
// for loop  :- wishing a friend at once dynamically with their names 
let friends=['sai','priya','swathi','simran','sneha','janu','anu'];
for(let i=0;i<friends.length;i++){
    console.log("Good Morning " + friends[i] + "...!" );
}

// while loop:- checking the sheep before asleep / it check the condition and it will execute else it will exit the condition
let sheep =1;
while(sheep<5){
    console.log("count of sheep " + sheep);
    sheep++
}

// do while:-irrespective of condition it will execute at once  (or) checking the chocolates in the deep bowl where we cannot see.
let chocolates;
do{
    console.log("checking the chocolates");
    chocolates++
}
while(chocolates>0);

//for of : iterable over arrays
// you have basket of fruits & want to list each one.
let  arrays = ['apples','banana','cherry','guava'];
for(let fruit of arrays){
    console.log('I like '+ fruit);
}

// for in: iterates over the properties of objects
//  key & value pair
let object={title:'priyanka novel',author:'priyanka',writtendate:'1999'}
for(let i in object){
    console.log(i + ':' + object[i]);
}


//break & continue :--
// break:-stops the execution/till the condition
// continue:-skips the execution/condition
for(let i=0; i<=8 ;i++){
    if(i===3){
        continue;
        // break;
    }
    console.log(i);
}



console.log("---------------------------------------------------functions---------------------------------------------"); 
// function :- we have named function ,ananymous function,arrow function- reuse the code
function sub(num1,num2){
    return num1-num2;
}
console.log("sub",sub(5,8));
 

const greet = function(name){
    return name;
}
console.log(`I like ` + greet('Priyanka'));
 
 
const add=(a,b)=>{return a+b}
console.log(add(2,3)*sub(7,5));
 
// synchronous & asynchronous methods
console.table([{name:'synchronous', def:'execeutes one after another i.e., line by line eg:- booking a ticket in a que'},{name:'asynchronous',def:"run all the tasks parallelly eg:- booking a ticket in book my show and in parallelly checking for another tickets which are less in price etc"}]);
// setTimeout setTimeout(()=>{},2000):- delay in execution
// setTime Interval setTimeInterval(()=>{},2030):executes for every time interval like an alaram
console.log("---------------------------------------------------synchronous---------------------------------------------"); 
console.log('Priyanka');
console.log('Priyanka');
console.log('Priyanka');
cook();
console.log('Priyanka');
console.log('Priyanka');

function cook(){
    console.log("Preparing a ingredients for another cooking");
}
console.log("---------------------------------------------------asynchronous---------------------------------------------"); 
console.log('Hi Priyanka');
setTimeout(()=>{cook()},200);
console.log("done with your dish");

// setTimeInterval and clearInterval is to clear the setInterval like to stop the alarm.
console.log('Hi Priyanka');
const interval= setInterval(()=>{cook()},500);
console.log("done with your dish");

setTimeout(()=>{
    clearInterval(interval);
    console.log("Dish is ready to serve");
},8000);




// In JavaScript, the most common ways to handle asynchronous operations are using:
console.log("---------------------------------------------------callbacks---------------------------------------------"); 
// callback
// suppose if we have some 100 functions and we need to call those 90 arguments in functions as call back leads to callback hell
// so to avoid that callback hell we will use Promises
const grreet=(name,callback)=>{console.log(`Hi ${name}`);
callback();}
const wish =()=>{
    // process.stdout.write('How are you today');
    console.log('Wishing you a very Happy birthday...!')
}
grreet('Priyanka',wish);
// grreet('Priyanka',cook);
console.log("---------------------------------------------------Promises---------------------------------------------"); 
// Promises:-object--> eventual completion of asynchronous operation. it may resolve /reject or it may be in pending state
// in api calls we will use Promises
// eg:- promising a friend that i will come to trip/doing a food after 2-3 days --> 2-3 days it will be in pending state then -->it can be fulfilled(success/200) or failed/rejected(404).
function api(){
    fetch('https://fakestoreapi.com/products').then(res=>{
        if(!res.ok){
            // console.log('NetWork error');
            throw new Error('Network Error 404')
        }
        // console.log(res.json());
        return res.json();
    }).then((data)=>{

console.log(data.map(item=>{
    return {id:item.id,title:item.title}
}));
    }).catch(error=>{
        console.log(`${error}`)

    })

}
 api();
 console.log("---------------------------------------------------async/await---------------------------------------------");
 console.log("---------------------------------------------------DOM(DOC Obj Model)---------------------------------------------");
//  DOM->DOCUMENT OBJECT MODEL-->Tree like struture

 
 
 

 
 
 
 
 





// console.log("---------------------------------------------------Swapping---------------------------------------------");
// let sa=[1,2,3,4];
// let sb=[9,3,5,2];
// [sa,sb]=[sb,sa]
// console.log(sa);
// console.log(sb);
// console.log("---------------------------------------------------Javascript Methods()---------------------------------------------");
// let arr=[1,2,3,4,5];
// const arrmap = arr.map(item=>item*3);
// console.log(arrmap);
// arr.pop();
// console.log("pop-> removves the last element",arr);
// arr.push(6);
// console.log("push-> adds the element",arr);
// let arrjoin= arr.join('<-->');
// console.log(arrjoin);
// console.log("filter->results the elememts of satisfied consition",arr.filter(item=>item>=2));
// console.log("conacat->add the new array to the existing array",arr.concat([8,7,9,12]));
// arr.shift()
// console.log("shift->Remove the first element from the array",arr);
// arr.unshift(10);
// console.log("unshift->Add an element to the beginning of the array",arr);
// let indexs= arr.indexOf(10);
// console.log("index",indexs);
// const array1 =[2,3,4,5,74,2,65];
// console.log("reduce",array1.reduce((prev,curr)=>prev+curr,0));
// let arr1=[2,9,7];
// let arrr=arr.concat(arr1)
// let sortarrrr = arrr.sort((x,y)=>x-y);
// console.log([...new Set(sortarrrr)]);


        















//array destructuring:-unpacks elements from array into variables
const [a,b]=[10,20];
console.log(a,b);
const [x=100]=[];
console.info(x);
//object destructuring:-unpacks properties from object
const user={name:'Ali',age:10,meta:{namee:'Priyanka'}}
const {meta:{namee}} =user;
const {name}=user;
const {age}=user;
console.log(name);
console.log(age);
console.log(namee);

//spread & rest operator:- spread or gather values
// Spread = "spread out"
// Rest = "collect the rest"
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("spread",sum(10,50));

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.info("newArr",newArr);

let an = [[1,2],[2,4],[[5,7],[[6,9],[3,1]]]];
const flattened = an.flat(3)
console.log("flattened",flattened);
const removeDuplicates=[...new Set(flattened)]
console.log("removing duplicates using Set",removeDuplicates);
const asc = removeDuplicates.sort((a,b)=>a-b);
const dsc = removeDuplicates.sort((a,b)=>b-a);
console.log("asc",asc);
console.log("dsc",dsc);

// The try...catch statement is used to handle errors gracefully, without breaking the execution of your program.
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}








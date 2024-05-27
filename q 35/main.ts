import { Console } from "console";

// solution
let animalsName :string[] = ["cat", "dog", "Rabbit"];
console.log("list of animals names");

for (let i of animalsName){
console.log(i);
}
//print a statement about each animals:
for(let i of animalsName){
    console.log(`A ${i}wo would make great pet!`);
}
//print a statment about what these animals have in  common:
console.log("Any of these animals would make greet pet");

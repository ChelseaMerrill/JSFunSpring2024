import  prompt  from "readline-sync";
const num = prompt.question("please guess the number ");  //prompt the user to enter a guesse
let answer = Math.floor(Math.random()*10+1); //create a number at random for the user to guess (let or var)
console.log(answer);

console.log(typeof(num));
if (num < 1 || num > 10){
  console.log("please select a number between 1 and 10"); //check that the number is between 1 and 10 (otherwise tell them to enter a number between 1 and 10)
} else if(answer < num){
  console.log("your guess is too high");
} else if (answer > num){
  console.log("your guess is too low");
} else if (answer == num){
  console.log("You have guessed the correct number"); //Tell the user if their guess is too high, too low, or correct
} else{
  console.log("please enter a valid number"); //error handling
}

// let counter = 1;
// while(counter <= 10){
//   console.log(counter*10);
//   counter ++;
// }
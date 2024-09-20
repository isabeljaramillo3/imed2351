//if condtional statement
const age = 26

if(age>28){
   console.log("You are older than 28.")
} else if (age < 25){
   console.log("You are younger than 25.")
}

   else{ console.log("You are older than 21.")}


//concatenated string
const name = "IMED2351";
const year = 2024;

console.log(`Hello this class is called ${name} and the year is ${year}.`);

const combined = name + year;
console.log(combined);

//switch statement
let day = 2;
let dayName;

switch (day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
}
console.log(dayName); 

//number method
const PI = 3.1415
   const num = PI.toFixed(3);
      console.log(num);
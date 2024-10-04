//array 1, schedule

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday"];

weekdays.push('Friday');

console.log(weekdays);

//array 2, numbers

const numbers = ["123", "124", "125", "126"];

numbers.unshift(127);

console.log(numbers);


//array 3
const fruits = ["Apples", "Grapes", "Strawberries"];

fruits.push("Kiwi");

console.log(fruits);

//object method
const user = {
    name:"Jane",
    age: 35,
    children: ["John", "Jack", "Jennifer"],

    sayName: function(){
        console.log(this);
    }

};

user.sayName();


//object method 2

const player = {
    name: "Mario",
    age: 43,
    brother: "Luigi",
}

console.log(player);



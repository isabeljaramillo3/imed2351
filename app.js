// FOR LOOP

const names = ["One", "Two", "Three", "Four", "Five", "Six"];

for(name of names){
    console.log(name);
    if (name === "Six" ){
        console.log("There are six US states listed.");
    }
}

//WHILE LOOP
let loading = 0;
while(loading < 100){
    console.log('Website is still loading');

    loading++;

}

//dom manipulation


//
const userList = document.querySelectorAll('.name-list li');

for(user of userList){
    user.addEventListener('click', function(){
        this.style.color = 'pink';
    });
}


//
console.log(userList);

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

text.style.color = "blue";

//







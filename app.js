const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const people = document.querySelectorAll('.people');

let timeUp = false;
let score = 0;

// function to make the person appear randomly in the door
function randomTime() {
    let min = 1
    let max = 5
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('Wait for ' + rand + ' seconds')
    setTimeout(randomTime, rand * 1000);
}

randomTime()
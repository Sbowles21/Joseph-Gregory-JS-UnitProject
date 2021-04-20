const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const people = document.querySelectorAll('.people');

let lastHole;
let timeUp = false;
let score = 0;

// function to make the person appear in a hole in a random amount of time
function randomTime() {
    let min = 1
    let max = 5
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('Wait for ' + rand + ' seconds')
    setTimeout(randomTime, rand * 1000);
}

function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if(hole == lastHole) {
        return randomHole(holes)
    }
    lastHole = hole
    return hole
}
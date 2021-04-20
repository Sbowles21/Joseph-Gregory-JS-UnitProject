const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const people = document.querySelectorAll('.people');

//let lastHole;
let timeUp = false;
let score = 0;

// function to make the person appear in a hole in a random amount of time
function randomTime() {
    let min = 1
    let max = 5
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    setTimeout(randomTime, rand * 1000);
}

function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    // if(hole == lastHole) {
    //     return randomHole(holes)
    // }
    //lastHole = hole
    return hole
}

function peeping() {
    // random time on how long a person should peep for
    const time = randomTime(250, 500);
    // gets a random hole
    const hole = randomHole(holes);
    hole.classList.add('appear')
    setTimeout(() => {
        hole.classList.remove('appear'); // makes the person disappear from the hole after a random time has passed
        if(!timeUp) {
            peeping();
        }
    }, time);
}

randomTime()

function bonk()

// MUSIC TOGGLE
var backSong = document.getElementById("backgroundSong");
backSong.volume = 0.1;
function toggleSong() {
  if (backSong.paused) {
    backSong.play();
  } else {
    backSong.pause();
  }
}

//POINTS
let peoples = {
  Corey: 3,
  Kagan: 5,
  Nate: 1,
  Lathe: Math.floor(Math.random() * 10 + 1),
  Matthew: -Math.floor(Math.random() * 10 + 1),
  Fernae: -2,
};

document.getElementById('addScore').onclick=function(){
var score = parseInt(document.getElementById("score").innerHTML);
let maths = Math.floor(Math.random() * 5);
var newScore = Object.values(peoples)[maths];
score += newScore;
if (score < 0){
score = 0
}
document.getElementById("score").innerHTML = score;

}

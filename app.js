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
// MUSIC TOGGLE
let backSong = document.getElementById("backgroundSong");
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
  corey: -3,
  nate: -1,
  lathe: Math.floor(Math.random() * 10 + 1),
  matthew: -Math.floor(Math.random() * 10 + 1),
  fernae: -2,
  bee: 1,
  lucas: 5,
  bugBoi: 3,
  chicken: Math.floor(Math.random() * 10 + 1),
};

document.getElementById("addScore").onclick = function () {
  let score = parseInt(document.getElementById("score").innerHTML);
  let maths = Math.floor(Math.random() * 8);
  let newScore = Object.values(peoples)[maths];
  score += newScore;
  if (score < 0) {
    score = 0;
  }
  document.getElementById("score").innerHTML = score;
};

// COUNTER
function startGame() {
  const holes = document.querySelectorAll(".hole");
  const scoreBoard = document.querySelector(".score");
  const people = document.querySelectorAll(".people");

  //let lastHole;
  let timeUp = false;
  let holeTimeLoop;
//   let score = 0;

  // function to make the person appear in a hole in a random amount of time


  function randomTime() {
    let min = 1;
    let max = 5;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('Wait for ' + rand + ' seconds')
    holeTimeLoop = setTimeout(randomTime, rand * 1000);
    randomPersonSpot(randomHole())

  }



  function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    // if(hole == lastHole) {
    //     return randomHole(holes)
    // }
    //lastHole = hole
    return hole;
  }



  function peeping() {
    // random time on how long a person should peep for
    const time = randomTime(500, 1000);
    // gets a random hole
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
      hole.classList.remove("up"); // makes the person disappear from the hole after a random time has passed
      if (!timeUp) {
        peeping();
      }
    }, time);
  }

  randomTime();


function bonk(event){
    if(!event.isTrusted)  return;
    score+= event.target.dataset.score; //Add event.target to this
    this.parentNode.classList.remove('up') //refers to the item that is clicked
    scoreBoard.textContent = score;
}
people.forEach(people => people.addEventListener("click", bonk))




  let seconds = document.getElementById("countdown").textContent;
  if (seconds <= 1) {
    document.getElementById("countdown").textContent = 0;
  } else {
    let countdown = setInterval(function () {
      seconds--;
      seconds == 1
        ? (document.getElementById("plural").textContent = "")
        : (document.getElementById("plural").textContent = "s");
      document.getElementById("countdown").textContent = seconds;
      console.log(seconds)
      if (seconds == 0){
        clearInterval(holeTimeLoop)
      }
      if (seconds <= 0) clearInterval(countdown);
    }, 1000);
  }



  function randomPersonSpot(element){
    let wewo = ["lathe","corey","fernae","nate","matthew","bee","chicken","luc","bugBoi"];
    let In =  Math.floor(Math.random() * 8);
    element.classList.add(wewo[In]);
  }
}



 //CURSOR
 function hugeBonk(){
  document.getElementById("holes").style.cursor = "images/bonk_Hammer.png";
 }



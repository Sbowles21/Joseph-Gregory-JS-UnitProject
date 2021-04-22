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
    let rand = Math.random()
    console.log('Wait for ' + rand + ' seconds')
    holeTimeLoop = setTimeout(randomTime, rand * 2000);
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



  function peeping(name) {
    // random time on how long a person should peep for
    // gets a random hole
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
      hole.classList.remove("up"); // makes the person disappear from the hole after a random time has passed
      if (!timeUp) {
        peeping(name);
      }
    }, time);
    hole.dataset.score = peoples[name]
  }

  randomTime()
  setInterval(peeping, 2000)

function bonk(event){
    if(!event.isTrusted)  return;
    score+= event.target.dataset.score; 
    this.parentNode.classList.remove('up') //refers to the item that is clicked
    scoreBoard.textContent = score;
}
people.forEach(people => people.addEventListener("click", bonk)) //people does not exist anymore




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
    let peoplesImages = ["images/lathe.png","images/corey.png","images/fernae.png","images/nate.png","images/Matt.png","images/bee.png","images/chicken.png","images/luc.png","images/bugBoi.png"];
    let In =  Math.floor(Math.random() * 8);
    let ids = ["img1","img2","img3","img4","img5","img6","img7","img8","img9"]
    document.getElementById(ids[Math.floor(Math.random() * 9)]).src = peoplesImages[In]
  }
}



 //CURSOR
 function hugeBonk(){
  document.getElementById("holes").style.cursor = "images/bonk_Hammer.png";
 }



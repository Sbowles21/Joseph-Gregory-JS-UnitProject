const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector("#score");
const people = document.querySelectorAll(".people");
let peoplesImages = ["images/lathe.png","images/corey.png","images/fernae.png","images/nate.png","images/Matt.png","images/bee.png","images/chicken.png","images/luc.png","images/bugBoi.png"];
let mattAudio = new Audio("sounds/Pain.mp3")
let latheAudio = new Audio("sounds/TacoBell.mp3")
let nateAudio = new Audio("sounds/nateAudio.mp3")
let coreyAudio = []
let fernaeAudio = new Audio("sounds/fernae.mp3")
let bugAudio = new Audio("sounds/Bonk.mp3")
let blankAudio = new Audio("sounds/nope.mp3")

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
  hole.setAttribute('data-score', peoples[name])
  const score = Number(hole.dataset.score)
  return score
  // setTimeout(() => {
  //   hole.classList.remove("up"); // makes the person disappear from the hole after a random time has passed
  //   if (!timeUp) {
  //     peeping(name);
  //   }
  // }, 5000);
}

function bonk(event){
  let score = Number(scoreBoard.innerHTML)
  let newScore = 0
  
  console.log(event.target.src)
  if (event.target.src === "http://127.0.0.1:5500/images/nate.png") {
    newScore = peeping("nate")
    nateAudio.pause()
    nateAudio.currentTime = 0
    nateAudio.play()
  } else if (event.target.src === "http://127.0.0.1:5500/images/Matt.png") {
    newScore = peeping("matthew")
    mattAudio.pause()
    mattAudio.currentTime = 0
    mattAudio.play()
  } else if (event.target.src === "http://127.0.0.1:5500/images/bee.png") {
    newScore = peeping("bee")
    bugAudio.pause()
    bugAudio.currentTime = 0
    bugAudio.play()
  } else if (event.target.src === "http://127.0.0.1:5500/images/corey.png") {
    newScore = peeping("corey")
    //coreyAudio.pause()
    //coreyAudio.currentTime = 0
    //coreyAudio.play()
  } else if (event.target.src === "http://127.0.0.1:5500/images/lathe.png") {
    newScore = peeping("lathe")
    latheAudio.pause()
    latheAudio.currentTime = 0
    latheAudio.play()
  } else if (event.target.src === "http://127.0.0.1:5500/images/fernae.png") {
    newScore = peeping("fernae")
    fernaeAudio.pause()
    fernaeAudio.currentTime = 0
    fernaeAudio.play()
  } else if (event.target.src === "http://127.0.0.1:5500/images/luc.png") {
    newScore = peeping("lucas")
    bugAudio.pause()
    bugAudio.currentTime = 0
    bugAudio.play()
  } else if (event.target.src === "http://127.0.0.1:5500/images/chicken.png") {
    newScore = peeping("chicken")
    bugAudio.pause()
    bugAudio.currentTime = 0
    bugAudio.play()
  }else if (event.target.src === "http://127.0.0.1:5500/images/dark.png"){
    newScore = peeping("dark")
    blankAudio.pause()
    blankAudio.currentTime = 0
    blankAudio.play()
  } 

  if(!event.isTrusted) return ;
  score += newScore
  if (score < 0) {
    score = 0
  }

  
  event.target.parentNode.classList.remove('up') //refers to the item that is clicked
  scoreBoard.innerText = score;
  console.log(event.target.tagName)
  if (event.target.tagName === "IMG") {
    event.target.src = "images/dark.png"
  }
}

//POINTS
let peoples = {
  "corey": -3,
  "nate": -1,
  "lathe": Math.floor(Math.random() * 10 + 1),
  "matthew": -Math.floor(Math.random() * 10 + 1),
  "fernae": -2,
  "bee": 1,
  "lucas": 5,
  "chicken": Math.floor(Math.random() * 10 + 1),
  "dark": 0
};

// document.getElementById("addScore").onclick = function () {
//   let score = parseInt(document.getElementById("score").innerHTML);
//   let maths = Math.floor(Math.random() * 8);
//   let newScore = Object.values(peoples)[maths];
//   score += newScore;
//   if (score < 0) {
//     score = 0;
//   }
//   document.getElementById("score").innerHTML = score;
// };

// COUNTER
function startGame() {
  document.getElementById("Start").disabled = true
  const holes = document.querySelectorAll(".hole");
  document.getElementById("score").innerHTML = 0;

  //let lastHole;
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


  randomTime()
  setInterval(peeping(), 2000)
  

// peoplesImages.forEach(peoplesImages => peoplesImages.addEventListener("click", bonk))




  let seconds = document.getElementById("countdown").textContent;
  let altseconds =  document.getElementById("countdown").textContent;
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
        document.getElementById("Start").disabled = false
        document.getElementById("countdown").textContent = altseconds;
        document.getElementById("img1").src = "images/dark.png"
        document.getElementById("img2").src = "images/dark.png"
        document.getElementById("img3").src = "images/dark.png"
        document.getElementById("img4").src = "images/dark.png"
        document.getElementById("img5").src = "images/dark.png"
        document.getElementById("img6").src = "images/dark.png"
        document.getElementById("img7").src = "images/dark.png"
        document.getElementById("img8").src = "images/dark.png"
        document.getElementById("img9").src = "images/dark.png"
      }
      if (seconds <= 0) clearInterval(countdown);
    }, 1000);
  }



  function randomPersonSpot(){
    let In =  Math.floor(Math.random() * 8);
    let ids = ["img1","img2","img3","img4","img5","img6","img7","img8","img9"]
    document.getElementById(ids[Math.floor(Math.random() * 9)]).src = peoplesImages[In]
    
  }
}
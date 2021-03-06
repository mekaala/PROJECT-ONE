// Created point values.
let score100 = 100;
let score200 = 200;
let score300 = 300;
let score400 = 400;
let score500 = 500;
let score1000 = 1000;
let scoreTotal = 0;



const nightMode = document.querySelector(".nMode");
nightMode.onclick = function() {
    body.classList.toggle('night-mode');    
    if (nightMode.innerHTML === "Night Mode") {
        nightMode.innerHTML = "Day Mode";
        nightMode.classList.remove('nMode');
        nightMode.classList.add('dMode');
      } else {
        nightMode.innerHTML = "Night Mode";
        nightMode.classList.remove('dMode');
        nightMode.classList.add('nMode');
      }
}

const btns = document.querySelectorAll(".openmodal");
const modal = document.querySelectorAll(".modal");
const spans = document.getElementsByClassName("close-btn");
const answer = document.querySelectorAll(".modal-footer");
const question = document.querySelectorAll(".modal-header");
const modalShape = document.querySelectorAll(".modal-shape")

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        modal[i].style.display = "block";
        multButton[i].style.display = "block";
    }
}
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
       modal[i].style.display = "none";
       Array.from(document.querySelectorAll(".modal-footer"), e => e.style.display = "none");
    }
 }
 window.onclick = function(evt) {
    if (evt.target == modal) {
      modal[i].style.display = "none";
    }
  }


// Choose an answer
// Clicking button will replace choices with answer
// Button will be disabled

const multButton = document.querySelectorAll(".modal-content");
const whatAnswer = document.querySelectorAll(".what");
for (let i = 0; i < whatAnswer.length; i++) {
    whatAnswer[i].onclick = function() {
        answer[i].style.display = "block";
        multButton[i].style.display = "none";
        btns[i].disabled = true;
        btns[i].classList.remove('nMode')
        btns[i].classList.add('lose')
    }
}

const noAnswer = document.querySelectorAll(".no");
for (let i = 0; i < noAnswer.length; i++) {
    noAnswer[i].onclick = function() {
        answer[i].style.display = "block";
        multButton[i].style.display = "none";
        btns[i].disabled = true;
        btns[i].classList.remove('nMode')
        btns[i].classList.add('lose')
    }
}

const wayAnswer = document.querySelectorAll(".way");
for (let i = 0; i < wayAnswer.length; i++) {
    wayAnswer[i].onclick = function() {
        answer[i].style.display = "block";
        multButton[i].style.display = "none";
        btns[i].disabled = true;
        btns[i].classList.remove('nMode')
        btns[i].classList.add('lose')
    }
}
const correctAnswer = document.querySelectorAll(".correct");
for (let i = 0; i < correctAnswer.length; i++) {
    correctAnswer[i].onclick = function() {
        answer[i].style.display = "block";
        multButton[i].style.display = "none";
        btns[i].disabled = true;
        btns[i].classList.remove('nMode')
        btns[i].classList.add('win');
    }
}


// Updated content so that choosing the correct answer will turn the point button blue.


// Defined variables for the correct multiple choice answer
// (depending on the value of the question),
// such that awards the correct amount of points to player
// by adding new points to the total they have collected so far.
// Update the score card with the new points.

const s = document.getElementById("thing");
const scoreCard = document.querySelector(".scoreCard");

const p100 = document.querySelectorAll("#one")
for (let i = 0; i < p100.length; i++) {
p100[i].addEventListener('click',add100);
function add100() {
    scoreTotal += score100;
    s.textContent = scoreTotal + " Points";

}}
const p200 = document.querySelectorAll("#two")
for (let i = 0; i < p200.length; i++) {
p200[i].addEventListener('click',add200);
function add200() {
    scoreTotal += score200;
    s.textContent = scoreTotal + " Points";

}}
const p300 = document.querySelectorAll("#three")
for (let i = 0; i < p300.length; i++) {
p300[i].addEventListener('click',add300);
function add300() {
    scoreTotal += score300;
    s.textContent = scoreTotal + " Points";

}}
const p400 = document.querySelectorAll("#four")
for (let i = 0; i < p400.length; i++) {
p400[i].addEventListener('click',add400);
function add400() {
    scoreTotal += score400;
    s.textContent = scoreTotal + " Points";

}}
const p500 = document.querySelectorAll("#five")
for (let i = 0; i < p500.length; i++) {
p500[i].addEventListener('click',add500);
function add500() {
    scoreTotal += score500;
    s.textContent = scoreTotal + " Points";

}}
const p1000 = document.querySelector("#ten")
p1000.addEventListener('click',add1000);
function add1000() {
    scoreTotal += score1000;
    s.textContent = scoreTotal + " Points";

}

const scoreBoard = document.querySelector("#score");
const body = document.querySelector('body');
scoreBoard.addEventListener('click',finalScore);
const game_Over = document.querySelector("body > section > div.modal.game-over");
const nice = document.querySelector("body > section > div.modal.great");
const perfect = document.querySelector("body > section > div.modal.incredible");

const h = document.getElementById("end");
const l = document.getElementById("never");
const m = document.getElementById("dies");


function finalScore() {
    if (confirm("Are you sure you want to submit your score?")) {
        if (scoreTotal < 2000) {
            gameOver.play();
            body.classList.add('game_over');
            game_Over.style.display = "block";
            h.appendChild(document.createTextNode(scoreTotal));
        } else if (scoreTotal < 7000) {
            niceWork.play();
            body.classList.add('good')
            nice.style.display = "block";
            l.appendChild(document.createTextNode(scoreTotal));
        } else if (7000 <= scoreTotal) {
            incredible.play();
            body.classList.add('big')
            perfect.style.display = "block";
            m.appendChild(document.createTextNode(scoreTotal));
        }
        Array.from((btns), e => e.disabled = true);
        scoreBoard.disabled = true;
    }
}

// BONUS
// Make another board with double values on HTML, CSS, JavaScript, Git, and Outcomes.
// Give players bonus points for being precise with their answers.

// AUDIO
const gameOver = new Audio('sounds/Game-over effect.mp3');
const niceWork = new Audio('sounds/nice_work.mp3');
const incredible = new Audio('sounds/incredible.mp3');


const about = document.getElementById("modalAbout");

// Get the button that opens the modal
const buttons = document.getElementById("aboutMe");
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    about.style.display = "none";
  }

// When the user clicks on the button, open the modal
buttons.onclick = function() {
  about.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == about) {
    about.style.display = "none";
  }
}


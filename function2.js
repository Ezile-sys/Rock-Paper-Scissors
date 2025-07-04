let playerScore = 0;
let computerScore = 0;
let drawCount = 0;
let roundsToWin = 1;

function showGameOver(message){
 const screen = document.getElementById('gameOverScreen');
 const resultMessage = document.getElementById('resultMessage');

 resultMessage.textContent = message;
 document.getElementById('gameOverScreen').style.display = "flex";
}

const buttons = document.querySelectorAll('.mode-buttons button');
buttons.forEach(button =>{
 button.addEventListener('click', ()=> {
  buttons.forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
 });
});

function restartGame(){
 document.getElementById("gameOverScreen").style.display = "none";
 setMode(roundsToWin*2-1);
}

function setMode(rounds){
 roundsToWin = Math.ceil(rounds/2);
 playerScore = 0;
 computerScore = 0;
 drawCount = 0;
 updateScoreboard();

 document.getElementById('result').textContent = " Pick your weapon!!";
}

function updateScoreboard(){
 document.getElementById('scoreboard').textContent = `You: ${playerScore} | Rigby: ${computerScore}`;
}

function play(playerChoice){
 const choice = ['rock', 'paper', 'scissors'];
 const computerChoice = choice[Math.floor(Math.random()*3)];

 const showdown = document.getElementById('showdown');
 const resultText = document.getElementById('result');
 const playerIcon = document.getElementById('playerIcon');
 const computerIcon = document.getElementById('computerIcon');

 playerIcon.innerHTML = `<img src="rock-player.png" alt="rock" class="shake-up-down" />`;
 computerIcon.innerHTML = `<img src="rock-computer.png" alt="rock" class="shake-up-down"/>`;

 showdown.classList.add('visible');
 resultText.textContent = "...";

 setTimeout(() => {
  playerIcon.innerHTML = `<img src="${playerChoice}-player.png" alt="${playerChoice}" />`;
  computerIcon.innerHTML = `<img src="${computerChoice}-computer.png" alt="${computerChoice} " />`;

  let result = '';
  if(playerChoice === computerChoice){
    result = "Draw!!";
    drawCount++;
    if(drawCount >= 3){
     document.body.style.background = " linear-gradient( to bottom, #000000, #222222)";
     showGameOver(" The monster took your prize!");
     return;
    }
  }else if((playerChoice === 'rock' && computerChoice === 'scissors')||
  (playerChoice === 'paper' && computerChoice === 'rock') ||
  ( playerChoice === 'scissors' && computerChoice === 'paper')){
    result = " You win!! "
    playerScore++;
  } else{
    result = " you lose!!";
    computerScore++;
  }

  updateScoreboard();
  if(playerScore>= roundsToWin){
   result += " You won the match!";
   setTimeout(()=>{
     showGameOver(" You won the match!!");
   }, 1000);
   return;
   playerScore = 0;
   computerScore = 0;
   drawCount = 0;
  } else if(computerScore >= roundsToWin){
   result+= " Rigby won the match! ";
   setTimeout(()=>{
     showGameOver(" You lost!!");
   },1000);
   return;
   playerScore = 0;
   computerScore = 0;
   drawCount = 0;
  }
  resultText.textContent = ` Rigby chose ${computerChoice}. ${result}`;
 }, 1000);
}

function getComputerChoice() {
  let value= ['Rock', 'Paper', 'Scissor']
  let  computerChoice = value[Math.floor(Math.random()*3)] 
  return computerChoice
}


function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice){
    score = 0;
  }
  else if( playerChoice === 'Rock' && computerChoice === 'Scissor' ){
    score = 1
  }

  else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
    score =1
  }
  else if(playerChoice === 'Scissor' && computerChoice === 'Paper'){
    score= 1;
  } 
  else {
    score = -1;
  
  } 
  return score ;
 
}


function showResult(score, playerChoice, computerChoice) {

  let result= document.getElementById('result');
  if (score === -1){
    result.innerText = 'You Lose'
    
  }
  else if( score === 1){
    result.innerText = 'You win'
  }
  else {
    result.innerText = `It's a Draw!`
    
  }
  
  let playerScore = document.getElementById('player-score');
  let hands= document.getElementById('hands')
  playerScore.innerText = score;
  hands.innerText = `👩 ${playerChoice} vs 🤖 ${computerChoice}`
}


function onClickRPS(playerChoice) {
  console.log(playerChoice)
 const computerChoice = getComputerChoice();
 console.log(computerChoice)
 const score= getResult(playerChoice.value, computerChoice)
 console.log(score)
 showResult(score,playerChoice.value, computerChoice)
 
}



function playGame() {
let rpsButtons = document.querySelectorAll('.rpsButton')
rpsButtons.forEach(rpsButton => {
  rpsButton.onclick = () => onClickRPS(rpsButton)
})
let clearButton = document.getElementById('endGameButton');
clearButton.onclick = () => endGame()
}

function endGame() {
   let playerScore = document.getElementById('player-score');
  let hands= document.getElementById('hands');
  let result= document.getElementById('result');
  playerScore.innerText = '';
  hands.innerText = '';
  result.innerText ='';
}

playGame()
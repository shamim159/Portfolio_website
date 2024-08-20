const body = document.querySelector('body');//selects the target
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const scoreContainer = document.createElement('div');
const roundSelection = document.createElement('div')
const roundWinner = document.createElement('div')
const winner = document.createElement('h1');
const leagueWinner = document.createElement('h1');


rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";




body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

function getComputerChoice() {//computer score generator
  const  myArray=["rock", "scissors", "paper" ];
  const randNum = myArray[Math.floor(Math.random() * myArray.length)];//my array.length = 3 values assigned to 0,1,2
  return (randNum);  
};  

function getPlayerChoice() {
  let validatedInput = false;
    while(validatedInput == false){
      const pick = rockButton || paperButton || scissorsButton;
      if(pick == null) {
        getPlayerChoice();// will keep prompting if unmatched values are inputed
      }
}
}

rockButton.addEventListener("click", (e) => {
  getPlayerChoice = e.target.innerHTML;
  game();    
});

paperButton.addEventListener("click", (e) => {
  getPlayerChoice = e.target.innerHTML;
  game();    
});

scissorsButton.addEventListener("click", (e) => {
  getPlayerChoice = e.target.innerHTML;
  game();    
});

  



//const playerSelection = getPlayerChoice();//runs player choice and computer choice below and stores in variables.
//const computerSelection = getComputerChoice();


//function to generate computers random






function playRound(playerSelection, computerSelection) {//game logic using ternary operator
  let result = ""
  //conditions
if (playerSelection == computerSelection) {
  result = "Its a Draw!";
}else{
  switch(playerSelection){//changed to switch method for cleaner code
    case "rock":
      result = (computerSelection == "scissors") ? "You Win! "  : "You Lose! "  ;//updated logic as console log throw different results from the randNum.
      break;
      case "paper":
        result = (computerSelection == "rock") ? "You Win! "    : "You Lose! "  ;
        break;
        case "scissors":
          result = (computerSelection == "paper") ? "You Win! "  : "You Lose! "  ;
          break;   
        }  
      }
      return result;
    };
    
    
    

    
    console.log("WELCOME to RPS")
    let scorePlayer = 0;
    let scoreComputer = 0;
    function game() {
        const playerSelection = getPlayerChoice;//runs player choice and computer choice below and stores in variables.
        const computerSelection = getComputerChoice();
      roundSelection.textContent = `player: ${playerSelection} --VS-- computer: ${computerSelection}`;// logs the scores
      roundWinner.textContent = 
      body.appendChild(roundSelection)
      if(playRound(playerSelection, computerSelection) == "You Win! ") {
        scorePlayer++;//adds scores by 1 and stores in the above variable to present to console
      }else if(playRound(playerSelection, computerSelection) == "You Lose! ") {
        scoreComputer++;
      }
      if(playRound(playerSelection, computerSelection) == "You Win! ") {//adds the you win or you lose. 
        roundWinner.textContent =  "You Win! ";
        body.appendChild(roundWinner);
      }else if(playRound(playerSelection, computerSelection) == "You Lose! ") {
        roundWinner.textContent =  "You Lose! ";
        body.appendChild(roundWinner);
      }else{
        roundWinner.textContent = "Tie! ";
        body.appendChild(roundWinner);
      }
      scoreContainer.textContent = `YOU: ${scorePlayer} COMPUTER: ${scoreComputer}`;
      body.appendChild(scoreContainer)

      
      body.appendChild(winner)
      
      if(scoreComputer === 5){
        leagueWinner.textContent = "GAME OVER : COMPUTER WINS";
        body.appendChild(leagueWinner)
      }else if(scorePlayer === 5){
        leagueWinner.textContent = "WINNER WINNER CHICKEN DINNER!";
        body.appendChild(leagueWinner)
    } 
  }
    
    /*console.log("Game Over")
    if(scorePlayer > scoreComputer) {
      console.log("WINNER WINNER CHICKEN DINNER!");
    }else if(scorePlayer < scoreComputer) {
      console.log("computer wins!");
    }else{
      console.log("we have a tie!");
    }
    console.log(`player: ${scorePlayer}`)
    console.log(`computer: ${scoreComputer}`)
};*/
//game();// 1. runs the game function
function getComputerChoice () {
    let rock = "Rock";
    let paper = "Paper";
    let scissor = "Scissor";

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0)
    {
        return rock;
    }
    else if (randomNumber == 1)
    {
        return paper;
    }
    else 
    {
        return scissor;
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);


function playRound(playerSelection, computerSelection) {
    

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        return "Tied!";
    }
    else if ( (playerSelection.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") || (playerSelection.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissor") || (playerSelection.toLowerCase() == "scissor" && computerChoice.toLowerCase() == "rock") )
    {
        // return "You Lose! " + computerChoice + " beats " + playerSelection;
        return "Computer";
    }
    else 
    {
       // return "You Win! " + playerSelection+ " beats " + computerChoice;
       return "Playerrock";
    }
 
}


function game ()
{
    let userInput = prompt("Pick 1: Rock Paper Scissor");
    let playGame = playRound(userInput, computerChoice);

    if (playGame == "Player")
    {
        return "Player Wins";
    }
    else if (playGame == "Computer")
    {
        return "Computer Wins"
    }
    else 
    {
        return "No one wins";
    }


}

// console.log(game());


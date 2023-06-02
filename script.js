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


function getResult(playerChoice, computerChoice)
{
    if (playerChoice.toLowerCase() == computerChoice.toLowerCase())
    {
        return "Tied!";
    }
    else if ( (playerChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") || (playerChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissor") || (playerChoice.toLowerCase() == "scissor" && computerChoice.toLowerCase() == "rock") )
    {
        // return "You Lose! " + computerChoice + " beats " + playerSelection;
        return "Computer";
    }
    else 
    {
       // return "You Win! " + playerSelection+ " beats " + computerChoice;
       return "Player";
    }
}

// console.log(game());


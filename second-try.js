function app(){
    const totalRounds = 5;
    
    const resetButton = document.querySelector(".reset-button");

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    const rockImage = `<img class="rock" src="https://img.icons8.com/color/100/000000/rock.png"/>`;
    const paperImage = `<img class="paper" src="https://img.icons8.com/dusk/100/000000/paper.png"/>`;
    const scissorsImage = `<img class="scissors" src="https://img.icons8.com/plasticine/100/000000/surgical-scissors.png"/>`;

    let screenMessage = document.querySelector(".game-message");

    let playerPickImageDisplay = document.querySelector(".player .pick");
    let computerPickImageDisplay = document.querySelector(".computer .pick");


    let playerPointDisplay = document.querySelector(".player-points .point");
    let playerPoint = 0;

    let computerPointDisplay = document.querySelector(".computer-points .point");
    let computerPoint = 0;
    let roundDisplay = document.querySelector(".round");
    let round = 1;



    function playgame(userOption, computerOption){
        if(round > 5){
            return;
        }
        else if(round == 5){
            checkChoices(userOption, computerOption);
            round++;
            screenMessage.textContent = getFinalWinnerMessage(playerPoint, computerPoint);
            return;
        }
        else if(round < 5){
            checkChoices(userOption, computerOption);
            round++;
            roundDisplay.textContent = round;
        }
        
    }

    function checkChoices(userOption, computerOption){
        imageConverter(userOption, computerOption);
            if(userOption == computerOption){
                screenMessage.textContent = "It is a draw";
        
            }else if(userOption == "rock" && computerOption == "paper"){
                screenMessage.textContent = "You lose";
                addComputerPoints();
                setPoints();
        
            }else if(userOption == "rock" && computerOption == "scissors"){
                screenMessage.textContent = "You win";
                addPlayerPoints();
                setPoints();
        
            }else if(userOption == "paper" && computerOption == "rock"){
                screenMessage.textContent = "You win";
                addPlayerPoints();
                setPoints();
        
            }else if(userOption == "paper" && computerOption == "scissors"){
                screenMessage.textContent = "You lose";
                addComputerPoints();
                setPoints();
        
            }else if(userOption == "scissors" && computerOption == "rock"){
                screenMessage.textContent = "You lose";
                addComputerPoints();
                setPoints();
        
            }else if(userOption == "scissors" && computerOption == "paper"){
                screenMessage.textContent = "You win";
                addPlayerPoints();
                setPoints();
        
            }
            
    }

    function addPlayerPoints(){
        playerPoint++;
    }

    function addComputerPoints(){
        computerPoint++;
    }

    function setPoints(){
        playerPointDisplay.textContent = playerPoint;
        computerPointDisplay.textContent = computerPoint;
    }

    function getFinalWinnerMessage(userPoints, computerPoints){
        if(userPoints > computerPoints){
            return "You won the tournament";
        }
        else if(userPoints == computerPoints){
            return "The tournament is a draw";
        }
        else{
            return "You lost the tournament, computer won";
        }
    }

    function imageConverter(uChoice, cChoice){
        switch(uChoice){
            case "rock":
                playerPickImageDisplay.innerHTML = rockImage;
                break;
            case "paper":
                playerPickImageDisplay.innerHTML = paperImage;
                break
            case "scissors":
                playerPickImageDisplay.innerHTML = scissorsImage;
        }
        switch(cChoice){
            case "rock":
                computerPickImageDisplay.innerHTML = rockImage;
                break;
            case "paper":
                computerPickImageDisplay.innerHTML = paperImage;
                break;
            case "scissors":
                computerPickImageDisplay.innerHTML = scissorsImage;
        }
    }

    function getComputerChoice(){
        const options = ["rock", "paper", "scissors"];
        return options[Math.floor(Math.random() * options.length)];
    }

    function resetGame(){
        round = 1;
        roundDisplay.textContent = 1;
        screenMessage.textContent = "";
        computerPoint = 0;
        playerPoint = 0;
        playerPointDisplay.innerHTML = 0;
        computerPointDisplay.innerHTML = 0;
        playerPickImageDisplay.innerHTML = "";
        computerPickImageDisplay.innerHTML = "";
    }
    rock.addEventListener('click', () => playgame("rock", getComputerChoice()));
    paper.addEventListener('click', () => playgame("paper", getComputerChoice()));
    scissors.addEventListener('click', () => playgame("scissors", getComputerChoice()));4
    resetButton.addEventListener('click', () => resetGame());
}

app();
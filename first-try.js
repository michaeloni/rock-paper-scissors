const totalRounds = 5;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const rockImage = `<img class="rock" src="https://img.icons8.com/color/100/000000/rock.png"/>`;
const paperImage = `<img class="paper" src="https://img.icons8.com/dusk/100/000000/paper.png"/>`;
const scissorsImage = `<img class="scissors" src="https://img.icons8.com/plasticine/100/000000/surgical-scissors.png"/>`;

let screenMessage = document.querySelector(".game-message");

let userPickImage = document.querySelector(".player .pick");
let computerPickImage = document.querySelector(".computer .pick");

const coices = document.querySelector(".weapons");

let userPointDisplay = document.querySelector(".player-points .point");
let userPoint = 0;

let computerPointDisplay = document.querySelector(".computer-points .point");
let computerPoint = 0;
let roundDisplay = document.querySelector(".round");
let round = 1;

rock.addEventListener('click', () =>{
    if(round <= totalRounds){
        main("rock");
        
    }
    
});
paper.addEventListener('click', () => main("paper"));
scissors.addEventListener('click', () => main("scissors"));


function main(userChoice){
    if(round <= totalRounds){
        roundDisplay.innerHTML = round;
        console.log(userChoice)
        game(userChoice, getComputerChoice());
        round++;
    }else{
        screenMessage.textContent = getFinalWinnerMessage();
    }
}




function game(userChoice, computerChoice){
    imageConverter(userChoice, computerChoice);
    if(userChoice == computerChoice){
        screenMessage.textContent = getDrawMessage();

    }else if(userChoice == "rock" && computerChoice == "paper"){
        screenMessage.textContent = getLoseMessage();
        addPoint(computerPoint);
        computerPoint++;
        userPointDisplay.innerHTML = userPoint;
        computerPointDisplay.innerHTML = computerPoint;

    }else if(userChoice == "rock" && computerChoice == "scissors"){
        screenMessage.textContent = getWinMessage();
        addPoint(userPoint);
        userPoint++;
        userPointDisplay.innerHTML = userPoint;
        computerPointDisplay.innerHTML = computerPoint;

    }else if(userChoice == "paper" && computerChoice == "rock"){
        screenMessage.textContent = getWinMessage();
        userPoint++;
        userPointDisplay.innerHTML = userPoint;
        computerPointDisplay.innerHTML = computerPoint;

    }else if(userChoice == "paper" && computerChoice == "scissors"){
        screenMessage.textContent = getLoseMessage();
        computerPoint++;
        userPointDisplay.innerHTML = userPoint;
        computerPointDisplay.innerHTML = computerPoint;

    }else if(userChoice == "scissors" && computerChoice == "rock"){
        screenMessage.textContent = getLoseMessage();
        addPoint(computerPoint);
        computerPoint++;
        userPointDisplay.innerHTML = userPoint;
        computerPointDisplay.innerHTML = computerPoint;

    }else if(userChoice == "scissors" && computerChoice == "paper"){
        screenMessage.textContent = getWinMessage();
        addPoint(userPoint);
        userPoint++;
        userPointDisplay.innerHTML = userPoint;
        computerPointDisplay.innerHTML = computerPoint;

    }
    
}


function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}


function addPoint(target){
    return target++;
}

function getDrawMessage(){
    return "Draw";
}

function getWinMessage(){
    return "You won";
}
function getLoseMessage(){
    return "You lost";
}


function imageConverter(uChoice, cChoice){
    switch(uChoice){
        case "rock":
            userPickImage.innerHTML = rockImage;
            break;
        case "paper":
            userPickImage.innerHTML = paperImage;
            break
        case "scissors":
            userPickImage.innerHTML = scissorsImage;
    }
    switch(cChoice){
        case "rock":
            computerPickImage.innerHTML = rockImage;
            break;
        case "paper":
            computerPickImage.innerHTML = paperImage;
            break;
        case "scissors":
            computerPickImage.innerHTML = scissorsImage;
    }
}

function getFinalWinnerMessage(userPoints, computerPoints){
    if(userPoints > computerPoints){
        return "You won the tournament";
    }
    else if(userPoints == computerPoints){
        return "It is a draw";
    }
    else{
        return "You lost the tournament, computer won";
    }
}

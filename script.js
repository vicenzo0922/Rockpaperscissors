let userScore = 0;
let computerScore = 0;

function updateScores(){
document.querySelector('#userScore').innerHTML = userScore;
document.querySelector('#computerScore').innerHTML= computerScore;
}



document.querySelector('#rockBtn').addEventListener('click', ()=>{
    selectChoice('rock');
});
document.querySelector('#paperBtn').addEventListener('click', ()=>{
    selectChoice('paper');
});
document.querySelector('#scissorsBtn').addEventListener('click', ()=>{
    selectChoice('scissors');
});

function selectChoice(choice) {
    const computerChoice = makeComputerChoice();

    if(choice === computerChoice){
        alert('DRAW')
    }

    if(choice === 'rock'){
        if(computerChoice === 'paper'){
            computerScore++;
            alert('Computer Wins');
        }if(computerChoice === 'scissors'){
            userScore++;
            alert('You Win');
        }
    }

    if(choice === 'paper'){
        if(computerChoice === 'scissors'){
            computerScore++;
            alert('Computer Wins');
        }if(computerChoice === 'rock'){
            userScore++;
            alert('You Win');
        }
    }

    if(choice === 'scissors'){
        if(computerChoice === 'rock'){
            computerScore++;
            alert('Computer Wins');
        }if(computerChoice === 'paper'){
            userScore++;
            alert('You Win');
        }
    }



    updateScores();
}

function makeComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}
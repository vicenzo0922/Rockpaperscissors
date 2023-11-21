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
    alert(choice);
}

function makeComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    Math.floor(Math.random() * choices.length);
}
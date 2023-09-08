let playGame = confirm('shall we play rock, paper or scissors');

if (playGame){
    //play
    let playerChoice = prompt('please enter rock, paper or scissor.');

    if (playerChoice){
        //continue to play
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissor'){

            let computerChoice = Math.floor(Math.random() *3 +1);
            let computer = computerChoice === 1 ? 'rock' : computerChoice === 2 ? 'paper' : 'scissor';

            let result = 
            playerOne === computer ? `Tie game: \n${playerOne}\n${computer}`
            : playerOne === 'rock' && computer === 'paper' ?
            `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
            : playerOne === 'paper' && computer === 'rock' ?
            `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
            : playerOne === 'scissor' && computer === 'rock' ?
            `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
            : `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne wins!`;
            alert(result);

            let playAgain = confirm('Play again?');
            playAgain ? location.reload() : alert('Ok, thanks for playing');
        }else{
            alert('you didnt enter rock, paper or scissor');
        }
    }else{
        alert('I guess you changed your mind. Maybe next time');
    }

}else{
    alert('Okay, maybe next time');
}
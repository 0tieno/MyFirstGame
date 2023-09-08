// let playGame = confirm('shall we play rock, paper or scissors');

// if (playGame){
//     //play
//     let playerChoice = prompt('please enter rock, paper or scissor.');

//     if (playerChoice){
//         //continue to play
//         let playerOne = playerChoice.trim().toLowerCase();
//         if(playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissor'){

//             let computerChoice = Math.floor(Math.random() *3 +1);
//             let computer = computerChoice === 1 ? 'rock' : computerChoice === 2 ? 'paper' : 'scissor';

//             let result = 
//             playerOne === computer ? `Tie game: \n${playerOne}\n${computer}`
//             : playerOne === 'rock' && computer === 'paper' ?
//             `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
//             : playerOne === 'paper' && computer === 'rock' ?
//             `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
//             : playerOne === 'scissor' && computer === 'rock' ?
//             `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
//             : `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne wins!`;
//             alert(result);

//             let playAgain = confirm('Play again?');
//             playAgain ? location.reload() : alert('Ok, thanks for playing');
//         }else{
//             alert('you didnt enter rock, paper or scissor');
//         }
//     }else{
//         alert('I guess you changed your mind. Maybe next time');
//     }

// }else{
//     alert('Okay, maybe next time');
// }






//.................... MY PRACTICE....................//

let playGame = confirm("Ready to play rock, paper or scissor?");

if (playGame){
    //play
    let playerChoice = prompt("Please enter either rock, paper or scissor");

    if(playerChoice){
        //continue
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissor'){

            let computerChoice = Math.floor(Math.random() *3 +1);
            let computer = computerChoice === 1 ? 'rock' : computerChoice === 2? 'paper' : 'scissor' ;

            //result
            let result =
            playerOne === computer ? 'You tied the game'
            :playerOne === 'paper' && computer === 'scissor' ? 
            `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins the game!`
            :playerOne === 'paper' && computer === 'rock' ?
            `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer wins the game!`
            :`PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins the game!`;

            alert(result);

            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Thanks for playing. See you next time.");
        }else{
            alert("You didn't enter either rock, paper or scissor");
        }
    }else{
        alert("Oops! I guess you change your mind");
    }
}else{
    alert("Ok. Maybe next time");
}
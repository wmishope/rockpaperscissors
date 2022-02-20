function computerPlay(){
    let playList= ["Rock","Paper","Scissors"];
    idx= Math.floor(Math.random()*3);
    return playList[idx];
};

function playRound(playerSelection='Rock', computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    console.log(playerSelection)
    console.log(computerSelection)
   if(playerSelection!=computerSelection){
        if (playerSelection=='rock'){
            if (computerSelection=='scissors'){
                console.log("You win.Rock beats Scissors");
            }
            else{ console.log("You lose. Paper beats Rock");
            }
        }

        if (playerSelection=='scissors'){
            if (computerSelection=='paper'){
                console.log("You win.Scissors beats Paper.");
            }
            else{ console.log("You lose. Rock beats Scissors");
            }
        }

        if (playerSelection=='paper'){
            if (computerSelection=='rock'){
                console.log("You win.Paper beats Rock.");
            }
            else{ console.log("You lose. Scissors beats Paper");
            }
        }
    }
   
    else{
        console.log("It is a draw.")
    }

     

};


const playerSelection= 'Rock';
const computerSelection=computerPlay();

playRound(playerSelection,computerSelection);

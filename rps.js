function computerPlay(){
    let playList= ["Rock","Paper","Scissors"];
    idx= Math.floor(Math.random()*3);
    return playList[idx];
};

function playRound(playerSelection='Rock', computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    var result="";
    var count=0;
    if(playerSelection!='rock'&& playerSelection!='paper' && playerSelection!='scissors'){
        return "Please select from Rock, Paper and Scissors only!";
    }
   if(playerSelection!=computerSelection){
        if (playerSelection=='rock'){
            if (computerSelection=='scissors'){
                result="You win! Rock beats Scissors";
                count+=1;
            }
            else{ result="You lose :( Paper beats Rock";
            
            }
        }

        if (playerSelection=='scissors'){
            if (computerSelection=='paper'){
                result="You win! Scissors beats Paper";
                count+=1;
            }
            else{ result="You lose :( Rock beats Scissors";
            }
        }

        if (playerSelection=='paper'){
            if (computerSelection=='rock'){
                result="You win! Paper beats Rock";
                count+=1;
            }
            else{ result="You lose :( Scissors beat Paper";
            }
        }
    }
   
    else{
        result="It is a draw"
    }
    return([result,count]);
    
};


// const playerSelection= window.prompt("Rock,paper or scissors?");


var score=0;

function rps(inputValue){
console.log(inputValue);

const playerSelection= inputValue;
const computerSelection=computerPlay();
// var inputVal=document.getElementById("bttn1")

result=playRound(playerSelection,computerSelection);
score+=result[1];
console.log(score);
// document.getElementById('playerSelection').value=null;
document.getElementById('spanContent').textContent=result[0];
document.getElementById('spanscore').textContent=score;
}


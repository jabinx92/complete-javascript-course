/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, previousRoll;
gamePlaying = true;

init();

var lastDice;

// dice = Math.floor(Math.random() * 6 + 1);
// console.log(dice);

// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x)
function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        // console.log(activePlayer);
        roundScore = 0;
        document.getElementById('current-0').textContent = roundScore;
        document.getElementById('current-1').textContent = roundScore;

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-0-panel').classList.add('active');


        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.getElementById('dice-1').style.display ='none';
        document.getElementById('dice-2').style.display ='none';
}

function init() {
scores = [0,0];
activePlayer = 0;
roundScore = 0;

document.querySelector("#dice-1").style.display = 'none';
document.querySelector("#dice-2").style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

gamePlaying = true;
};


document.querySelector('.btn-roll').addEventListener('click', function () {
if(gamePlaying){
    //generate random number
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    console.log(dice1)
    console.log(dice2)
    
        //display the result
        document.getElementById('dice-1').style.display ='block';
        document.getElementById('dice-2').style.display ='block';
        document.getElementById('dice-1').src = 'dice-' + dice1 +'.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 +'.png';

    
    
        //if number is 1, reset current to zero and move to the next player
        if((dice1 === 6 && lastDice === 6) || (dice2 === 6 && lastDice === 6)){
            //player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if(dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player
            nextPlayer();
        }

        lastDice = dice1;

}

});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScore;
    
        //update the ui
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        var input = document.querySelector('.final-score').value;
        console.log(input);
        var winningScore;

        //coercion - undefined, 0, null, or ": are COERCED to false.
        // 'hello', 1,true,{},[],(),function(){}; are true
        if(input){
            var winningScore = input;
        } else {
            winningScore = 100;
        }

        //check if player won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' +activePlayer +'-panel').classList.remove('active');
    
            //hide dice
            document.getElementById('dice-1').style.display ='none';
            document.getElementById('dice-2').style.display ='none';
    
            //disable ui if player wins
            gamePlaying = false;
        } else {
        //next player
        nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);










/**
 * YOUR 3 CHALLENGES
 * 
 * 1. A player loses his ENTIRE score when he rolls two 6 in a row.
 *  After that, it's the next player's turn. 
 * (Hint: Always save the previous dice roll in a seperate variable)
 * 
 * 2. Add an input field to the HTML where players can set the winning
 * score, so that they can change the predefined score of 100. 
 * (Hint: you can read that value with the .value property in javascript)
 * This is a good opportunity to use google to figure this out :)
 * 
 * 3.Add another dice to the game, so that there are two dices now.
 * The player loses his current score when one of them is a 1. 
 * (Hint : you will need CSS to position the second dice, so take a 
 * look at the  CSS code for the first one.)
 */
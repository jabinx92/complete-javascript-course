/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var score1 = 0;
// var score2 = 0;

var scores, roundScore, activePlayer, gamePlaying, previousRoll;

init();


function init() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

document.querySelector('.dice').style.display = 'none';

document.getElementById('current-0').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1'; 
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

};



document.querySelector('.dice').style.display = 'none';

//Button click
document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying) {

        //1. Random number
        // var dice = Math.floor(Math.random() * 6) + 1;
        var dice = 6;
    
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        
        
        //3. Update the round score IF the rolled number was NOT a 1
        if(dice !== 1 ) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else{
            //nextPlayer
            nextPlayer();
        }
        
        if(dice === 6 && previousRoll === undefined){
            previousRoll = 6;
        } else if (dice === 6 && previousRoll === 6) {
            roundScore = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
            previousRoll = undefined;
            // document.querySelector('.player-0-panel').classList.toggle('active');
            // document.querySelector('.player-1-panel').classList.toggle('active');
        }
    }
})

//Button hold
document.querySelector('.btn-hold').addEventListener('click', function (){
    if(gamePlaying){
        //add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
    
        //Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        //check if player won the game
        if(scores[activePlayer] >= 20) {
            document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
    
        } else {
            //Next Player
            nextPlayer();
        }
    }


});

function nextPlayer () {
    //next player
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;
    
    //changes current players number on html to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //lets user know the player is being switched, known by grey highlights and red dot
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

/**
 * YOUR 3 CHALLENGES
 * 
 * 1. A player looses his ENTIRE score when he rolls two 6 in a row.
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
cont = 0;
letra = "X";
currPlayer = 1;


player1Selections = new Array(); 
player2Selections = new Array(); 
winnerConditions = new Array(); 

loadAnswers();

/**
 *
 * Set "X" or "O" depending on which user is currently playing. Also, call other mothods in order to "manage" de game.
 *
 * */
function setLetra(celula){
	
	posicao = document.getElementById(celula).innerHTML;
		
	if(posicao == "X" || posicao == "O"){
		alert("Ops..... This space has already been chosen, please choose other one!!!");
	} else {
		cont++;
		document.getElementById(celula).innerHTML = letra;         
        addMove(currPlayer, celula);
        var check = checkWinner(currPlayer);
		if(check){
			restart();
		}else if(cont == 9){
				alert("Ixiiii... It was a draw! Play again!!!");
				restart();
		}		
		letra = letra == "X" ? "O" : "X";
		document.getElementById("lblTurn").innerHTML = letra;
		currPlayer = currPlayer == 1 ? 2 : 1;	
		
	}
}	

/**
 * This method sets an empty string to all cells in the table.
 *
 * */
function restart() {
    for (i = 1; i <= 9; i++) {
        document.getElementById("cel"+i).innerHTML = "";
    }
    player1Selections = new Array();
    player2Selections = new Array(); 
	cont = 0;
}

/**
 * Add the movement by the player to its respective array.
 *
 * */
function addMove(id, cel){
    cel = cel.replace(/[A-Za-z$-]/g, "");
    intCel = parseInt(cel);
    if (id == 1) {
        player1Selections.push(intCel);
    } else {
        player2Selections.push(intCel);
    }
    //alert(intCel);
} 

/**
 * Load all the possible "win situations" to winnerConditions array.
 *
 * */
function loadAnswers(){
    winnerConditions.push([1, 2, 3]);
    winnerConditions.push([4, 5, 6]);
    winnerConditions.push([7, 8, 9]);
    winnerConditions.push([1, 4, 7]);
    winnerConditions.push([2, 5, 8]);
    winnerConditions.push([3, 6, 9]);
    winnerConditions.push([1, 5, 9]);
    winnerConditions.push([3, 5, 7]);
}

/**
 * Check whether the movement made the player a winner or not.
 * The logic for this method was based on this link -> http://www.thatsoftwaredude.com/content/6189/coding-tic-tac-toe-in-javascript 
 *
 * */
function checkWinner(player) {
    // check if current player has a winning hand
    // only stsrt checking when player x has size number of selections
    var win = false;
    var playerSelections = new Array();

    if (player == 1)
        playerSelections = player1Selections;
    else
	    playerSelections = player2Selections;
    
    if (playerSelections.length >= 3) {
        // check if any 'winnerConditions' are also in your selections
        
        for (i = 0; i < winnerConditions.length; i++) {
            var sets = winnerConditions[i];  // winning hand
            var setFound = true;
            
            for (r = 0; r < sets.length; r++) {
                // check if number is in current players hand
                // if not, break, not winner
                var found = false;
                
                // players hand
                for (s = 0; s < playerSelections.length; s++) {
                    if (sets[r] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                }

                // value not found in players hand
                // not a valid set, move on
                if (found == false) {
                    setFound = false;
                    break;
                }
            }

            if (setFound == true) {
                win = true;
                alert("Winner!! Congratulations Player " + player);
				break;
            }
        }
    }

    return win;
}

/*
 *
 *  A logica esta sendo baseada nesse link -> http://www.thatsoftwaredude.com/content/6189/coding-tic-tac-toe-in-javascript
 *
 * */

letra = "X";

player1Selections = new Array(); // w ==  working
player2Selections = new Array(); // w
winnerConditions = new Array(); // w

loadAnswers();

function setLetra(celula){
	
	posicao = document.getElementById(celula).innerHTML;
	
	if(posicao == "X" || posicao == "O"){
		alert("Ops..... Esse lugar já está marcado, escolha outro !!!");
	} else {
		document.getElementById(celula).innerHTML = letra;
        currPlayer = 1;
        if (posicao == "O")
            currPlayer = 2;
        addMove(currPlayer, celula);
        checkWinner(currPlayer);
		letra = letra == "X" ? "O" : "X";
	}
}	

function restart() {
    for (i = 1; i <= 9; i++) {
        document.getElementById("cel"+i).innerHTML = "";
    }
    player1Selections = new Array();
    player2Selections = new Array(); 
}

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

// w
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
                alert("Winner!!");
                break;
            }
        }
    }

    return win;
}

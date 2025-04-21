var location1= 3;
var location2= 4;
var location3= 5;


var guess;
var hits =0;
var guesses = 0;

var isSunk = false;

// Game Logic // 

while (isSunk == false) {
    guess = prompt ("ready!,  aim!, fire! (enter number0=0)");

    if (guess <  guess <6) {
        alert("please enter a valid cell number");
    } else {
        guesses = guesses + 1
        
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1
            alert("Hits!")
            if (hits ==3){ 
                isSunk= true;
                alert ("you sank my battleship")
            }
        }else {
            alert("Miss!")
        }
    }
}
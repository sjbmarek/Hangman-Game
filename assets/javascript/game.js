
// Declare variables

// Create array of target words
var targetWords = ["yoga", "samadhi", "asana", "namaste", "practice"]
var unknownWord = []
var usedLetters = []
var wordLength
var present = false

// Randomly select a target word from the array
var selectedWord = targetWords[Math.floor(Math.random() * targetWords.length)];
console.log (selectedWord)

// Start on any key pressed.

// Show the blank spaces of the target word as an unknown array
for (i=0;i<selectedWord.length;i++) {
	unknownWord.push(" _ ");
	console.log(unknownWord);
}
  var html=
  	  "<p>Guess a letter: </p>" +
      "<p>Unknown Word:   " + unknownWord + "</p>";
      document.querySelector("#game").innerHTML = html;

// Guess a letter, collect the letter in event on keyup
document.onkeyup = function(event) {
      var userGuess = event.key;
      console.log (userGuess);
      alert("You guessed: " + userGuess);
      present=false;
  

// Loop through the letters of the target word.
	for (i=0;i<selectedWord.length;i++){
// Compare the letter selected to each letter of the target word.
// If its a match,define the letter in the unknown array at position i
		if (userGuess===selectedWord.charAt(i)){
// Present indicates if there was ANY match.
			present=true
			
			unknownWord[i] = userGuess; 
// Update the unknown array - display
			var html=
  	  		"<p>Guess a letter: </p>" +
      		"<p>Unknown Word:   " + unknownWord + "</p>";
      		document.querySelector("#game").innerHTML = html;

		}
	}
	
	
// If not a match to any index value, push the letter to the used letter array
		if (present=false){
			usedLetters.push(userGuess);
			console.log(usedLetters);
// Update the used letter array - display
			var html=
  	  		"<p>Guess a letter: </p>" +
      		"<p>Unknown Word: " + unknownWord + "</p>"+
      		"<p>Used Letters: " + usedLetters + "</p>";
      		document.querySelector("#game").innerHTML = html;

		}
	
	console.log(i)
	console.log(unknownWord)
	
	

// If all letters are not _ then winner and display related target word info.

// Select next target word, reset blank spaces, reset used letter array
// This is end of event loop.
}
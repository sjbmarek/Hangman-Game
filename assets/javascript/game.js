
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

// Initial set up, show the blank spaces of the target word as an unknown array
for (i=0;i<selectedWord.length;i++) {
	unknownWord.push(" _ ");
	console.log(unknownWord);
}
  var html=
  	  "<p>Guess a letter: </p>" +
      "<p>Unknown Word:   " + unknownWord.join(" ") + "</p>";
      document.querySelector("#game").innerHTML = html;

// Guess a letter, collect the letter in event on keyup
document.onkeyup = function(event) {
      var userGuess = event.key;
      console.log (userGuess);
      alert("You guessed: " + userGuess);
      present=false;
      finish=true;
      console.log(present);
  

// Loop through the letters of the target word.
	for (i=0;i<selectedWord.length;i++){
// Compare the letter selected to each letter of the target word.
// If its a match,define the letter in the unknown array at position i
		if (userGuess===selectedWord.charAt(i)){
// Present indicates if there was ANY match.
			present=true;
			console.log(present);
			
			unknownWord[i] = userGuess; 
// Update the unknown array - display
			var html=
  	  		"<p>Guess a letter: </p>" +
      		"<p>Unknown Word:   " + unknownWord.join(" ") + "</p>" +
      		"<p>Used Letters: " + usedLetters.join(" ") + "</p>";
      		document.querySelector("#game").innerHTML = html;

		}
	}
	
	
// If not a match to any index value, push the letter to the used letter array
		if 	(!present){

			usedLetters.push(userGuess.toUpperCase());
			console.log(usedLetters);
// Update the used letter array - display
			var html=
  	  		"<p>Guess a letter: </p>" +
      		"<p>Unknown Word: " + unknownWord.join(" ") + "</p>"+
      		"<p>Used Letters: " + usedLetters.join(" ") + "</p>";
      		document.querySelector("#game").innerHTML = html;

		}
// If all letters are not _ then winner and display related target word info.
	for (i=0;i<unknownWord.length;i++){
		console.log(unknownWord.length);
		console.log(unknownWord[i])
		if((unknownWord[i])===" _ "){
			finish=false;
		}
	}
		if(finish){
			var html=
  	  		"<p>Guess a letter: </p>" +
      		"<p>Unknown Word: " + unknownWord.join(" ") + "</p>"+
      		"<p>Used Letters: " + usedLetters.join(" ") + "</p>"+
      		"<h1>YES,YOU GOT IT! </h1>";
      		document.querySelector("#game").innerHTML = html;
      		// setTimeout(4000);
// Press any key to continue		

// Select next target word, reset blank spaces, reset used letter array
			usedLetters = [];
			unknownWord = [];
			selectedWord = targetWords[Math.floor(Math.random() * targetWords.length)];
console.log (selectedWord);
			for (i=0;i<selectedWord.length;i++) {
				unknownWord.push(" _ ");
				console.log(unknownWord);
			}
 			 var html=
  	  			"<p>Guess a letter: </p>" +
      			"<p>Unknown Word:   " + unknownWord.join(" ") + "</p>";
     			 document.querySelector("#game").innerHTML = html;

		}
// This is end of event loop.
}
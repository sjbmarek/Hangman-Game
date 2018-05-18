
// Declare variables

// Create array of target words
var targetWords = ["yoga", "samadhi", "asana", "namaste", "practice", "meditation"]

var targetDefined = []
targetDefined[0] = ". . . breath, meditation, and body postures are practiced for health and relaxation"
targetDefined[1] = ". . . meditative absorption where the mind becomes still and blissful"
targetDefined[2] = ". . . the physical posture within yoga practice"
targetDefined[3] = ". . . my soul honors your soul - we are one"
targetDefined[4] = ". . . engagement in yoga"
targetDefined[5] = ". . . spending time in quiet thought"

var targetImage = []
// Check relative paths to these images
targetImage[0] = "assets/images/yoga.jpg"
targetImage[1] = "assets/images/samadhi.jpg"
targetImage[2] = "assets/images/asana.jpg"
targetImage[3] = "assets/images/namaste.jpg"
targetImage[4] = "assets/images/practice.jpg"
targetImage[5] = "assets/images/meditation.jpg"


var unknownWord = []
var usedLetters = []
var wordLength
var present = false
var countGuess = 0
var wins = 0

// Randomly select a target word from the array
var selectedWord = targetWords[Math.floor(Math.random() * targetWords.length)];
console.log (selectedWord);
// Finds the index of the randomly chosen word
var idx = targetWords.indexOf(selectedWord);
console.log (idx);


// Initial set up, show the blank spaces of the target word as an unknown array
for (i=0;i<selectedWord.length;i++) {
	unknownWord.push(" _ ");
	console.log(unknownWord);
}
  var html=
      "<p>Unknown Word:   " + unknownWord.join(" ") + "</p>" +
      "<p>Used Letters (8 max): " + usedLetters.join(" ") + "</p>" +
      "<p>Successes: " + wins;
      document.querySelector("#game").innerHTML = html;

 // Get music and play as background 
 var audioElement = document.createElement("audio");
   audioElement.setAttribute("src", "assets/images/bgmusic.mp3");
   audioElement.play();



// Guess a letter, collect the letter in event on keyup
document.onkeyup = function(event) {
      var userGuess = event.key;
      console.log (userGuess);
      // alert("You selected: " + userGuess);
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
      		"<p>Unknown Word:   " + unknownWord.join(" ") + "</p>" +
      		"<p>Used Letters (8 max): " + usedLetters.join(" ") + "</p>"+
      		"<p>Successes: " + wins;
      		document.querySelector("#game").innerHTML = html;

		}
	}
	
	
// If not a match to any index value, push the letter to the used letter array
		if 	(!present){

			usedLetters.push(userGuess.toUpperCase());
			console.log(usedLetters);
			countGuess++;
// Update the used letter array - display
			var html=
      		"<p>Unknown Word: " + unknownWord.join(" ") + "</p>"+
      		"<p>Used Letters (8 max): " + usedLetters.join(" ") + "</p>" +
      		"<p>Successes: " + wins;
      		document.querySelector("#game").innerHTML = html;
      		
    
      		}

		
// If all letters are not _ then winner and display related target word info.
	for (i=0;i<unknownWord.length;i++){
		console.log(unknownWord.length);
		console.log(unknownWord[i])
		if(((unknownWord[i])===" _ ") && (countGuess<8)){
			finish=false;
		}
	}
		if(finish){
			// var html=
   //    		"<p>Unknown Word: " + unknownWord.join(" ") + "</p>"+
   //    		"<p>Used Letters (8 max): " + usedLetters.join(" ") + "</p>"+
   //    		"<p>Guesses Remaining: " + countGuess;
   //    		document.querySelector("#game").innerHTML = html;
   			if(finish && countGuess!==8) {
   				wins++;
   			}
      		

      		var extra=
      		"<p>" + targetWords[idx] + "</p>" +
      		"<p>" + targetDefined[idx] + "</p>";
      		
      		document.querySelector("#definition").innerHTML = extra;
      		var photo=
      		"<img src =" + targetImage[idx] + ">";

      		document.querySelector("#pic").innerHTML = photo;


	

// Select next target word, reset blank spaces, reset used letter array
			countGuess = 0;
			usedLetters = [];
			unknownWord = [];
			selectedWord = targetWords[Math.floor(Math.random() * targetWords.length)];
			console.log (selectedWord);
			idx = targetWords.indexOf(selectedWord);

			for (i=0;i<selectedWord.length;i++) {
				unknownWord.push(" _ ");
				console.log(unknownWord);
			}
 			 var html=
      			"<p>Unknown Word:   " + unknownWord.join(" ") + "</p>" +
     			"<p>Used Letters (8 max): " + usedLetters.join(" ") + "</p>" +
     			"<p>Successes: " + wins;
     			 document.querySelector("#game").innerHTML = html;

		}
// This is end of event loop.
}




// Modifications:  For loop could be functions.  Change html update to be a single function that is executed at 4 places.
// Add three element array with related target word information.
// That is all.
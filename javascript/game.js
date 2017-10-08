$(document).ready(function(){

var playerCounter = 0;
$("#currentscore").html("Your Number: " + playerCounter);

var wins = 0;
$("#wins").html("Wins: " + wins);
var losses = 0;
$("#losses").html("Losses: " + losses);

var jewelMax = 12;
var jewelMin = 1;
var redJewelNumber = randomNumberFromRange(jewelMin, jewelMax);
var blueJewelNumber = randomNumberFromRange(jewelMin, jewelMax);
var greenJewelNumber = randomNumberFromRange(jewelMin, jewelMax);
var yellowJewelNumber = randomNumberFromRange(jewelMin, jewelMax);

var ranNumMax = 120;
var ranNumMin = 19;
var randomNumber = randomNumberFromRange(ranNumMin, ranNumMax);


// Creates random target score number
function randomNumberFromRange(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

// Writes the  random number to the DOM
$("#randomNumber").html("Target Number: " + randomNumber);


// Reset function
function reset() {

	randomNumber = Math.floor(Math.random()*101+19);
	$("#randomNumber").html("Target Number: " + randomNumber);

	  redJewelNumber= Math.floor(Math.random()*11+1);
      blueJewelNumber= Math.floor(Math.random()*11+1);
      greenJewelNumber= Math.floor(Math.random()*11+1);
      yellowJewelNumber= Math.floor(Math.random()*11+1);
}


// Red Jewell on Click functionality
$("#redjewel").on("click touch", function() {
	playerCounter = playerCounter + redJewelNumber;
	$("#currentscore").html("Your Number: " + playerCounter);

			if (playerCounter === randomNumber){
				wins ++;
				$("#wins").html("Wins: " + wins);

				playerCounter = 0;
				$("#currentscore").html("Your Number: " + playerCounter);	

				$("#randomNumber").html(randomNumber);

				reset();

			};

			if (playerCounter > randomNumber){
				losses = losses +1;
				$("#losses").html("Losses: " + losses);

				playerCounter = 0;
				$("#currentscore").html("Your Number: " + playerCounter);

				var ranNumMax = 120;
				var ranNumMin = 19;
				var NewrandomNumber = randomNumberFromRange(ranNumMin, ranNumMax);

				reset();

			};
});


// Green Jewel on Click fuctionality
$("#greenjewel").on("click touch", function() {
	playerCounter = playerCounter + greenJewelNumber;
	$("#currentscore").html("Your Number: " + playerCounter);

			if (playerCounter === randomNumber){
				wins ++;
				$("#wins").html("Wins: " + wins);

			playerCounter = 0;
				$("#currentscore").html("Your Number: " + playerCounter);	

				reset();		

			};

			if (playerCounter > randomNumber){
				losses = losses +1;
				$("#losses").html("Losses: " + losses);
				
				playerCounter = 0;
				$("#currentscore").html("Your Number: " + playerCounter);		

				reset();	
			};
});

// Yellow Jewel On Click Functionality
$("#yellowjewel").on("click touch", function() {
	playerCounter = playerCounter + yellowJewelNumber;
	$("#currentscore").html("Your Number: " + playerCounter);

			if (playerCounter === randomNumber){
				wins ++;
				$("#wins").html("Wins: " + wins);

				playerCounter = 0;
				$("#currentscore").html("Your Number: " + playerCounter);	

				reset();	

			};

			if (playerCounter > randomNumber){
				losses = losses +1;
				$("#losses").html("Losses: " + losses);
				
				playerCounter = 0;
				$("#currentscore").html("Your Number: " + playerCounter);		

				reset();	
			};
});

// Blue Jewell On Click Functionality
$("#bluejewel").on("click touch", function() {
	playerCounter = playerCounter + blueJewelNumber;
	$("#currentscore").html("Your Number: " + playerCounter);

			if (playerCounter === randomNumber){
				wins ++;
				$("#wins").html("Wins: " + wins);

				playerCounter = 0;
				$("#currentscore").html("Your Number: " + playerCounter);	

				reset();		
			};

			if (playerCounter > randomNumber){
				losses = losses +1;
				$("#losses").html("Losses: " + losses);
			
				playerCounter = 0;
				$("#currentscore").html("Your Number: " + playerCounter);

				reset();
			
			};
});


});





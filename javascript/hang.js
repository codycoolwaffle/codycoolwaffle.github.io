//Declaring variables
var words = ["pancake", "waffle", "narwhal", "phone", "laptop", "eye", "puppy", "unicorn", "blanket", "triggered", "beagle", "collie", "controller", "beanie", "java", "fez", "sticky", "sucky", "touch", "collar", "scratch", "mouse", "pokemon", "minecraft", "terraria", "mario"];
var word = "";
var remainingLetters = 0;
var remainingGuesses = 6;
var answerArray = [];
var returnButt = get("#refresh").innerHTML;
var failing = [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"],
		[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
		""];

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////                                                   ////
////     D I S A B L E   M E   A F T E R   1/25/16     ////
////                                                   ////
/*////////////////*/var showOff = false;/*////////////////*/
///////////////////////////////////////////////////////////

if(showOff)
	words = ["pancake", "waffle", "phone", "laptop", "controller", "apple", "android", "svcte", "javascript", "save me"];//Please don't sue me












setupGame();

//Main loop
get("#hangHim!").onclick = function()
{
	get("#out").innerHTML = "";
	//Asking the player if they want to continue
	var guess = get("#guess").value.toLowerCase();

	//If the guess doesn't return anything, ends code
	if(guess === null)
		return;
	//If the guess returns a string that isn't a single letter, tells player to fix it
	else if(guess.length !== 1)
		get("#out").innerHTML = "Please enter a single letter.";
	//If guess is valid, determines it
	else
	{
		var temp = remainingLetters;
		//Runs for each letter in the word
		for(var i = 0; i < word.length; i++)
		{
			//If the guess matches the current letter, answer array is updated and the remaining letters is reduced by 1
			if(word[i] === guess)
			{
				answerArray[i] = guess;
				remainingLetters--;
			}
		}

		if(remainingLetters == temp)
		{
			get("#hm" + remainingGuesses).setAttribute("fill", "#000");
			get("#hm" + remainingGuesses).setAttribute("stroke", "#000");
			remainingGuesses--;
		}
	}

	//Telling the player their progress
	get("#word").innerHTML = answerArray.join(" ");

	get("#guess").value = "";
	testEnd();
}

//When game is finished, tells the player their progress, and the correct word
function testEnd()
{
	if(remainingLetters == 0)
	{
		get("#out").innerHTML = "Good job! Play again?";
		makeReturnVis();
	}
	else if(remainingGuesses == 0)
	{
		get("#out").innerHTML = "Too bad. The answer was " + word;
		makeReturnVis();
	}
}

function failure(fail)
{
	
}


function setupGame()
{
	remainingGuesses = 6;
	word = words[Math.floor(Math.random() * words.length)];
	makeReturnInvis();
	answerArray = [];
	remainingLetters = word.length;
	
	for(var i = 0; i < word.length; i++)
	{
		if(word[i]==" ")
		{
			answerArray[i] = word[i];
			remainingLetters--;
		}
		else
			answerArray[i] = "_";
	}
	
	get("#word").innerHTML = answerArray.join(" ");
	get("#refresh").onclick = setupGame;
}

function makeReturnInvis()
{
	get("#refresh").innerHTML = "";
	get("#out").innerHTML = "";
	get("#FAILURE").innerHTML = "";
}

function makeReturnVis()
{
	get("#refresh").innerHTML = returnButt;
	get("#FAILURE").innerHTML = "";
}

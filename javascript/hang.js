//Declaring variables
var words = ["pancake", "waffle", "narwhal", "phone", "laptop", "eye", "puppy", "unicorn", "blanket", "triggered", "beagle", "collie", "controller", "beanie", "java", "fez", "sticky", "sucky", "touch", "collar", "scratch", "mouse", "pokemon", "minecraft", "terraria", "mario"];
var word = "";
var remainingLetters;
var remainingGuesses;
var answerArray;

setupGame();

get("#refresh").onclick = setupGame();

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

function setupGame()
{
	//Setting up the answer array
    answerArray = [];
    for(var i = 0; i < word.length; i++)
    	answerArray[i] = "_";
    get("#word").innerHTML = answerArray.join(" ");
    remainingGuesses = 6;
	remainingLetters = word.length;
	word = words[Math.floor(Math.random() * words.length)];
	makeReturnInvis();
}

var returnButt = get("#refresh").innerHTML;
function makeReturnInvis()
{
	get("#refresh").innerHTML = "";
}

function makeReturnVis()
{
	get("#refresh").innerHTML = returnButt;
}
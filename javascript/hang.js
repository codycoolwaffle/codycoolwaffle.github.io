//Declaring variables
var words = ["pancake", "waffle", "narwhal", "phone", "laptop", "eye", "puppy", "unicorn", "blanket", "triggered", "beagle", "collie", "controller", "beanie", "java", "fez", "sticky", "sucky", "touch", "collar", "scratch", "mouse", "pokemon", "minecraft", "terraria", "mario"];
var word = "";
var running = false;
var remainingLetters = 0;
var remainingGuesses = 6;
var answerArray = [];
var returnButt = get("#refresh").innerHTML;
var failing = [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"],
		[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
		""];


setupGame();

//Main loop
get("#hangHim!").onclick = hang;
get("body")[0].onkeypress = function(event)
{
	if(event.keyCode == 13 && !running)
		setupGame();
	else if(event.keyCode-97 >= 0 && event.keyCode-97 < 26)
		hang(event.keyCode-97);
}

function hang(key)
{
	get("#out").innerHTML = "";
	//Asking the player if they want to continue
	key = key.toLowerCase();
	var guess = failing[0][key];

	//If the guess doesn't return anything, ends code
	if(!running)
		return;
	//If the guess returns a string that isn't a single letter, tells player to fix it
	else if(failing[1][key]==true)
		get("#out").innerHTML = "Please enter a new letter";
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
		failing[1][key] = true;
		
		var point = 0;
		failing[2] = [];
		for(var i = 0; i < 26; i++)
		{
			if(failing[1][i] == true)
			{
				failing[2][point] = failing[0][i];
				point++;
			}
		}
		get("#FAILURE").innerHTML = failing[2].join("\t");
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

function makeFailure(str="", num=0)
{
	
	if (num == 26)
		return str;
	else
	{
		var out = "";
		if(failing[1][num]==true)
			out = failing[0][num];
		return makeFailure(str+out, ++num);
	}
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
	
	for(var i = 1; i <= 6; i++)
	{
		get("#hm" + i).setAttribute("fill", "none");
		get("#hm" + i).setAttribute("stroke", "none");
	}
	running = true;
	for(var i = 0; i < 26; i++)
		failing[1][i] = false;
	failing[2] = [];
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
	running = false;
}

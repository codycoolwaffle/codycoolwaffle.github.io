var keys = [];


function isOffScreen(entity, w, h)
{
	var out = false;
	r = entity.getAttribute("r")-0;

	if(entity.getAttribute("cx") <= r)
	{
		entity.setAttribute("cx", r);
		out = true;
	}
	else if(entity.getAttribute("cx") >= w-r)
	{
		entity.setAttribute("cx", w-r);
		out = true;
	}

	if(entity.getAttribute("cy") <= r)
	{
		entity.setAttribute("cy", r);
		out = true;
	}
	else if(entity.getAttribute("cy") >= h-r)
	{
		entity.setAttribute("cy", h-r);
		out = true;
	}

	return out;
}

function alart(thing)
{
	console.log(thing);
}

function get (which) {
  if (which[0] === "#")
    return document.getElementById(which.substr(1));
  else if (which[0] === ".")
    return document.getElementsByClassName(which.substr(1));
  else
    return document.getElementsByTagName(which);
}

function shuffle(array)
{
    var counter = array.length;

    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function toRadians(degs)
{
	return Math.PI*degs/180;
}

// noinspection InfiniteRecursionJS
function keynitiate(tag, fps)
{
	get(tag)[0].onkeydown = function(event)
	{
		keys[event.keyCode] = true;
	};

	get(tag)[0].onkeyup = function(event)
	{
    	keys[event.keyCode] = false;
    };

    setTimeout(keynitiate(tag, fps), fps);
}

function returnKey(key)
{
	return keys[key];
}

function print()
{
	var g = arguments[0];
	for (var i = 1; i < arguments.length; i++)
	{
		g = g.replace("%s", arguments[i]);
	}
	return g;
}

var logElement;
function setupLog(element)
{
	logElement = element;
}
function log(s, bool)
{
	if(logElement == null)
	{
		console.log(s);
		return;
	}
	if(bool === true)
		logElement.innerHTML += s + "\n";
	else
		logElement.innerHTML += s;
}
function clearLog()
{
	logElement = null;
}

var logOut = "";
function buildLog(s, bool)
{
	if(bool === true)
		logOut += s + "\n";
	else
		logOut += s;
}

function printLog(bool)
{
	log(logOut, bool);
	logOut = "";
}

function makeTable(content, width, length)
{
	buildLog("<table align='center'>", true);
	for(var y = 0; y < length; y++)
	{
		buildLog("<tr>", true);
		for(var x = 0; x < width; x++)
		{
			if(content[(y*width)+x] != null)
				buildLog("<td>" + content[(y*width)+x] + "</td>", true);
			else
				buildLog("<td></td>", true);
		}
		buildLog("</tr>", true);
	}
	buildLog("</table>", true);
	printLog(true);
}

function random(s)
{
    return s[Math.floor(Math.random() * s.length)];
}

function randomColour()
{
    var s = '0123456789abcdef';
    return '#'
            + random(s)
            + random(s)
            + random(s)
            + random(s)
            + random(s)
            + random(s);
}

function capitalize(word)
{
	return word[0].toUpperCase() + word.substr(1);
}

function randomWithMinMax(min, max)
{
	return (Math.random()*(max-min))+min;
}

function randomIntWithMinMax(min, max)
{
	return Math.floor((Math.random()*max)+min);
}
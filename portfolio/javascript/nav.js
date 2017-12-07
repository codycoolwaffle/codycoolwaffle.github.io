var pages = ["index.html", "speedometer/guage.html", "Basketball2D.html", "chocolate.html", "tictactoes/tictactoes.html", "fortune.html", "BenzeneRing.html", "maze.html", "colour!.html", "snowy.html", "icons/icons.svg.html", "resume/resume.html"];
var leftIcon = "navigacons/black-arrow-left.png";
var rightIcon = "navigacons/black-arrow-right.png";
var homeIcon = "navigacons/black-home.png";
var nav = "#nav";

function addToNav(id, icon)
{
	"use strict";
	//STYLING IN HERE IS EASIER, ONLY ONE IMPORT USED
	get(nav).innerHTML += "<a href='" + pages[id] + "' style='margin-left: 30px; margin-right: 30px'><img src='" + icon + "' style='background-color: #FC7D5B; height: 100px; width: 100px;'/></a>";
}

function drawLeft(i)
{
	"use strict";
	i = testI(i);
	addToNav(i, leftIcon);
}

function drawHome()
{
	"use strict";
	addToNav(0, homeIcon);
}

function drawRight(i)
{
	"use strict";
	i = testI(i);
	addToNav(i, rightIcon);
}

function getPage()
{
	"use strict";
	var url = document.location.href;
	for(var i = 0; i < pages.length; i++)
	{
		if(url.indexOf(pages[i]) > -1)
		{
			return i;
		}
	}
	return -10;
}

function testI(i)
{
	"use strict";
	if(i === 0)
	{
		i = pages.length-1;
	}
	else if(i === pages.length)
	{
		i = 1;
	}
	return i;
}

function inFolder(page)
{
	"use strict";
	if(pages[page].indexOf("/") > 0)
	{
		for(var i = 0; i < pages.length; i++)
		{
			pages[i] = "../" + pages[i];
		}
		leftIcon = "../" + leftIcon;
		rightIcon = "../" + rightIcon;
		homeIcon = "../" + homeIcon;
	}
}

drawNav();
function drawNav()
{
	"use strict";
	var page = getPage();
	inFolder(page);
	drawLeft(page-1);
	drawHome();
	drawRight(page+1);
}
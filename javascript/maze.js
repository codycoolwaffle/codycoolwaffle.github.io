var w = get("svg")[0].getAttribute("width");
var h = get("svg")[0].getAttribute("height");
var player = get("#touchy");
var trumped = get("#trumpThatB****");
var cx = parseFloat(player.getAttribute("cx"));
var cy = parseFloat(player.getAttribute("cy"));
var directions = [[-1, 0], [0, -1], [1, 0], [0, 1], [-1, 1], [-1, -1], [1, -1], [1, 1]];
var whichDirection = 0;
var fps = 3;
var timeout = 16.6666666666667;
//var walls = [[0, 75, 550, 75], [100, 200, 600, 200]];
var walls = [[0, 80, 467, 80], [133, 160, 600, 160], [0, 240, 467, 240], [133, 320, 600, 320]];

for(var i = 0; i < walls.length; i++)
{
	drawTheWall(walls[i]);
}

function drawTheWall(wall)
{
	trumped.innerHTML += print("<polyline points='%s %s %s %s' fill='none' stroke='#B6EF75' stroke-width='3' />\n", wall[0], wall[1], wall[2], wall[3]);
}

anime();
function anime()
{
	cx += directions[whichDirection][0] * fps;
	cy += directions[whichDirection][1] * fps;
	player.setAttribute("cx", cx);
	player.setAttribute("cy", cy);

	move();

	if(isOffScreen(player, w, h) || isTouchingWalls())
		return;
	setTimeout(anime, timeout);
}
keynitiate("body", timeout);

function move()
{
	if(returnKey(37) && !returnKey(38) && !returnKey(39) && !returnKey(40))
		whichDirection = 0;
	if(!returnKey(37) && returnKey(38) && !returnKey(39) && !returnKey(40))
		whichDirection = 1;
	if(!returnKey(37) && !returnKey(38) && returnKey(39) && !returnKey(40))
		whichDirection = 2;
	if(!returnKey(37) && !returnKey(38) && !returnKey(39) && returnKey(40))
		whichDirection = 3;
	if(returnKey(37) && !returnKey(38) && !returnKey(39) && returnKey(40))
		whichDirection = 4;
	if(returnKey(37) && returnKey(38) && !returnKey(39) && !returnKey(40))
		whichDirection = 5;
	if(!returnKey(37) && returnKey(38) && returnKey(39) && !returnKey(40))
		whichDirection = 6;
	if(!returnKey(37) && !returnKey(38) && returnKey(39) && returnKey(40))
		whichDirection = 7;
}

function isTouchingWalls()
{
	for(var i = 0; i < walls.length; i++)
	{
		if(wasWallHit(walls[i]))
			return true;
	}
	return false;
}

function wasWallHit(wall)
{
	return cx <= wall[2] + parseFloat(player.getAttribute("r")) && cx >= wall[0] - parseFloat(player.getAttribute("r")) && Math.abs(cy - wall[1]) <= parseFloat(player.getAttribute("r"));


}
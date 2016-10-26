var current = 75;
var target;
var mySound = new Audio('audio/THAT.mp3');

function setNeedle(n)
{
	var trans = n - 60;
	document.getElementById("needle").setAttribute("transform", "rotate(" + trans + " 300 350)");
	current = n;
}

setNeedle(75);

document.getElementById("doit").onclick = function(e)
{
	var n = Math.floor(Math.random() * 120);
	target = n;
	animate();
}

function animate()
{
	if(current > target)
		setNeedle(current-1);
	else if(current < target)
		setNeedle(current+1);
	else
	{
		mySound.play();
		return;
	}
	setTimeout(animate, 60);
}
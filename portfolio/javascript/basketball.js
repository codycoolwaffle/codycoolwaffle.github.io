//Declaring variables
var moveBall = [document.getElementById('bb1'), document.getElementById('bb2')];
var gradientBall = [document.getElementById('gradientBall'), document.getElementById('gradientBall2')];
var x = [0, 300];
var rotation = [0, 0];
var velocityX = [5, 3];
var y = [0, 400];
var velocityY = [3, 5];
var velocity = [Math.sqrt((velocityX[0]*velocityX[0])+(velocityY[0]*velocityY[0])), Math.sqrt((velocityX[1]*velocityX[1])+(velocityY[1]*velocityY[1]))];
var rotVelocity = [velocity[0] * 360/314, velocity[1] * 360/314];
var speed = 1;

//Calling main loop
animate();

//Declaring main loop function
function animate()
{
	for(var i = 0; i < 2; i++)
	{
		move();
		//Testing if balls are touching edge
		if(x[i] > 650)
		{
			invertX(i);
			x[i] = 650;
		}
		if(x[i] < -50)
		{
			invertX(i);
			x[i] = -50;
		}
		if(y[i] > 450)
		{
			invertY(i);
			y[i] = 450;
		}
		if(y[i] < -50)
		{
			invertY(i);
			y[i] = -50;
		}
		
	}
	ballBounce();
	//Telling Javascript how much milliseconds to wait before repeating loop
	setTimeout(animate, 16.6666666667);
}

function invertX(i)
{
	//Making balls go backwards
	velocityX[i] = -velocityX[i];
	rotVelocity[i] = -rotVelocity[i];
}

function invertY(i)
{
	//Making balls go backwards
	velocityY[i] = -velocityY[i];
	rotVelocity[i] = -rotVelocity[i];
}

//Declaring accelerate button function
document.getElementById('faster').onclick = function(e)
{
	speed *= 1.25;
}

//Declaring decelerate button function
document.getElementById('slower').onclick = function(e)
{
	speed *= 0.75;
}

//Function for making balls bounce off each other
function ballBounce()
{
	
	var dx = x[0]-x[1];
	var dy = y[0]-y[1];
	var dist = Math.sqrt((dx*dx)+(dy*dy));
	
	if(dist <= 100)
	{
		console.log("Colision!");
		velocityX = [dx/(dist/velocity[0]), -dx/(dist/velocity[0])];
		velocityY = [dy/(dist/velocity[0]), -dy/(dist/velocity[0])];
		
		move();
	}
	
	//var square = document.getElementById('square');
	//var x = (5.83095189485*Math.cos((toRadians(0))+(2*Math.PI)));
	//var y = (-5.83095189485*Math.sin((toRadians(0))+(2*Math.PI)));
	//square.setAttribute('transform', 'translate(' + x + ' ' + y + ')');
}

function move()
{
	
	for(var i = 0; i < 2; i++)
		{
			//Increasing the movement variables
			x[i] += velocityX[i]*speed;
			y[i] += velocityY[i]*speed;
			rotation[i] += rotVelocity[i]*speed;

			//Moving and rotating the balls
			moveBall[i].setAttribute('transform', 'translate(' + x[i] + ' ' + y[i] + ') rotate(' + rotation[i] + ' 100 100)');
			gradientBall[i].setAttribute('transform', 'translate(' + x[i] + ' ' + y[i] + ')');
		}
	
}

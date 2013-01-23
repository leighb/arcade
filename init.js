window.onload = function()
{
	//general variables
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var W = 600, H = 400;
	canvas.width = W;
	canvas.height = H;

	var fps = 33;

	var starCount = 100;
	this.starSpeedQuotient = 0;

	var particleCount = 100;

	var shipRotation = 0;
	var shipXScale = 1;

	//setup keypress
	this.keyUp = false,
  this.keyDown  = false,
  this.keyLeft  = false,
  this.keyRight = false;	

	//create all the things
	var ourInput = new input();
	this.ourBG = new background();
	this.ourShip = new ship(shipRotation,shipXScale);
	this.ourStars = new stars(starCount);
	this.ourParticles = new particles(particleCount);

	function loop()
	{
		draw(ctx);
		mover();
  };

  setInterval(loop, fps);		

};
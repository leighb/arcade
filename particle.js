var particle = function()
{
	//speed, life, location
	//speed range = -2.5 to 2.5
	this.vx = -2 + Math.random()*4;
	this.vy = -15 + Math.random()*10;

	// radius range 10 to 30
	this.radius = 15 + Math.random()*10;

	//location
	this.x = ourShip.x - this.radius/2;
	this.y = ourShip.y - this.radius/2 + 30;
	
	// life range 20 to 30
	this.life = 1+Math.random()*10;
	this.remaining_life = this.life;

	// colours
	this.r = Math.round(255);
	this.g = Math.round(Math.random()*255);
	this.b = Math.round(Math.random()*255);

};

particle.prototype.draw = function() {
	// body...
};

particle.prototype.move = function() {
	// body...
};
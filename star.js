var star = function(randomizeY)
{
	this.x = Math.random()*canvas.width;
	this.y = randomizeY ? Math.random()*canvas.height : 0;
	this.opacity = Math.random();
	this.size = Math.random() + 0.2;
	this.speed = 3 + Math.random() * 2;
};

star.prototype.draw = function(ctx)
{
	ctx.fillStyle = "rgba(255,255,255,"+this.opacity+")";
	ctx.fillRect(this.x, this.y, this.size*4, this.size*4);
};

star.prototype.move = function(newSpeed)
{
	//calculate star speed
	this.y += this.speed * newSpeed; 
	// regenerate lost stars
	if(this.y > canvas.height) {
		return true;
	}	
};
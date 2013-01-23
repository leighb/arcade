var stars = function(starCount)
{
	this.starsArray = [];
	for(var i = 0; i < starCount; i++) 
	{
		this.starsArray.push(new star(true));
	}

};

stars.prototype.draw = function(ctx)
{
	for(var i = 0; i < this.starsArray.length; i++) {
		this.starsArray[i].draw(ctx);
	}
};

stars.prototype.move = function()
{
	var oldRange = (8 - -8);  
	var newRange = (5 - 1);  
	var newSpeed = (((-starSpeedQuotient - -8) * newRange) / oldRange) + 1;

	for(var i = 0; i < this.starsArray.length; i++) {
			var dead = this.starsArray[i].move(newSpeed);
			if(dead)
				this.starsArray[i] = new star();
	}
};


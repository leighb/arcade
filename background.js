var background = function()
{

}

background.prototype.draw = function(ctx)
{
	ctx.globalCompositeOperation ="source-over";
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
};
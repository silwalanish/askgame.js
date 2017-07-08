class Renderer{

	constructor(color){
		this.color = color || "#fff";
	}

	draw(ctx){
		var transform = this.parent;
		var angle = this.parent.body.GetAngle();

		// Save the context
		ctx.save();

		// Translate and rotate
		ctx.translate(transform.Pos.x, transform.Pos.y);
		ctx.rotate(angle);

		ctx.fillStyle = this.color;
		ctx.fillRect(-transform.Dims.x/2, -transform.Dims.y/2, transform.Dims.x, transform.Dims.y);

		ctx.restore();
	}

	set Color(color){
		this.color = color;
	}

	get Parent(){
		return this.parent;
	}

	set Parent(obj){
		this.parent = obj;
	}

}

class ImageRenderer extends Renderer{

	constructor(texture){
		super("rgba(255, 255, 255, 0)");
		this.texture = texture;
	}

	draw(ctx){
		var transform = this.parent;
		var angle = this.parent.body.GetAngle();
				
		this.texture.draw(ctx, transform, angle);
	}

	get Texture(){
		return this.texture;
	}

	set Texture(texture){
		this.texture = texture;
	}
}

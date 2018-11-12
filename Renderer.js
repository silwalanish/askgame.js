/*
MIT License

Copyright (c) 2017 Anish Silwal Khatri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class Renderer{

	constructor(color){
		this.color = color || "#fff";
	}

	draw(ctx){
		var transform = this.parent.Transform;
		var angle = 0;
		// Save the context
		ctx.save();

		ctx.translate(transform.Pos.x, -transform.Pos.y);
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
		var transform = this.parent.Transform;
		var angle = 0; // this.parent.body.GetAngle();
				
		this.texture.draw(ctx, transform, angle);
	}

	get Texture(){
		return this.texture;
	}

	set Texture(texture){
		this.texture = texture;
	}
}

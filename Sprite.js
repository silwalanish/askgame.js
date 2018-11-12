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

class UV{

	constructor(x, y, u, v){
		this.x = x;
		this.y = y;
		this.u = u;
		this.v = v;
	}

	set X(x){
		this.x = x;
	}

	set Y(y){
		this.y = y;
	}

	set U(u){
		this.u = u;
	}

	set V(v){
		this.v = v;
	}

	get X(){
		return this.x;
	}

	get Y(){
		return this.y;
	}

	get U(){
		return this.u;
	}

	get V(){
		return this.v;
	}

}

class Texture{
	constructor(file, uv){
		this.texture = new Image();
		this.texture.src = file;
		this.uv = uv || null;
	}

	draw(ctx, transform, angle){
		if (this.uv == null)
			this.uv = new UV(0, 0, this.texture.width, this.texture.height);
		ctx.save();
		ctx.translate(transform.Pos.x, -transform.Pos.y);
		ctx.rotate(angle);
		ctx.drawImage(this.texture, 
			this.uv.X * this.uv.U, this.uv.Y * this.uv.V, this.uv.U, this.uv.V,
			-transform.Dims.x/2, -transform.Dims.y/2, transform.Dims.x, transform.Dims.y);
		ctx.restore();
	}

	get Texture(){
		return this.texture;
	}

	set UV(uv){
		this.uv = uv;
	}

	get UV(){
		return this.uv;
	}
}
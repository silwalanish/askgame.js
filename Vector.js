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

class Vector{

	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	
	mul (f){
		this.x *= f;
		this.y *= f;
	}

	static Dot(v1, v2){
		return ((v1.X * v2.X) + (v1.Y * v2.Y));
	}

	static Add(v1, v2){
		return new Vector(v1.X + v2.X, v1.Y + v2.Y);
	}

	static Sub(v1, v2){
		return new Vector(v1.X - v2.X, v1.Y - v2.Y);
	}
	
	static ZERO(){
		return new Vector(0, 0);
	}
	
	Invert () {
		return new Vector(-this.x, -this.y);
	}
	
	static Invert (v) {
		return new Vector(-v.x, -v.y);
	}

	get X(){
		return this.x;
	}

	get Y(){
		return this.y;
	}

	set X(val){
		this.x = val;
	}

	set Y(val){
		this.y = val;
	}

}
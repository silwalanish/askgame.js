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

class Game{

	constructor(width, height){
		this.width = width;
		this.height = height;
		this.canvas = document.createElement("canvas");
		this.canvas.width = width;
		this.canvas.height = height;
		this.context = this.canvas.getContext('2d');
		Timer.Then = Timer.Now;
	}

	CreateWorld(gravity){
		this.world = new World(this, gravity);
	}

	start(){
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(function(game) { game.update(); }, 33, this);
	}

	draw(){
		this.clear();
		this.world.draw(this.context);
	}

	update(){
		var now = Timer.Now;
	    var dt = Timer.Delta / 1000;
	    if(dt > 1/15) { dt = 1/15; }
		this.world.update(dt);
		Timer.Then = now;
		this.draw();
	}

	stop(){
		clearInterval(this.interval);
	}

	AddToScene(obj){
		this.world.AddChild(obj);
	}

	clear(){
		if(!this.background){
			this.context.fillStyle = "#000";
			this.context.fillRect(0, 0, this.width, this.height);
		}else{
			this.background.draw(this.context, this.world, 0);
		}
	}

	set Background(texture){
		this.background = texture;
	}

	get World(){
		return this.world;
	}
}


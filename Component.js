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

class Component{
	constructor(){
		this.parent = null;
	}

	update(){

	}

	set Parent(obj){
		this.parent = obj;
	}

	get Parent(){
		return this.parent;
	}
}

class Animation extends Component{
	constructor(imgRenderer, startPos, endPos, trigger, repeat, fpt){
		super();
		this.imgRenderer = imgRenderer;
		this.startX = startPos.x;
		this.startY = startPos.y;
		this.currentPos = startPos;
		this.endPos = endPos;
		this.playing = false;
		this.repeat = repeat || false;
		this.trigger = trigger;
		this.tickCount = 0;
		this.framesPertick = fpt || 5;
	}

	update(){
		if(this.trigger() && this.parent.body.GetUserData().canJump){
			this.play();
		}else if(this.playing){
			this.stop();
		}
		if(this.playing){
			this.imgRenderer.Texture.UV = new UV(this.currentPos.x, this.currentPos.y, this.imgRenderer.Texture.UV.u, this.imgRenderer.Texture.UV.v);
			this.tickCount++;
			if (this.tickCount > this.framesPertick){
				this.tickCount = 0;
				this.currentPos.x++;
				if (this.currentPos.x > this.endPos.x){
					this.currentPos.x %= this.endPos.x + 1;
					this.currentPos.y++;
					if (this.currentPos.y > this.endPos.y && this.repeat){
						this.currentPos.y = this.startY;
					}else{
						this.stop();
					}
				}
			}	
		}
	}

	play(){
		this.playing = true;
	}

	pause(){
		this.playing = false;
	}

	stop(){
		this.playing = false;
		this.currentPos = new b2Vec2(this.startX, this.startY);
		this.imgRenderer.Texture.UV = new UV(this.currentPos.x, this.currentPos.y, this.imgRenderer.Texture.UV.u, this.imgRenderer.Texture.UV.v);
	}

	set Renderer(renderer){
		this.imgRenderer = renderer;
	}
}

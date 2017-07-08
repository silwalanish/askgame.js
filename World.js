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

class World extends GameObject{

	constructor(game, gravity){
		super(game);
		this.gravity = gravity || new b2Vec2(0, 9.8);
		this.world = new b2World(this.gravity, true);
		this.dtRemaining = 0;
    	this.stepAmount = 1/60;
    	this.pos = new b2Vec2(this.game.width / 2, this.game.height / 2);
    	this.dims = new b2Vec2(this.game.width, this.game.height);
    	if(DEBUG){
			this.debugDraw = new b2DebugDraw();
		    this.debugDraw.SetSprite(this.game.context);
		    this.debugDraw.SetDrawScale(1);
		    this.debugDraw.SetFillAlpha(0.3);
		    this.debugDraw.SetLineThickness(1.0);
		    this.debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
		    this.world.SetDebugDraw(this.debugDraw);
		}
	}

	CreateBody(bodyDef){
		return this.world.CreateBody(bodyDef);
	}

	update(dt){
		this.dtRemaining += dt;
	    while (this.dtRemaining > this.stepAmount) {
	        this.dtRemaining -= this.stepAmount;
	        this.world.Step(this.stepAmount,
	        10, // velocity iterations
	        10); // position iterations
	        super.update(dt);
	    }
	    if (DEBUG) {
		    this.world.DrawDebugData();
		}
	}

	draw(ctx){
		if(DEBUG)
	    	this.world.DrawDebugData();
		super.draw(ctx);
	}

	get PhysicWorld(){
		return this.world;
	}

	set Gravity(gravity){
		this.gravity = gravity;
		this.world.SetGravity(this.gravity);
	}

	get Gravity(){
		return this.gravity;
	}

	get Pos(){
		return this.pos;
	}

	get Dims(){
		return this.dims;
	}
}
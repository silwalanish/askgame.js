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

class Box extends GameObject{

	constructor(game, pos, dims, bodyType){
		super(game);

		this.dims = dims;
		this.spawnPos = pos;

		var fixDef = new b2FixtureDef;
		fixDef.friction = 0.2;

		var bodyDef = new b2BodyDef;
		bodyDef.fixedRotation = true;
		bodyDef.type = bodyType || b2Body.b2_staticBody;
		bodyDef.linearDamping = 0.8;
        bodyDef.position = this.spawnPos;

        fixDef.shape = new b2PolygonShape;
        fixDef.shape.SetAsBox(this.dims.x / 2, this.dims.y / 2);

		this.body = game.World.CreateBody(bodyDef);
		this.bodyFixture = this.body.CreateFixture(fixDef);
	}

	get Pos(){
		return this.body.GetWorldPoint(new b2Vec2(0,0));
	}

	get Dims(){
		return this.dims;
	}

}
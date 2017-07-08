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

class Controller extends Component{

	constructor(maxspeed, sensitivity, jumpForce){
		super();
		this.maxspeed = maxspeed;
		this.sensitivity = sensitivity;
		this.jumpForce = jumpForce;
		this.canJump = false;
	}

	update(delta){
		this.canJump = this.parent.body.GetUserData().canJump;
		if(Keys && Keys[37]) this.moveleft(delta);
		else if(Keys && Keys[39]) this.moveright(delta);
		if(this.canJump && Keys && Keys[38]) this.jump(delta);
	}

	moveleft(delta) {
		if (this.parent.body.GetLinearVelocity().x > -this.maxspeed){
			this.parent.body.m_linearVelocity.Add(new b2Vec2(-this.maxspeed*this.sensitivity*delta, 0));
		}
	}

	moveright(delta) {
		if (this.parent.body.GetLinearVelocity().x < this.maxspeed*this.sensitivity){
			this.parent.body.m_linearVelocity.Add(new b2Vec2(this.maxspeed*this.sensitivity*delta, 0));
		}
	}

	jump(delta) {
		if (this.canJump){
			this.parent.body.ApplyImpulse(new b2Vec2(0, -this.jumpForce*this.parent.body.GetMass()), this.parent.body.GetWorldCenter());
			this.canJump = false;
		}
	}
}

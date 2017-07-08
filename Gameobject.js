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

class GameObject{

	constructor(game){
		this.game = game;
		this.childrens = [];
		this.components = [];
		this.animations = [];
		this.parent = null;
		this.body = null;
	}

	draw(ctx){
		if(this.Renderer)
			this.Renderer.draw(ctx);
		for (let child of this.childrens){
			child.draw(ctx);
		}
	}

	update(delta){
		for (let child of this.childrens){
			child.update(delta);
		}
		for (let comp of this.components){
			comp.update(delta);
		}
		for (var anim in this.animations){
			this.animations[anim].update(delta);
		}
	}

	AddChild(child){
		child.Parent = this;
		this.childrens.push(child);
	}

	AddAnimation(name, anim){
		anim.Renderer = this.renderer;
		anim.Parent = this;
		this.animations[name] = anim;
	}

	AddComponent(child){
		child.Parent = this;
		this.components.push(child);
	}

	GetComponent(component, prop){
		for (let i=0; i < this.components.length;i++) {
			if(this.components[i].constructor.name == component)
				return this.components[i][prop];
		}	
	}

	UpdateComponent(component, prop, value){
		for (let i=0; i < this.components.length;i++) {
			if(this.components[i].constructor.name == component)
				this.components[i][prop] = value;
		}	
	}

	get Pos(){
		return this.body.GetPosition();
	}

	get Dims(){
		throw new Error("The object does not have dimensions");
	}

	set Parent(obj){
		this.parent = obj;
	}

	get Parent(){
		return this.parent;
	}

	set Renderer(render){
		this.renderer = render;
		this.renderer.Parent = this;
	}

	get Renderer(){
		return this.renderer;
	}
}
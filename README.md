# askgame.js
Simple 2D Canvas Game Engine for javascript

askgame.js is a free open source 2d game engine created with javascript
that uses canvas.

> It uses box2dweb as physics engine.

# How to use?
1. Download the scripts files.
2. Setup project

```
<-- Important! Must be in this order -->
<-- Box2dweb for physic engine -->
<script type="text/javascript" src="Box2d.min.js"></script>

<script type="text/javascript" src="Box2d.init.js"></script>

<script type="text/javascript" src="Input.js"></script>
<script type="text/javascript" src="Timer.js"></script>

<script type="text/javascript" src="Component.js"></script>
<script type="text/javascript" src="Renderer.js"></script>

<script type="text/javascript" src="Gameobject.js"></script>
<script type="text/javascript" src="World.js"></script>
<script type="text/javascript" src="Box.js"></script>
<script type="text/javascript" src="Sprite.js"></script>
<script type="text/javascript" src="Game.js"></script>
```
3. Game Demo
```
<script type="text/javascript">
	var game = new Game(800, 600);
	game.CreateWorld(new b2Vec2(0, 10));

	var ground = new Box(game, new b2Vec2(0, 550), new b2Vec2(800, 50), b2Body.b2_staticBody);
	ground.Renderer = new ImageRenderer(new Texture("StoneTexture.png"));

	var p = new Box(game, new b2Vec2(50, 50), new b2Vec2(50, 50), b2Body.b2_dynamicBody);
	p.Renderer = new ImageRenderer(new Texture("character.png"));

	game.AddToScene(ground);
	game.AddToScene(p);
	game.background = new Texture("background.png");
	game.start();
</script>
```

# askgame.js
Simple 2D Canvas Game Engine for javascript

askgame.js is a free open source 2d game engine created with javascript
that uses canvas.

# How to use?
1. Download the scripts files.
2. Setup project

```
<-- Important! Must be in this order -->
	<script type="text/javascript" src="Input.js"></script>
	<script type="text/javascript" src="Timer.js"></script>
	<script type="text/javascript" src="Vector.js"></script>

	<script type="text/javascript" src="Component.js"></script>
	<script type="text/javascript" src="Renderer.js"></script>
	<script type="text/javascript" src="Transform.js"></script>
	<script type="text/javascript" src="Controller.js"></script>

	<script type="text/javascript" src="Gameobject.js"></script>
	<script type="text/javascript" src="Sprite.js"></script>
	<script type="text/javascript" src="Game.js"></script>
```
3. Game Demo
```
<script type="text/javascript">
	var game = new Game(800, 600);

	class BasicController extends Component{
		
		update() {
			var transform = this.Parent.Transform;
			if(Input.GetKey(37)) transform.Pos.X -= 2;
			else if(Input.GetKey(39)) transform.Pos.X += 2;
			else if(Input.GetKey(38)) transform.Pos.Y += 2;
			else if(Input.GetKey(40)) transform.Pos.Y -= 2;
		}
	
	}
	
	var red = new GameObject(game);
	red.AddComponent(new BasicController());
	red.Transform = new Transform(Vector.ZERO(), new Vector(50, 50));
	red.Renderer = new Renderer("#f00");

	game.AddToScene(red);

	game.start();
</script>
```

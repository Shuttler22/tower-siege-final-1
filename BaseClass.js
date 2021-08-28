class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
            // JavaScriptObjectNotation
            'friction':1.0,
            'density':0.3,
            
        }
        this.width = width;
        this.height = height;
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x, y, width, height, options);
        
        World.add(world, this.body);
      }
      display(){
       
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y)
        rotate(angle);
        rectMode(CENTER);
        fill("cyan")
        rect(0,0 ,  this.width, this.height);
        
        
        pop();
      }
}
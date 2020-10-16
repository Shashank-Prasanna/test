class Box {

constructor(x, y, width, height) {
    var options = {
        restitution: 0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body); 
}
    
display() {
        var pos = this.body.position;
        var angle = this.body.angle; 
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        rectMode(CENTER);
        fill(255);
        rect(100,0, this.width, this.height);
        pop(); 
    }


}

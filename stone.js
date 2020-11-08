class Stone {

constructor(x,y) {
    var options ={
        isStatic: false,
        restitution: 0,
        friction: 1,
        density: 1.2
    }
    // console.log(x,y)
    this.body = Bodies.rectangle(x, y, 50,50, options);
    this.width = 50;
    this.image = loadImage("sprites/stone.png");

    World.add(world, this.body);
}
    display() {
        var pos = this.body.position;
        // push();
        //translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        //fill("grey");
        //image(pos.x,pos.y);
        // console.log("jdqkj",pos);
        // console.log("jdqkj",this.body.position);
        image(this.image,pos.x,pos.y,50,50);
        // pop();
    }
}
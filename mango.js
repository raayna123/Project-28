class Mango {

    constructor(x,y,radius) {
        var options ={
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("sprites/mango.png");
        this.radius = radius;
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        fill("lightgrey");
        //image(pos.x,pos.y,this.radius);
        //console.log("jdqkj");
        image(this.image,pos.x,pos.y,40,40);
    }

}
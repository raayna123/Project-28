class Ground{

    constructor(x,y,width,height) {
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        //this.image = loadImage("sprites/tree.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("grey");
        //console.log("sdla", pos)
        rect(pos.x,pos.y,this.width,this.height);
        //console.log("jdqkj");
        //image(this.image,550,460,200,200);
    }
}
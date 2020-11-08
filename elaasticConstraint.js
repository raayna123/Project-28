class ElasticConstraint {

    constructor(bodyA, pointB, roofOffsetX, roofOffsetY) {

        var options ={
            bodyA : bodyA,
            pointB : pointB,
            // pointB: {x: roofOffsetX, y: roofOffsetY},
            stiffness: 0.004,
            length: 5,

        }
        this.pointB = pointB;
        this.elasticConstraint = Constraint.create(options);
        World.add(world, this.elasticConstraint);
        this.roofOffsetX = 60;
        this.roofOffsetY = 40;
    }

    display() {
        //console.log("eleastic DISPLAY")
        if(this.elasticConstraint.bodyA !== null) {
            //console.log("eleastic DISPLAY ISIDE")
            var pointA = this.elasticConstraint.bodyA.position;
            var pointB = this.pointB;
            // stroke("grey")
            strokeWeight(3);
           line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly() {
        this.elasticConstraint.bodyA = null;
    }

    attach(body) {
        this.elasticConstraint.bodyA = body;
    }
}


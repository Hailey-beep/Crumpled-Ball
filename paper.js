class Paper {

    constructor() {

        var options = {isStatic:false, restitution:0.3, friction:0.5, density:1.2}

        //the position of the circle
        this.body = Bodies.circle(50,360,16);
        //The size/display of the circle
        this.radius = 70;

        this.image = loadImage("sprites/paper.png");
        
        World.add(world, this.body)
    }

    display() {

        var pos = this.body.position

        push()
        //rectMode(CENTER)
        stroke("white")
        fill("white")
        translate(pos.x, pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, 45, 45);
        //ellipse(0,0, this.radius)
        pop()
    }
}
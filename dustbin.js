class Dustbin {

    constructor(x, y, width, height, img=false) {

    this.body = Bodies.rectangle(x, y, width, height, {isStatic:true})
    this.width = width;
    this.height = height;
    this.flag = img;

    this.image = loadImage("sprites/dustbin.png")
    World.add(world, this.body)
    }

    display() {
        
        var pos = this.body.position;

        push()
        stroke("grey")
        fill("white")
        translate(pos.x, pos.y)
        rectMode()
        rect(0, 0, this.width, this.height)

        imageMode(CENTER);       

        if(this.flag) {
        image(this.image, 0, -80, 220, 180);
        }
        
        pop()
    }
}
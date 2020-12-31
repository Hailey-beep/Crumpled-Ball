class Ground {

    constructor() {

    this.body = Bodies.rectangle(600,380,1200,20, {isStatic:true})
    this.width = 1200
    this.height = 20

    World.add(world, this.body)
    }

    display() {

        var pos = this.body.position

        push()
        stroke("yellow")
        fill("yellow")
        rectMode()
        translate(pos.x, pos.y)
        rect(0, 0, this.width, this.height)
        pop()
    }
}
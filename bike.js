class Bike {
    constructor(x, y) {
        var options = {
            restitution: 0.2
        }
        this.body = Bodies.circle(x, y, 50)
        this.radius = 50;
        this.image = loadImage("images/bike.png")
        World.add(world, this.body)
    }
    display() {
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.radius * 2, this.radius * 2)
        pop();
    }

}
class Shapes {
    constructor(shapeType, perimeter, width, height) {
        this.shapeType = shapeType;
        this.perimeter = perimeter;
        this.width = width;
        this.height = height;
    }
}

class Rectangle extends Shapes {
    constructor(shapeType, perimeter, width, height, area) {
        super(shapeType, perimeter, width, height)
        this.area = area;
    }
}

class Square extends Shapes {
    constructor(shapeType, perimeter, width, height, sideLength, area) {
        super(shapeType, perimeter, width, height)
        this.sideLength = sideLength;
        this.area = area;
    }
}

class Circle extends Shapes {
    constructor(shapeType, perimeter, width, height, radius) {
        super(shapeType, perimeter, width, height)
        this.radius = radius;
    }
}

class Isoceles extends Shapes {
    constructor(shapeType, perimeter, height, width, area) {
        super(shapeType, perimeter, width, height)
        this.area = area;
    }
}
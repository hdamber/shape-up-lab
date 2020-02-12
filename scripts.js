//buttons
let btnRec = document.getElementById('btnRec');
let btnSq = document.getElementById('btnSq');
let btnCir = document.getElementById('btnCir');
let btnIso = document.getElementById('btnIso');
// form input
let recW = document.getElementById('recWidth');
let recH = document.getElementById('recHeight');
let squareSide = document.getElementById('sideLength');
let circleRadius = document.getElementById('radius')
let isoH = document.getElementById('isoHeight');
let counter = 0
let shapeBoard = document.getElementById('shapeBoard')




class Shapes {
    constructor(height, width, radius, sideLength) {
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.sideLength = sideLength;
    
        
    }
}

class Rectangle extends Shapes {
    constructor(height, width) {
        super(height, width)
        this.height = recH.value;
        this.width = recW.value;
        this.recDiv = document.createElement('div');
        this.recDiv.style.height = `${this.height}px`;
        this.recDiv.style.width = `${this.width}px`;
        this.recDiv.className = 'rectangle'
        this.yAxis = Math.floor(Math.random() * 500);
        this.xAxis = Math.floor(Math.random() * 500);
        this.recDiv.style.top = `${this.xAxis}px`;
        this.recDiv.style.left = `${this.yAxis}px`;
        this.recDiv.style.position = 'absolute'
        shapeBoard.appendChild(this.recDiv);
        
    }
}

class Square extends Shapes {
    constructor(height, width, sideLength) {
        super(height, width, sideLength)
        this.height = this.squareSide;
        this.width = this.squareSide;
        this.sideLength = squareSide.value;
        this.squareSide = squareSide.value;
        this.squareDiv = document.createElement('div');
        this.squareDiv.style.squareSide = `${this.sideLength}px`;
        this.squareDiv.style.height = `${this.squareSide}px`;
        this.squareDiv.style.width = `${this.squareSide}px`;
        this.squareDiv.className = 'square';
        this.squareY = Math.floor(Math.random() * 600);
        this.squareX = Math.floor(Math.random() * 600); 
        this.squareDiv.style.top = `${this.squareX}px`;
        this.squareDiv.style.left = `${this.squareY}px`;
        this.squareDiv.style.position = 'absolute';
        shapeBoard.appendChild(this.squareDiv);
        
    }
}

class Circle extends Shapes {
    constructor(height, width, radius) {
        super(height, width, radius)
        this.height = this.circleRadius;
        this.width = this.circleRadius;
        this.radius = circleRadius.value;
        this.circleRadius = circleRadius.value;
        this.circleDiv = document.createElement('div');
        this.circleDiv.style.circleRadius = `${this.radius}px`;
        this.circleDiv.style.width = `${this.circleRadius}px`;
        this.circleDiv.style.height = `${this.circleRadius}px`;
        this.circleDiv.className = 'circle';
        this.circleY = Math.floor(Math.random() * 600);
        this.circleX = Math.floor(Math.random() * 600);
        this.circleDiv.style.top = `${this.circleX}px`;
        this.circleDiv.style.left = `${this.circleY}px`;
        shapeBoard.appendChild(this.circleDiv);
    
        
    }
}

class Isoceles extends Shapes {
    constructor(height, width) {
        super(height, width)
        
    }
}



// button event listener on click
btnRec.addEventListener('click', () => {
    new Rectangle ()
})


btnSq.addEventListener('click', () => {
    new Square ()
})

btnCir.addEventListener('click', () => {
    new Circle ()
})

btnIso.addEventListener('click', () => {
    new Isoceles ()
})
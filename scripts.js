//buttons
let btnRec = document.getElementById('btnRec');
let btnSq = document.getElementById('btnSq');
let btnCir = document.getElementById('btnCir');
let btnIso = document.getElementById('btnIso');
// form input
let recW = document.getElementById('recWidth');
let recH = document.getElementById('recHeight');
let sideLength = document.getElementById('sideLength');
let radius = document.getElementById('radius')
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
    constructor(height, width) {
        super(height, width, sideLength)
        
    }
}

class Circle extends Shapes {
    constructor(radius) {
        super(radius)
        
    }
}

class Isoceles extends Shapes {
    constructor(height, width) {
        super(height, width)
        
    }
}




btnRec.addEventListener('click', () => {
    new Rectangle ()
})


btnSq.addEventListener('click', () => {
    console.log('hi')
})

btnCir.addEventListener('click', () => {
    console.log('hi')
})

btnIso.addEventListener('click', () => {
    console.log('hi')
})
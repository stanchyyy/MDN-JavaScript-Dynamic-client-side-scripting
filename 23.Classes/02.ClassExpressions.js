// unnamed
let Rectangle = class{
    constructor(heigth,width){
        this.heigth=heigth;
        this.width=width;
    }
}

console.log(Rectangle.name);

// named

let Rectangle2 = class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}

console.log(Rectangle2.name);
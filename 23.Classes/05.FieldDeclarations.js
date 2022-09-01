class Rectangle{
    height = 0;
    width = 0;
    constructor(height,width){
        this.height= height;
        this.width = width;
    }
}

const myRect = new Rectangle;
myRect.height = 40;
console.log(myRect.height);

class PrvateRectangle{
    #height = 15;
    #width = 15;
    constructor(height,width){
        this.#height = height;
        this.#width=width;
    }
}

const myPrivateRectange = new PrvateRectangle(20,20);
console.log(myPrivateRectange);
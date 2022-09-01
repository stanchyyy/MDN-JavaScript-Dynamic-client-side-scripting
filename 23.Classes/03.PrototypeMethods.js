class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
get Area(){
    return this.calcArea();
}
calcArea(){
    return this.height*this.width;
}
}
const square = new Rectangle(20,20);
console.log(square.Area);

class Potato{
    constructor(type){
        this.type = type;
    }
    get Production(){
        return "1 kg";
    }
    plant(){
        return console.log("you planted a potato from the type :"+this.type);
    }
}

const myPotato = new Potato("Samokov");
myPotato.plant();
console.log(myPotato.Production);

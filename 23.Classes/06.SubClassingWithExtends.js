class Animal{
    name;
    constructor(name){
        this.name = name;
    }
    speak(sound){
        console.log(`This animal makes the noise ${sound}`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    speak(sound){
    super.speak(sound);
    }
}

const myAnimal = new Dog("Hugy Wugi");
myAnimal.speak("bark!");

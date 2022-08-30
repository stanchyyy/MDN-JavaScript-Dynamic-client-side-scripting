let myObject = {
    age : 26,
    girlfriends : ["Yana","Gabriela","Zozka","Ginka"],
    get LastGirlfriend(){
        return this.girlfriends[this.girlfriends.length-1];
    }
}

console.log(myObject.LastGirlfriend);

delete myObject.LastGirlfriend;

console.log(myObject.LastGirlfriend);  //returns undefined


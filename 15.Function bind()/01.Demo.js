const findx = {
    x:42,
    getX : function(){
        return this.x;
    }
};

const unboundGetX = findx.getX;
console.log(unboundGetX());
let boundGetX;
boundGetX.bind(findx);

console.log(boundGetX());


  
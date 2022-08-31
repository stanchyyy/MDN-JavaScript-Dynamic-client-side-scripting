const findx = {
    x:42,
    getX : function(){
        return this.x;
    }
};

const unboundGetX = findx.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(findx);
console.log(boundGetX());


  
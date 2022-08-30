const o = {a:0};
Object.defineProperty(o,"b",{get() {return this.a+1;}});
console.log(o.b);

Object.defineProperty(o,"c",{get(){return this.a+this.b+10;}});
console.log(o.c);

Object.defineProperty(o,"z",{get() {return 999;}});
console.log(o.z);

delete o.z;
console.log(o.z);
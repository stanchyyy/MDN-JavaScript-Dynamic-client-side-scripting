const start = Date.now();
console.log("starting timer...");

setTimeout(()=>{
    const milis = Date.now()-start;
    console.log(`seconds elapsed = ${Math.floor(milis / 1000)}`);
},2000);
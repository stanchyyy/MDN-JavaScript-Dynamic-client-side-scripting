const fileData = {
    author: "John",
    title : "Date.prototype.toJSON()",
    createdAt : new Date(2019, 3, 15),
    updatedAt: new Date(2020, 6, 26),
}

const response = JSON.stringify(fileData);

const data = JSON.parse(response, (key, value)=>{
    if(key === "createdAt" || key==="updatedAt"){
        return Date.parse(value);
    }
    return value;
});
console.log(data.createdAt);
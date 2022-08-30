const json = '{"result" : true, "count": 42}';

const object = JSON.parse(json);
console.log(object.count);
console.log(object.result);
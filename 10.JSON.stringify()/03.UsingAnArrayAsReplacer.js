const foo = {
    foundation: "Mozilla",
    model: "box",
    week: 45,
    transport: "car",
    month: 7,
  };

  console.log(JSON.stringify(foo,["model","week"]));
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`);
// Julia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// Is Jack's age known? false
console.log(ages.has("toString"));
// false

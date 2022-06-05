var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log("hero: " + mySuperHeroName);
console.log("Villain: " + mySuperVillainName);
const subjects = ["maths","chem", "kiswa", "english"];
console.log(subjects.length);

subjects[1] = "geo";

console.log(subjects);




function arrayListing(array) {
    return console.log(subjects[0].toUpperCase())
} 

arrayListing();






const superheroes = ["Catwoman", "She-Hulk", "Jessica Jones"];

superheroes.push("Wonder Woman");
// => 4

console.log(superheroes);
// => ["Catwoman", "She-Hulk", "Jessica Jones", "Wonder Woman"]

const cities = ["New York", "San Francisco"];

cities.unshift("bostoni", "Chicago");
// => 4

console.log(cities);


const cities1 = [...cities];


console.log(cities1);
console.log(cities);





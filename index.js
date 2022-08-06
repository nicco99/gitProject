const subjects = ["maths","chem", "kiswa", "english"];
console.log(subjects.length);

subjects[1] = "geology";

console.log(subjects);




function arrayListing(array) {
    return console.log(subjects[0].toUpperCase())
} 

arrayListing();






const superheroes = ["Catwoman", "She-Hulk", "Jessica Jones"];

superheroes.push("Wondering Woman");
superheroes.push("Wonderree Woman");


const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(days.splice(1,3));
console.log(days)



const adresses = {
    continent: {
        asia: "togo",
        africa: "kenya",
        america: "washingtonDc" 
    },
    name: "nicholas",
    age: 22*10,
    course: "cs"
}
//when a return value is required for a key value 
//we can use brackets to denote that
console.log(adresses["continent"]["africa"]);
console.log(adresses["age"]);




// when assigning variables as keys its important to use brackets 
const maths = 20;
const chem = 30;
const composition = "fair";

const performance = {
    [composition]: 30 
}

console.log(performance[composition]);





// => 4

console.log(superheroes);
// => ["Catwoman", "She-Hulk", "Jessica Jones", "Wonder Woman"]

const cities = ["New York", "San Francisco"];




const cities1 = cities.splice(0);


console.log(cities1);
console.log(cities);





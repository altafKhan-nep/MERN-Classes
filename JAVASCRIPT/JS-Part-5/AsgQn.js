// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

let rand_num = Math.floor( (Math.random()*6) +1 );
console.log(rand_num);



// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

const car = {
    name:"Mustang GT",
    model:"GT500",
    color:"black"
}
console.log(car.name);



// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States. 

const person = {
    name:"Altaf",
    age:20,
    city:"Kathmandu"
}
person.city = "Jerusalam";
person.country = "Palestine";


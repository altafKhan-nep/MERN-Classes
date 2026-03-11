// let arr1 =[1,2,4];
// let arr2 = [3,5,7];

// arr1.hello = () => console.log("Hello from arr1");

// arr2.hello = () => console.log("Hello from arr2");

//Factory Function

// function personMaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hey , i am ${this.name}`)

//         }
//     }
//     return person;
// }
// let p1 = personMaker("altaf",20);
// let p2 = personMaker("arif",20);

//Constructors - does not return anything & start with

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function (){
//     console.log(`Hi , My name is ${this.name}`);
// }

// let p1 = new Person("Altaf",20);
// let p2 = new Person("Arif",14);


//class

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age  = age;
//     }
//     talk(){
//         console.log(`Hi it's me ${this.name}`)
//     }
// }

// let p1 = new Person("Altaf",20);
// let p2 = new Person("Mohammad",67);


//parent -class

// class Person{
//     constructor(name,age){
//         console.log("Person class constructor!")
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hey it's me ${this.name}`);
//     }
// }
// //child1-class

// class Student extends Person{
//     constructor(name,age,marks){
//         console.log("student class constructor!");
//         super(name,age);
//         this.marks = marks;
//     }
// }

// let std1 = new Student("Altaf",20,98);
// let std2 = new Student("Arif",14,100);


// // child2 class

// class Teacher extends Person {
//     constructor(name,age,subject){
//         console.log("teacher class constructor!");
//         super(name,age);
//         this.subject = subject;
//     }
// }

// let tech1 = new Teacher("mohammad",45,"islam");
// let tech2 = new Teacher("ali",30,"ruler")
// class Mammals{ //base class
//     constructor(name){
//         this.name = name;
//         this.type= "Warm-blooded";
//     }
//     eat(){
//         console.log("I am eating");
//     }
// }

// class Dog extends Mammals{
//     constructor(name){
//         super(name);
//     }
//     bark(){
//         console.log("WOOF..")
//     }
// }

// class Cat extends Mammals {
//     constructor(name){
//         super(name);

//     }
//     meow(){
//         console.log("Meow..")
//     }
// }

// let cat = new Cat("kitty");
// let dog = new Dog("tommy")

class Box{
    constructor(name,l,b){
        this.name =name;
        this.l = l;
        this.b =b;
    }
    area(){
        let area = this.l*this.b;
        console.log(`The area of ${this.name} is ${area}`)
    }
}

class Square extends Box{
    constructor(a){
        super("square",a,a);
    }
    // area(){
    //     let area = this.l * this.b;
    //     console.log(`The area of square is ${area}`)
    // }
} 

let sqrAr = new Square(4);
console.log(sqrAr.area());

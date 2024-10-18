// console.log("hii");

// function add(a:number,b:number): number {

//     return a+b;

    
// }

// const result= add(3,4);
// console.log(result);
/********************************************************************************** */
// interface User {
//     name: string;
//     age: number;
//     email: string;
//     phone: number;
//     class: string;
//     date: Date;
//     level: string;
//     dietary: boolean; 
//     notes: string;
// }

// const user: User = { 
//     name: "Gaurav", 
//     age: 22,
//     email: "gaurav@gmail.com",
//     phone: 9045737106,
//     class: "Italian Cuisine", 
//     date: new Date(), 
//     level: "Beginner", 
//     dietary: false, 
//     notes: "Looking forward to the class!" 
// };
// console.log(user);

//************************************************************************* */

class Animal{
constructor (public name:string){}

    makesoundanimal(): void{
        console.log(`${this.name} makes a sound`)
    }

}

class Dog extends Animal{
 
    constructor (public name:string){
        super(name);
        console.log("dog constructor called");
    }

    makesound(): void {
        console.log(`${this.name} barks`)
    }

}

const animal = new Animal("cat");
animal.makesoundanimal();
const dog = new Dog("dog");
//dog.makesoundanimal();

/************************************************************************ */


// function info<T>(arg:T): T{
//     return arg;
// }
// const nam = info<string>("Gaurav");
// const  age = info<number>(22);
// console.log(nam);
// console.log(age);

/**************************************************************** */

// enum Direction{
//     Up,
//     Down,
//     left,
//     right
// }

// const move = Direction.Up;
// console.log(move)
// console.log(Direction[move]);
// console.log(Direction[2]);

// enum Direction1{
//     Up=1,
//     Down,
//     left=50,
//     right,
//     east
// }



// console.log(Direction1.Up);
// console.log(Direction1.Down);
// console.log(Direction1.left);

// console.log(Direction1.right);
// console.log(Direction1.east);

/******************************************************************* */

let a: number = 10; 
let b: string = "Hello"; 
let c: boolean = true; 
let d: any = 10; 
let e: any = "Hello"; 
let f: any = true; 
let g: number[] = [1, 2, 3]; 
let h: string[] = ["Hello", "World"]; 
let i: boolean[] = [true, false]; 
let j: any[] = [1, "Hello", true]; 
let k: [string, number] = ["Hello", 10]; 
let l: object = { name: "John", age: 30 ,
    emailIds :
    {
        email:"e@e.com",
    },
    preferences: ["sports", "music"]
}; 

console.log(`a: ${typeof a}`);
console.log(`b: ${typeof b}`);
console.log(`c: ${typeof c}`);
console.log(`d: ${typeof d}`);
console.log(`e: ${typeof e}`);
console.log(`f: ${typeof f}`);
console.log(`g: ${typeof g}`);
console.log(`h: ${typeof h}`);
console.log(`i: ${typeof i}`);
console.log(`j: ${typeof j}`);
console.log(`k: ${typeof k}`);
console.log(`l: ${typeof l}`);
console.log("*********************************************************")
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}`);
console.log(`e: ${e}`);
console.log(`f: ${f}`);
console.log(`g: ${g}`);
console.log(`h: ${h}`);
console.log(`i: ${i}`);
console.log(`j: ${j}`);
console.log(`k: ${k}`);
console.log(`l: ${l}`);
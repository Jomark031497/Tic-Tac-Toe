//Factory Functions returns an object.
//The same as constructor but doesnt use the word 'new'
//declare the variables to be created
const playerFactory = (name, sprite) => {

    const sayName = () => console.log(`My Name is ${name}`);
    return { name, sprite, sayName };
};

const maxi = playerFactory("jomark", "X");


//Immediately Invoked Function Expression (IIFE)
//Immediately calls the function for privacy
const calculator = (() => {

    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;

    return { add, sub, mul, div };

})();

const a = calculator.add(5, 6);



const myFunction = (() => {
    
    console.log("Hello!")
})();


let myModule = 




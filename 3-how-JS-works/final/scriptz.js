/*****************************
 * Lecture: Hoisting
 */

// //function declaring goes into global context
// yo()
// function yo() {
//     console.log('hi')
// }

// //function expression is created with a variable name, not in global context

// var ho = function () {
//     console.log('hi')
// }
// ho();

//  //functions
// calculateAge(1965); // works

// function calculateAge(year){
//     console.log(2016 - year);
// }

// //retirement(1990); will not work, it only works on function declarations

// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }

// //variables

// console.log(age); //undefined
// var age = 23;
// var litty = 1000000

// function foo() {
//     console.log(age);
//     console.log(litty);
//     var age = 65;
//     console.log(age);
// }
// foo(); // prints the local execution context
// console.log(age); //prints the global execution context


/*******************
 * 
 * scoping
 */

// var a = 'Hello!';
// first();

// function first () {
//     var b = 'Hi!';
//     second();

//     function second () {
//         var c = 'Hey!';
//         console.log(a + b + c);
//         third();
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + ' ' + d);
// }

/*****************
 * The This keyword
 * regular function call: the this keyword points at the global object
 * 
 * method call: the this variable points to the object that is calling the method.
 * the this keyword is not assigned a value until a function where it is defined is actually called
 * 
 * invoked and called are the same thing
 */

//  console.log(this);

// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        /*
        function innerFunction () {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

// this keyword ONLY becomes something as soon as the method gets called
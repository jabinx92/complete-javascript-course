/*******************
 * function constructor
*/

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// Person.prototype.calculateAge  = function() {
//     console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person ('Jane', 1969, 'designer');
// var mark = new Person ('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);



// //build a constructor function

// var Candy = function (size, cost, count, year) {
//     this.size = size;
//     this.cost = cost;
//     this.count = count;
//     this.year = year;
// }

// //create a prototype function that calculates the expiration date
// Candy.prototype.calculateExpiration = function () {
//     console.log(this.year + 2);
// };

// Candy.prototype.eatTen = function () {
//     console.log(this.count - 10);
// }

// //create 3 new Candy instances
// var gummyWorms = new Candy('large', 5, 500, 1992);
// var hershey = new Candy('tiny',.1, 1, 2020);
// var skittles = new Candy('small', 1, 100, 2010);
// console.log(gummyWorms);
// console.log(hershey);
// console.log(skittles);

// gummyWorms.calculateExpiration();
// gummyWorms.eatTen();
// hershey.calculateExpiration();
// hershey.eatTen();
// skittles.calculateExpiration();
// skittles.eatTen();
// console.log(gummyWorms);



// //create a prototype with a string
// Candy.prototype.type = 'Candy';
// console.log(gummyWorms.type);
// console.log(hershey.type);
// console.log(skittles.type);

/*****************************
 * Object.create
 */

// var personProto = {
//     calculateAge: 'yo'
//     // function () {
//     //     console.log(2016 - this.yearOfBirth);
//     }
// // };

// var john = Object.create(personProto);
// console.log(john)
// // john.name = 'John';
// // john.yearOfBirth = 1990;
// // john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: {value: 'Jane'},
//     yearOfBirth: {value : 1969},
//     job: {value: 'designer'}
// })


// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
//   console.log(me)
  
//   me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // inherited properties can be overwritten
  
//   me.printIntroduction();
//   // expected output: "My name is Matthew. Am I human? true"
  

/*****************************
 * Primitives vs Objects
 */

//  var a = 23;
//  var b = a;
//  a = 46;
//  console.log(a);
//  console.log(b);


//  //Objects
//  var obj1 = {
//    name: 'John',
//    age: 26
//  };
 
//  var obj2 = obj1;
//  obj1.age = 30;
//  console.log(obj1.age);
//  console.log(obj2.age);

//  //Functions
//  var age = 27;
//  var obj = {
//    name: 'Jonas',
//    city: 'Lisbon'
//  };

//  function change (a, b){
//   a = 30;
//   b.city = 'San Francisco';
//  }

//  change(age, obj)
//  console.log(age);
//  console.log(obj.city);
//  console.log(obj);

 /*******************************
  * Lecture: Passing functions as arguments
  */

//   var years = [1990, 1965, 1937, 2005, 1998];

// var arrayCalc = function(arr, fn){
// let arrRes = [];
//   for(var i = 0; i < arr.length; i++){
//     arrRes.push(fn(arr[i]))
//   }
//   return arrRes;
// };

// function calculateAge(el) {
//   return 2016 - el
// };

// function legalAge(el){
//   return el >= 18
// }

// function maxHeartRate(el){
//   if(el >= 18 && el <= 81){
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
// var ofAge = arrayCalc(ages, legalAge);
// console.log(ofAge);
// var heartRate = arrayCalc(ages, maxHeartRate);
// console.log(heartRate);

/***********************
 * Functions returning functions
 */

// function interviewQuestion (job) {
//   if(job === 'designer'){
//     return function (name) {
//       console.log(`Hello ${name} Tell me about graphic designing UI.`);
//     }
//   } else if (job === 'teacher'){
//     return function (name) {
//       console.log(`Hello ${name}, please tell me about your previous experiences as a teacher.`);
//     }
//   } else {
//     return function (name) {
//       console.log(`Hello ${name}, please tell us about your previous work experience.`);
//       console.log(`Well, I am ${name} and I am the man that plotted Tupacs assassination, YEAHH!.`)
//     }
//   }
// }

// var interview1 = interviewQuestion('designer');
// interview1('Andy');
// interview1('Rachel');
// interview1('Tom');
// interview1('Brady');
// interview1('Michael');

// var interview2 = interviewQuestion('teacher');
// interview2('Caitlyn');

// var interview3 = interviewQuestion('convict');
// interview3('Suge Knight');

/*********************
 * Lecture: IIFE - immediately invoked function expression
 */

//  function game() {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//  }

//  game();

// (function () {
//   var score = Math.random() * 10;
//    console.log(score >= 5);
// }) ();

// // console.log(score);

// (function (luck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - luck);
// })(5);

// (function (name) {
//   console.log('Hi ' + name)
// })('Yumi')

/******************
 * Lecture: Closures
 */

//An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned.

// function retirement(retirementAge) {
//   var a = ' years left until retirement.';
//   return function (yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     console.log((retirementAge - age) + a );
//   }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// // retirement(66)(1990);

// function interviewQuestion(job){
//   return function(name){
//     if(job === 'designer'){
//       console.log(`Hello ${name}, tell me about UX design.`)
//     } else if (job === 'teacher') {
//       console.log(`Hello ${name}, what subject do you teach.`)
//     } else {
//       console.log(`Hello ${name}, tell me about your experience as a ${job}.`)
//     }
//   }
// };

// interviewQuestion('designer')('jason')
// interviewQuestion('teacher')('tanya')
// interviewQuestion('skateboarder')('TK')

/************************
 * Lecture: Bind, call and apply
 */

// var john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log(`Good ${timeOfDay}, Ladies and gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`);
//     } else if (style === 'friendly') {
//       console.log(`Hey! Whatsup? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`);
//     }
//   }
// }

// var emily = {
//   name: 'Emily',
//   age:35,
//   job: 'designer'
// };

// john.presentation('formal', 'morning');
// john.presentation('friendly','evening');

// var emilyCalled = john.presentation.call(emily, 'friendly', 'afternoon');

// // john.presentation.apply(emily, ['friendly', 'afternoon']);

// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('midnight');

// johnFriendly('morning');

// var johnFormal = john.presentation.bind(john, "formal");
// johnFormal('morrow')

// var emilyFormal = john.presentation.bind(emily,'formal')
// emilyFormal('morrow');

// var emilyFriendly = john.presentation.bind(emily,'friendly')
// emilyFriendly('night night');

//   var years = [1990, 1965, 1937, 2005, 1998];

// var arrayCalc = function(arr, fn){
// let arrRes = [];
//   for(var i = 0; i < arr.length; i++){
//     arrRes.push(fn(arr[i]))
//   }
//   return arrRes;
// };

// function calculateAge(el) {
//   return 2016 - el
// };

// function isFullAge(limit, el){
//   return el >= limit
// }

// function retirementAge(limit, el){
//   return el >= limit
// }


// var ages = arrayCalc(years,calculateAge);
// console.log(ages);
// var japanRetirement = arrayCalc(ages, retirementAge.bind(this,63))
// console.log(japanRetirement)

// var japanLegalAge = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(japanLegalAge)

// var nzLegalAge = arrayCalc(ages, isFullAge.bind(this, 18));
// console.log(nzLegalAge)

// var usRetirement = arrayCalc(ages, retirementAge.bind(this,66));
// console.log(usRetirement);

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {

  function Question (question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };
  
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
  
    for(var key in this.answers){
      console.log(key + ': ' +this.answers[key]);
    }
  };
  
  Question.prototype.checkAnswer = function (ans) {
    if(ans === this.correctAnswer) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again!');
    }
  };
  
  var question1 = new Question ('What country was Johnny born in?', {
    0: 'New Zealand',
    1: 'USA',
    2: 'Africa'
  }, '0');
  // console.log(question1);
  
  var question2 = new Question (`What is Johnny's favorite food?`, {
    0:'Durian',
    1:'Chocolate',
    2:'Gummy Worms'
  }, '2');
  // console.log(question2);
  
  var question3 = new Question (`What is John's favorite color?`, {
    0:'black',
    1:'green',
    2:'blue',
    3:'red',
  }, '2');
  // console.log(question3);
  
  var question4 = new Question ('What paintball team is Michael Urena on?', {
    0:'Infamous',
    1:'Dynasty',
    2:'Aftershock',
    3:'Uprising',
  }, '1')
  
  var storedQuestions = [question1, question2, question3, question4];
  
  var n = Math.floor(Math.random() * storedQuestions.length)
  storedQuestions[n].displayQuestion();
  
  var answer = prompt('Please select the correct answer (just type the number).');
  
  storedQuestions[n].checkAnswer(answer);
})();


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


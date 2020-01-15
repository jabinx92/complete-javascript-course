//variables and data types

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// variable naming rules
// var 3years = 3;
// var john$$$$___mark = 'John and Mark';
// console.log(john$$$$___mark);
// var  hege = 23;

//variable muttaion and type coercion

// var firstName = 'John';
// var age = 28;

// //type corecion
// console.log(firstName +' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job +
//  '. Is he married? ' + isMarried);

// //variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job +
//  '. Is he married? ' + isMarried);

//  var lastName = prompt('What is his last Name?');
//  console.log(firstName + ' ' + lastName);

 //Basic operators
// var year, yearJohn, yearMark
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// //math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// //Logical Operators 
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than john');
// var x;
// console.log(typeof x);

/*********************************************
 * operator precedence
 */

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;


//  //multiple operators
//  var isFullAge = now - yearJohn >= fullAge;
//  console.log(isFullAge);

//  //grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

//  //multiple assignments
//  var x, y;
//  x = y = (3 + 5) * 4 - 6; //  8 * 4 = 32 - 6 = 26
//  console.log(x, y);
// // how is x = y? well first y = 26 from right to left, then x = y from right to left

// //more operators
// //  x = x * 2; // 1. left to right x * 2, 2. right to left 52 = x
//  x *= 2 // right to left
//  console.log(x);
//  x += 10; 
//  console.log(x);
//  x ++;
//  console.log(x);

/*******************
 * CODING CHALLENGE 1
 */

//  var markBMI, johnBMI, markMass, johnMass, markHeight, johnHeight;
//  markMass = 75 // around 165 pounds
//  markHeight = 1.5
//  johnMass = 65 // around 143 pounds
//  johnHeight = 1.5
//  markBMI = markMass / (Math.pow(markHeight, 2));
//  johnBMI = johnMass / (Math.pow(johnHeight, 2));

//  var markGreater = markBMI > johnBMI
//  console.log(markBMI);
//  console.log(johnBMI);
//  var printString = 'Is Mark\'s BMI higher than John\'s? ' + markGreater;
//  console.log(printString);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is greater than John`)
// } else {
//     console.log(`John's BMI is greater than Marks.`)
// }

/***********
 * If /else statements
 */

//  var firstName = 'John';
//  var civilStatus = 'single';

//  if (civilStatus === 'married') {
//      console.log(firstName + ' is married!');
//  } else {
//      console.log(firstName + ' is not married');
//  }

//  var isMarried = true;

//  if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is not married');
// }

/******
 * Boolean Logic
 */

 var firstName = 'John';
 var age = 27;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) { //between 13 and 20
    console.log(firstName + ' is a teenager.')
 } else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
 } else {
     console.log(firstName + ' is a man.')
 } 

/****************
 * The Ternary Operator and Switch Statements
 */

//  var firstName = 'John';
//  var age = 22;

//  //ternary operator
//  age >= 18 ? console.log(firstName + ' drinks beer.') : console.log( firstName + ' drinks juice.');

//  var drink = age >= 18 ? 'beer' : 'juice';
//  console.log(drink);

//  /*if(age >= 18) {
//      var drink = 'beer';
//  } else {
//      var drink = 'juice'
//  }
//  */

//  //switch statement
//  var job = 'instructor';
//  switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drive an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(fristName + ' does something else.');
//  } 

//  age = 14;
//  switch (true) {
//      case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName = ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
//  }

 //  var firstName = 'John';
//  var age = 19;

//  if (age < 13) {
//      console.log(firstName + ' is a boy.');
//  } else if (age >= 13 && age < 20) { //between 13 and 20
//     console.log(firstName + ' is a teenager.')
//  } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.')
//  } else {
//      console.log(firstName + ' is a man.')
//  } 


/**************************
 * Truthy and falsy values and equality operators
 */

 //falsy values: undefined, null, 0, '', NaN
 //truthy values: not falsy values

//  var height;

//  height = 0;
//  height = '23';

//  if (height || height === 0) {
//      console.log('Variable is defined');
//  } else {
//      console.log('Variable is not defined');
//  }

//  //equality operators
//  if(height === '23') {
//      console.log('The === operator does type coercion!');
//  }

//  /****************************
//   * CODING CHALLENGE 2
//   */

// var jonAvg = (89 + 120 + 103) / 3; //104
// var mikeAvg = (116 + 94 + 123) / 3; //111
// var maryAvg = (97 + 134 + 105) / 3; //112
// console.log(jonAvg,mikeAvg,maryAvg)

// if(jonAvg > mikeAvg && jonAvg > maryAvg) {
//     console.log(`Jon has a higher average score than Mike and Mary with ${jonAvg} points`);
// } else if(mikeAvg > jonAvg && mikeAvg > maryAvg) {
//     console.log(`Mike has a higher average score than Jon and Mary with ${mikeAvg} points`);
// } else if (maryAvg > jonAvg && maryAvg > mikeAvg){
//     console.log(`Mary has a higher average score than Jon and Mike with ${maryAvg} points`);
// } else {
//     console.log('They all have equal scores')
// }

/**************************
 * Functions
 */

//  function calculateAge(birthYear) {
//     return 2019 - birthYear;
//  }
//  var ageJohn = calculateAge(1990); // 29
//  var ageMike = calculateAge(1948); // 71
//  var ageJane = calculateAge(1969); // 50

//  console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if(retirement < 0){
//     console.log(`${firstName} has been retired for ${Math.abs(retirement)} years`);
//     } else {
//     console.log(`${firstName} retires in  ${retirement} years.`);
//     }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/*****************
 * Function Statements and Expressions
 */
//function declaration 


// function wutDoYouDo(job, firstName) {}


//  //function expression
//  var whatDoYouDo = function (job, firstName) {
// switch(job) {
//     case 'teacher':
//         return firstName + ' teaches kids how to code';
//     case 'driver':
//         return firstName + ' drives a cab in Lisbon';
//     case 'designer':
//         return firstName + ' designs beautiful websites';
//     default:
//         return firstName + ' is a software engineer at facebook'
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('driver', 'Apu'));
// console.log(whatDoYouDo('designer', 'Betty'));
// console.log(whatDoYouDo('software', 'JW'));

// alert(foo()); // ERROR! foo wasn't loaded yet
// var foo = function() { return 5; }

// alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
// function foo() { return 5; }

/*****************************
 * Arrays
 */

//  // Initialize new array
//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1990, 1960, 1948);

//  console.log(names[2]);
//  console.log(names.length)


//  //Mutate array data
//  names[1] = 'Ben';
//  console.log(names);

//  //Different data types
//  var john = ['John', 'Smith', 1990, 'designer', false];

//  john.push('blue');
//  john.unshift('Mr.');
//  console.log(john);

//  john.pop();
//  john.pop();
//  john.shift();
//  console.log(john);

//  console.log(john.indexOf(1990));

//  var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'john is a designer';
//  console.log(isDesigner)

/****************************
 * CODING CHALLENGE 2
 */

// var eachTip = []; //containing all three tips
// var finalPaidAmount = []; //containing all three final paid amounts
// // console.log(eachTip)


// var tipCalculator = function (johnBill){
//     if(johnBill < 50){
//        eachTip.push((johnBill * .2).toFixed(2));
//        finalPaidAmount.push((johnBill + (johnBill * .2)).toFixed(2));
//     } else if (johnBill >= 50 && johnBill <= 200) {
//         eachTip.push((johnBill * .15).toFixed(2));
//         finalPaidAmount.push((johnBill + (johnBill * .15)).toFixed(2));
//     } else if (johnBill > 200){
//         eachTip.push((johnBill * .1).toFixed(2));
//         finalPaidAmount.push((johnBill + (johnBill * .1)).toFixed(2));
//     }
// }

// console.log(tipCalculator(124))
// console.log(tipCalculator(48))
// console.log(tipCalculator(268))
// console.log(eachTip, finalPaidAmount)

/****************************
 * Objects and properties
 */


//  //Object Literal
// var john = {
//     firstName : 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);


// //new Object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/***************************
 * Objects and Methods
 */


//  var john = {
//     firstName : 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };


// john.calcAge();
// console.log(john);

/*****************************************
 * CODING CHALLENGE 4
 */

// var john = {
//     name: 'John',
//     mass: 71,
//     height: 1.7,
//     calcBmi: function () {
//        return this.BMI = this.mass / (this.height * this.height)
//     }
// };

// var mark = {
//     name: 'Mark',
//     mass: 70,
//     height: 1.7,
//     calcBmi: function () {
//         return this.BMI = this.mass / (this.height * this.height)
//     }
// };


// if(john.calcBmi() > mark.calcBmi()) {
//     console.log(`${john.name} has a BMI of ${john.BMI}, which is higher
//     than ${mark.name}'s BMI of ${mark.BMI}`)
// } else if (mark.BMI > john.BMI) {
//     console.log(`${mark.name} has a BMI of ${mark.BMI}, which is higher
//      than ${john.name}'s BMI of ${john.BMI}`)
// } else {
//     console.log(`${mark.name} and ${john.name} both have the same BMI.`)
// };

/****************************
 * Loops and Iteration
 */

//  for(var i = 1; i <= 20; i += 2) {
//      console.log(i);
//  }


 var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

//  for loop
 for(var i = 0; i < john.length; i++) {
     console.log(john[i]);
 }


//while loop
//  var i = 0;
//  while(i < john.length) {
//      console.log(john[i]);
//      i++;
//  }

// //continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue']

//  for(var i = 0; i < john.length; i++) {
//      if(typeof john[i] !== 'string') continue;
//      console.log(john[i]);
//  }

//  for(var i = 0; i < john.length; i++) {
//     if(typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// for(var i = john.length - 1; i >= 0; i--){
//     console.log(john[i]);
// }


/****************************
 * CODING CHALLENGE 5
 */

// let johnBill = {
// bill : [124,48,268,180,42],
// name : 'John Smith',
//     tipCalc : function () {
//         this.tip = [];
//         this.total = [];
//         for(var i = 0; i < this.bill.length; i++) {
//             var currentBill = this.bill[i];
//             var percentage;
//             if(currentBill < 50){
//                 percentage = .2;
//             } else if (currentBill >= 50 && currentBill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
//             this.tip[i] = currentBill * percentage;
//             this.total[i] = currentBill + currentBill * percentage;
//         }
//     }
// };


// let markBill = {
//     bill : [77,375,110,45],
//     name : 'Mark Kressin',
//         tipCalc : function () {
//             this.tip = [];
//             this.total = [];
//             for(var i = 0; i < this.bill.length; i++) {
//                 var currentBill = this.bill[i];
//                 var percentage;
//                 if(currentBill < 100){
//                     percentage = .2;
//                 } else if (currentBill >= 100 && currentBill < 300) {
//                     percentage = .1;
//                 } else {
//                     percentage = .25;
//                 }
//                 this.tip[i] = currentBill * percentage;
//                 this.total[i] = currentBill + currentBill * percentage;
//             }
//         }
//     };


// let averageTip = function (tips) {
//     let number = 0;
//     for(var i = 0; i < tips.length; i++){
//         number += tips[i];
//     }
//     return number / tips.length;
// }

// //Do the calculations
// johnBill.tipCalc();
// markBill.tipCalc();


// johnBill.average = averageTip(johnBill.tip)
// markBill.average = averageTip(markBill.tip)
// console.log(johnBill, markBill);


// if(johnBill.average > markBill.average) {
//     console.log(`${johnBill.name} paid the highest tip with an average of ${johnBill.average}`)
// } else if (johnBill.average < markBill.average) {
//     console.log(`${markBill.name} paid the highest tips with an average of ${markBill.average}`)
// } else {
//     console.log(`both tipped the same amount`)
// }

/******************************
 * Execition context
 */




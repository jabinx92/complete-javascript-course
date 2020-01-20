/* 
-add event handler
-get input values
-add the new item to our data structure
-add the new item to the ui
-calculate budget
-update the ui

structuring our code with MODULES
-important aspect of any robust application's architecture;
-keep the units of code for a project both cleanly seperated and organized
-encanpsulate some data into privacy and expose other data publicly.
*/

//data encapsulation - hide from global scope certain information with IIFE

//api - application program interface

var budgetController = (function() {
    var x = 23;
    var add = function (a) {
        return x + a;
    }
    return {
        //closure
        publicTest: function(b) {
            return add(b);
        }
    }
})();

console.log(budgetController.publicTest(0))



var UIController = (function() {
    //some code

})();

var controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function () {
            console.log(z);
        }
    }

})(budgetController, UIController);


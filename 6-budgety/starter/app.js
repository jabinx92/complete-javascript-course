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

//BUDGET CONTROLLER
var budgetController = (function() {
   // some code
})();


//UI CONTROLLER



var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function () {

            return {
                type : document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function () {
        // 1. get the field input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. add the item to the budget controller

        // 3. add the new item to the user interace

        // 4. calculate the budget

        // 5. display the budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    })

})(budgetController, UIController);





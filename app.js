var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');
var inquirer = require('inquirer');
var fs = require('fs');
var wait;

//ask user if they want to create or view flashcards
var menu = function() {
    inquirer.prompt([
        {
            type: 'list',
            message: '\nWhat would you like to do?',
            choices: ['Add new flashcard', 'View all flashcards'],
            name: 'menuOptions'
        }
    ]).then(function(answer) {
        
        switch (answer.menuOptions) {
            case 'Add new flashcard':
            wait = setTimeout(addCard, 1000);
            console.log("\nYay! Let's make new flashcards!\n");
            break;

            case 'View all flashcards':
            console.log("Here are your flashcards:");
            viewCards();
            break;
        }
    });
};

menu();

//create functions for the options the user can choose
//ask users what type of card they want to create
    //create function for the answers

function addCard() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What kind of card would you like to create?',
            choices: ['Basic Flashcard', 'Cloze Flashcard'],
            name: 'Flashcard Type'
        }
    ]).then(function(answer) {
        if ('Basic Flashcard') {
            inquirer.prompt([
                {
                    name: 'front',
                    message: 'What is the question?',
                    validate: function(input) {
                        if (input === '') {
                            console.log('Please enter a question.');
                            return false;
                        } else {
                            return true;
                        }
                    }
                }, {
                    name: 'back',
                    message: 'What is the answer?',
                    validate: function(input) {
                        if (input === '') {
                            console.log('Please enter the answer.');
                            return false;
                        } else {
                            return true;
                        }    
                    }
                }
            ]).then(function(answer) {
                var newBasic = new BasicCard(answer.front, answer.back);
                newBasic.createBasic();
                console.log('\nNew Basic Flashcard created.')
                menu();
            });
        } else if ('Cloze Flashcard') {
            inquirer.prompt([
                {
                    name: 'text',
                    message: 'What is the full text?',
                    validate: function(input) {
                        if (input === '') {
                            console.log('Please enter the full text.');
                            return false;
                        } else {
                            return true;
                        }
                    }
                }, {
                    name: 'cloze',
                    message: 'What is the cloze part of the text?',
                    validate: function(input) {
                        if (input === '') {
                            console.log('Please enter the cloze.');
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            ]).then(function(answer) {
                var text = answer.text;
                var cloze = answer.cloze;
                if (text.includes(cloze)) {
                    var newCloze = new ClozeCard(text, cloze);
                    newCloze.createCloze();
                    console.log('\nNew Cloze Flashcard created.')
                    menu();
                }
            });
        }
    });
};

//allows users to view their flashcards
function viewCards() {

}

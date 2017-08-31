var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');
var inquirer = require('inquirer');
var fs = require('fs');


//create functions for the options the user can choose
//ask users what type of card they want to create
    //create function for the answers

var createCard = function() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What kind of card would you like to create?',
            choices: ['Basic Flashcard', 'Cloze Flashcard'],
            name: 'flashcardType'
        }
    ]).then(function(answer) {
        if(answer.flashcardType === 'Basic Flashcard') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the question?',
                    name: 'front',
                    validate: function(input) {
                        if (input === '') {
                            console.log('Please enter a question.');
                            return false;
                        } else {
                            return true;
                        }
                    }
                }, {
                    type: 'input',
                    message: 'What is the answer?',
                    name: 'back',
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
                var newBasic = new BasicCard (answer.front, answer.back);
                newBasic.createBasic();
                console.log('\nNew basic flashcard successfully created.\n')
                createCard();
                // var firstPresident = new BasicCard(answer.front, answer.back);
                // console.log(firstPresident.front);
                // console.log(firstPresident.back);
            });
        } else {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the full text?',
                    name: 'text',
                    validate: function(input) {
                        if (input === '') {
                            console.log('Please enter the full text.');
                            return false;
                        } else {
                            return true;
                        }
                    }
                }, {
                    type: 'input',
                    message: 'What is the cloze part of the text?',
                    name: 'cloze',
                    validate: function(input) {
                        if (input === '') {
                            console.log('Please enter the cloze part of your text.');
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            ]).then(function(answer) {
                var newCloze = new ClozeCard(answer.text, answer.cloze);
                newCloze.createCloze();
                console.log('\nNew cloze card successfully created.\n')
                createCard();

                // var firstPresidentCloze = new ClozeCard(answer.text, answer.cloze);
                // console.log(firstPresidentCloze.text);
                // console.log(firstPresidentCloze.cloze);
                // console.log(firstPresidentCloze.clozeDeleted);
            });
        }
    });
};

createCard();

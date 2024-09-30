// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    'What license was used for this project?',
    'What is the title of this project?',
    'Please provide an explanation for usage/installation of this project',
    'What was your motivation for this project?',
    'Why did you build this project?',
    'What problem does this project solve?',
    'What did you learn while making this project?',
    'What makes this project stand out?',
    'Please list your collaborators, if any',
    'Please provide a link to your GitHub'
];


inquirer
    .prompt([
        {
            type: 'list',
            message: questions[0],
            name: 'licenseSection',
            choices: [
                'GNU AGPLv3',
                'GNU GPLv3',
                'GNU LGPLv3',
                'Mozilla Public License 2.0',
                'Apache License 2.0',
                'MIT License',
                'No License 😭']
        },
        {
            type: 'input',
            message: questions[1],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'synopsis',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'motivation',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'why',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'problem',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'learn',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'standOut',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'collaborators',
        },
        {
            type: 'input',
            message: questions[9],
            name: 'GitHub',
        },
    ])
    .then((answers) => {
       const readMePage = generateMarkdown(answers);
       fs.writeFile('README.md', readMePage, (err) =>
        err ? console.error(err) : console.log('Success!'));
       
    });




// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should this project be used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'BSD 3-Clause', 'None'],
    },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile("README.md", markdown);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// function call to initialize program
init();

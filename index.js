const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const path = require('path');
const generatePage = require('./src/page-template');

const teamData = []

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
        },
        {
            type: 'list',
            name: 'addMember',
            message: "What type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No more team members are needed.']
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamData.push(manager)

        if (answers.addMember === 'Engineer') {
            addEngineer();
            
        } else if (answers.addMember === 'Intern') {
            addIntern();
            
        } else {
            writeFile(generatePage(teamData));
            copyFile();
        }
    });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?"
        },
        {
            type: 'list',
            name: 'addMember',
            message: "What type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No more team members are needed.']
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamData.push(engineer);
        
        if (answers.addMember === 'Engineer') {
            addEngineer();
            
        } else if (answers.addMember === 'Intern') {
            addIntern();
            
        } else {
            writeFile(generatePage(teamData));
            copyFile();
        }
    });
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school name?"
        },
        {
            type: 'list',
            name: 'addMember',
            message: "What type of team member would you like to add?",
            choices: ['Engineer', 'Intern', 'No more team members are needed.']
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamData.push(intern);
        
        if (answers.addMember === 'Engineer') {
            addEngineer();
            
        } else if (answers.addMember === 'Intern') {
            addIntern();
            
        } else {
            writeFile(generatePage(teamData));
            copyFile();
        }
    });
};

addManager();
    // .then(teamData => {
    //     return generatePage(teamData);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
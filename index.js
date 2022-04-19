const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateTeams = require('./src/page-template.js');
const generatePage = require('./src/page-template.js');

const teamData = []

const teamDetails = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What type of employee are you adding?',
            name: 'employeeType',
            choices: ['Manager', 'Engineer', 'Intern', 'No more team members are needed.']
        }
    ])
    .then((answers) => {
        if (answers.employeeType === 'Manager') {
            addManager();
        } else if (answers.employeeType === 'Engineer') {
            addEngineer();
        } else if (answers.employeeType === 'Intern') {
            addIntern();
        } else {
            return generatePage(teamData);
        }
    });
};

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamData.push(manager);
        teamDetails();
    });
}

const addEngineer = () => {
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
            message: "What is the engineer's github URL?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamData.push(engineer);
        teamDetails();
    });
};

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
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamData.push(intern);
        teamDetails();
    });
};
teamDetails()
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(generatePage => {
        return writeFile(employees);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
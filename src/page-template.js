// generate html for team profiles //
const teamData = require('../index.js');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateManager = manager => {
    return `
<div class='card employee-card'>
<div class='card-title">${manager.getName()}</h2>
<h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
</div>
<div class="card-body">
<ul class="list-group">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
</ul>
</div>
</div>
`;
};
const generateEngineer = engineer => {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
<h2 class="card-title">${engineer.getName()}</h2>
<h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
</div>
<div class="card-body">
<ul class="list-group">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
</ul>
</div>
</div>
`;
};
const generateIntern = intern => {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
</div>
    `;
};
const generatePage = (teamData) => {
    console.log(teamData[0].getRole())
    
    const joinedData = [];

    for (let i = 0; i < teamData.length; i++) {
        const employee = teamData[i];
        const role = employee.getRole();
        console.log(employee)

        switch(role) {
            case 'Manager':
                const managerCard = generateManager(employee);
                joinedData.push(managerCard);
                break;
            case 'Engineer':
                const engineerCard = generateEngineer(employee);
                joinedData.push(engineerCard);
                break;
            case 'Intern':
                const internCard = generateIntern(employee);
                joinedData.push(internCard);
                break;
        }
    }
    const employees = joinedData.join('')
    console.log(employees)
    const generateTeams = generateTeamHTML(employees);
    console.log(generateTeams)
    return generateTeams;
}

const generateTeamHTML = employees => {
    
return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${employees}
                </div>
            </div>
        </div>
    </body>
</html>
    `;
};

module.exports = generatePage;
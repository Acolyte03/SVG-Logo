const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./question.js');
const fileName = "./logo.svg";
const setShape = require('./createShape.js')

function createLogo(response) 
{
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generatedlogo.svg'));
}

function start() 
{
    inquirer.prompt(questions).then((response) => 
    {
        createLogo(response);
    })
    .catch(err => 
    {
            console.log(err)
    });
}

start();
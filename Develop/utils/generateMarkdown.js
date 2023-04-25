const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;



const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What kind of license should your project have?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
    },
    {
      type: 'input',
      name: 'uses',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contrib',
      message: 'What does the user need to know about contributing to the repo?',
    },
  ]);
};

const generateREADME = ({ name, email, project, description, license, install, tests, uses, contrib }) =>
  `# ${project} 
  ## Description ${description}
## Table of Contents
* Installation
* Usage
* License
* Tests
* Questions

## Installation
${install}

## Usage
${uses}

## License
${license}

## Contribution
${contrib}

## Command to run tests
${tests}

### Made by ${name}
### Email: ${email}
  
  
  `;


const init = () => {
  promptUser()
    
    .then((answers) => writeFile('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();

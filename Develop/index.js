//adding inquirer package

const inquirer = require('inquirer');
const fs = require('fs');
//generates the README and how it will appear
const generateREADME = ({ name, email, project, description, license, install, tests, uses, contrib }) =>
  `# ${project} 
  ## Description 
  ${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${install}

## Usage
${uses}

## License
${license}

## Contribution
${contrib}

## Tests
${tests}

## Questions

Made by [${name}](https://github.com/${name})
Email: ${email}
  
  
  `;

//prompts the user will see
  inquirer
    .prompt([
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
    ])
    .then((answers) => {
        const READMEpageContent = generateREADME(answers);

        fs.writeFile('README.md', READMEpageContent, (err) => 
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });

//when the user answers if everything is okay, then the README will generate.

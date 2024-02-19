// function to generate markdown for README
function generateMarkdown(data) {
  const licenseWording = {
    'MIT': `Explanatory text for MIT license goes here.`,
    'Apache 2.0': `Explanatory text for Apache 2.0 license goes here.`,
    'GNU GPL v3': `Explanatory text for GNU GPL v3 license goes here.`,
    'BSD 3-Clause': `Explanatory text for BSD 3-Clause license goes here.`,
    'None': `No license chosen.`,
};
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
### ${data.license}
${licenseWording[data.license]}

## Questions
To learn more about me, or for any questions, feel free to contact me through GitHub [${data.github}](https://github.com/${data.github}), or email ${data.email}.
`;
}

module.exports = generateMarkdown;

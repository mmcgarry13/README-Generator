// // TODO: Create a function that returns a license badge based on which license is passed in
// //   If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const renderLicenseBadge = (license) => {
    const licenseBadge = license === 'GNU AGPLv3' ? '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    : license === 'GNU GPLv3' ? '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    : license === 'GNU LGPLv3' ? '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    : license === 'Mozilla Public License 2.0'? '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    : license === 'Apache License 2.0' ? '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    : license === 'MIT License' ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    : '';
    return licenseBadge;
  };


  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  const renderLicenseLink = (license) => {
    const licenseLink = license === 'GNU AGPLv3' ? 'https://www.gnu.org/licenses/agpl-3.0.txt'
    : license ==='GNU GPLv3' ? 'https://www.gnu.org/licenses/gpl-3.0-standalone.html'
    : license === 'GNU LGPLv3' ? 'https://www.gnu.org/licenses/lgpl-3.0-standalone.html'
    : license === 'Mozilla Public License 2.0'? 'https://www.mozilla.org/en-US/MPL/2.0/'
    : license === 'Apache License 2.0' ? 'https://www.apache.org/licenses/LICENSE-2.0'
    : license === 'MIT License' ? 'https://opensource.org/license/mit'
    : '';
    
    return licenseLink;
  };

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  const renderLicenseSection = (license) => {
    const licenseSection = license ? license : '';
    return licenseSection;
  };



  return `# ${data.title} ${renderLicenseBadge(data.licenseSection)}

# Table of Contents

- [Usage](#Usage)

- [Motivatiion](#Motivation)

- [Email](#Email?)

- [What problem does this solve?](#What-problem-does-this-solve?)

- [What did I learn while making this project?](#What-did-I-learn-while-making-this-project?)

- [What really makes this project stand out?](#What-really-makes-this-project-stand-out?)

- [Credits](#Credits)

- [GitHub](#GitHub)

- [License](#license)
  

## Usage 
${data.synopsis}
    
## Motivation
${data.motivation}

## What problem does this solve?
${data.problem}

## What did I learn while making this project?
${data.learn}

## What really makes this project stand out?
${data.standOut}

## Credits
${data.collaborators}

## GitHub
${data.GitHub}

## Email
${data.email}


## License    
Licensed with ${renderLicenseSection(data.licenseSection)}
${renderLicenseLink(data.licenseSection)}
    

`;
}

export default generateMarkdown;

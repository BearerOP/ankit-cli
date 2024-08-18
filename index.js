#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import terminalLink from 'terminal-link';

const program = new Command();

// Define clickable links
const backendLink = terminalLink('Backend Link', 'https://github.com/BearerOP/Swasthya-backend');
const frontendLink = terminalLink('Frontend Link', 'https://github.com/BearerOP/Swasthya-frontend');
const slugRepoLink = terminalLink('Repo Link', 'https://github.com/BearerOP/TheSlugProject');
const slugLiveLink = terminalLink('Live Link', 'https://theslug.netlify.app');
const otpRepoLink = terminalLink('Repo Link', 'https://github.com/BearerOP/otp-generation-package');
const otpNpmLink = terminalLink('NPM Link', 'https://www.npmjs.com/package/otp-generation');
const repoLink = terminalLink('Repository', 'https://github.com/BearerOP/ankit-cli');
const npmLink = terminalLink('NPM Package', 'https://www.npmjs.com/package/ankit-cli');

program
  .version('1.1.0') // Updated version number
  .description('Ankit Yadav CLI');

// Define the info command
const showInfo = () => {
  console.log(chalk.bold.cyan(`
  ( ͡° ͜ʖ ͡°) 

  ${chalk.bgMagenta.white.bold(`
                                                                   
    ██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗  
    ██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║  
    ███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║  
    ██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝  
    ██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗  
    ╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝  
                                                                   `)}

  ✔ ${chalk.bold.green('Loading Ankit\'s details')}

  ${chalk.bgYellow.black.bold(`
                                                                
    █▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀  
    █▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█  
                                                                `)}

  ${chalk.bold.blue('NAME')}     - ${chalk.underline('Ankit Yadav')}
  ${chalk.bold.blue('PHONE')}    - ${chalk.underline('+91-8302524658')}
  ${chalk.bold.blue('EMAIL')}    - ${chalk.underline('work.ankit189@gmail.com')}
  ${chalk.bold.blue('LINKEDIN')} - ${chalk.underline.blue('https://linkedin.com/in/yadavankit189')}
  ${chalk.bold.blue('GITHUB')}   - ${chalk.underline.blue('https://github.com/BearerOP')}
  ${chalk.bold.blue('LOCATION')} - ${chalk.underline('Alwar, Rajasthan')}

  ${chalk.bold.green('EDUCATION')}
  - ${chalk.underline('Laxmi Devi Institute of Engineering and Technology')}
    Bachelor of Technology in Computer Science - 8.23 CGPA
  - ${chalk.underline('Vijay Laxmi Memorial Sr. Sec. School')}
    12th Standard PCM - 79.00%
  - ${chalk.underline('Vijay Laxmi Memorial Sr. Sec. School')}
    10th Standard PCM - 84.20%

  ${chalk.bold.green('PROJECTS')}
  - ${chalk.bold('SWASTHYA')} | React Native, Node.js, MongoDB, Firebase
    ${backendLink} ${frontendLink}
    • ${chalk.green('Upgraded features, increased user adherence by 30%')}
    • ${chalk.green('Introduced health goal-setting module, increased completion rate by 25%')}
    • ${chalk.green('Leaderboard feature, increased engagement by 35%')}
    • ${chalk.green('Enabled parental control for 500+ families')}
    • ${chalk.green('Added targeted exercise suggestions and meal recommendations')}
    • ${chalk.green('Utilized Firebase for real-time updates')}
    • ${chalk.green('Recognized at Krieyeta 3.0 Hackathon')}

  - ${chalk.bold('SLUG: URL Shortener')} | React, NodeJs, MongoDB, Express
    ${slugRepoLink} ${slugLiveLink}
    • ${chalk.green('Developed OTP system, improved efficiency by 15%')}
    • ${chalk.green('Implemented secure user validation, enhanced login security by 40%')}
    • ${chalk.green('Added URL tracking and QR code generation features')}

  - ${chalk.bold('OTP Generation: npm Package')}
    ${otpRepoLink} ${otpNpmLink}
    • ${chalk.green('Customizable OTP package for various needs')}
    • ${chalk.green('Secure OTP generation with scalability for high-volume use')}

  ${chalk.bold.green('ACHIEVEMENTS')}
  - ${chalk.green('Top 5 Ranking at Krieyeta 3.0')}
  - ${chalk.green('Contribution to sustainable development at Indo-Malaysian GDSC Hack')}

  ${chalk.bold.green('TECHNICAL SKILLS')}
  - ${chalk.underline('Languages')}: Java, Python, C/C++, JavaScript, DSA, OOPs
  - ${chalk.underline('Web Technologies')}: Firebase, RESTful APIs, MVC
  - ${chalk.underline('Tools and Platforms')}: Git/GitHub, Postman, Vercel, Netlify, Render

  ${chalk.bold.green('Links:')}
  - ${chalk.bold('Repository:')} ${repoLink}
  - ${chalk.bold('NPM Package:')} ${npmLink}

  `));
};

// Default action for npx ankit
program
  .action(() => {
    showInfo();
  });

program.parse(process.argv);
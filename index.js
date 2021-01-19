#!/usr/bin/env node
// *** versions ***
// MAJOR.MINOR.PATCH
// 1.0.0
const { name, version, description } = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;
// ls -al see permisions
// #!/usr/bin/env python
//  Permision error chmod -x
// chmod 155 a.txt
// fakeroot chmod 111 a.txt

welcome({
  title: ` Crhistian Caraballo `,
  tagLine: `Howdy, this is so cool`,
  description,
  version,
  bgColor: `#6A44FF`,
  color: `#2A157E`,
  bold: true,
  clear: true,
});

log(
  `
  ${chalk.italic(`Award-winning open-source engineer and developer advocate. 
  Author of various open-source dev-tools and software libraries used by 
  millions of developers worldwide. Leading developers and publishing 
  technical content for over a decade. Self-confessed tech 
  comedian cracking silly jokes in the JavaScript web and cloud communities.`)}

  ${chalk.hex(`#1da`).bold.inverse(`  Github  `)}: ${chalk.dim(
    `https://github.com/Crhis35`
  )}
  `
);

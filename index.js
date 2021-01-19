#!/usr/bin/env node
// *** versions ***
// MAJOR.MINOR.PATCH
// 1.0.0

const chalk = require("chalk");
const log = console.log;
// ls -al see permisions
// #!/usr/bin/env python
//  Permision error chmod -x
// chmod 155 a.txt
// fakeroot chmod 111 a.txt

const sym = require("log-symbols");
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword(`orange`).inverse;
const error = chalk.red.bold.inverse;
const init = require("./utils/init");
const alerts = require("handler-alerts");

(() => {
  init();

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

  log(
    `
    ${sym.success} ${success(` SUCCESS `)} Thank for checking out my cli
    ${sym.info} ${info(` INFO `)} I'm creating a npm packcage
    ${sym.warning} ${warning(` WARNING `)} Please don't copy be yourself
    ${sym.error} ${error(` ERROR `)} I'm on vacation contac me next week
    
    `
  );

  alerts({
    type: `info`,
    name: ` Info `,
    msg: `Available on github`,
  });
})();

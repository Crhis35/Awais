#!/usr/bin/env node
// *** versions ***
// MAJOR.MINOR.PATCH
// 1.0.0
const { name, version, description } = require("./package.json");
const welcome = require("cli-welcome");
// ls -al see permisions
// #!/usr/bin/env python
//  Permision error chmod -x
// chmod 155 a.txt
// fakeroot chmod 111 a.txt

welcome({
  title: "Get to know Crhis",
  description,
  version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log("Hi Crhis");

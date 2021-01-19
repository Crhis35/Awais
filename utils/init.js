const unhandled = require("cli-handle-unhandled");
const { name, version, description } = require("../package.json");
const welcome = require("cli-welcome");
const checkNode = require("cli-check-node");

module.exports = () => {
  unhandled();
  welcome({
    title: ` ${name} `,
    tagLine: `Howdy, this is so cool`,
    description,
    version,
    bgColor: `#6A44FF`,
    color: `#2A157E`,
    bold: true,
    clear: true,
  });
  checkNode("10", { fail: false });
};

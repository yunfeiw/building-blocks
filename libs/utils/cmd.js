const cmds = require('node-cmd');

const cmd = (command, callback) => {
    cmds.run(command, callback);
}

module.exports = { cmd };
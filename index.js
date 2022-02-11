const cmd = require('node-cmd')

cmd.run(
    `start cmd /k "cd ./subproject/react-app"
    `,
    function (data) {
        console.log("data")
    }
);
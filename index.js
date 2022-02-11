const cmd = require('node-cmd')

cmd.run(
    `start cmd /k "cd ./subproject/react-app"
    `,
    // `start cmd /k "cd ./subproject/react-app && npm run serve"
    function (data) {
        console.log("data")
    }
);
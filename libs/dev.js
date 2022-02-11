const fs = require("fs");
const { resolve } = require("path");
const cmd = require('node-cmd')
const { promisify } = require("util");
const figlet = promisify(require('figlet'));


// 打印
const { hrLog, log1, log2, log3 } = require('./utils/pint.js');
// 任务器
const spawn = require("./utils/spawn");


class app {
    // 微任务栈
    subProgarms = new Map()

    constructor(opt) {
        this.init();
    }
    async init() {
        log1(await figlet("serve init..."));
        hrLog();
        this.startUp();
    }

    startUp() {
        log2("微服务开始启动");
        hrLog();

        this.collectServe();
    }
    // 收集任务
    async collectServe() {

        fs.readdir(`./subproject`, (err, data) => {

            data.forEach(fileName => {
                // 子任务
                this.subProgarms.set(fileName, resolve(__dirname, `../subproject/${fileName}`))
            })

            // 任务收集完毕--执行
            this.startTask();

        })
    }

    // 依次启动微任务
    async startTask() {
        const urls = [...this.subProgarms.values()];

        while (urls.length) {
            cmd.run(
                `start cmd /k "cd ${urls.pop()} &&  npm run serve"
                `,
                function (data) {
                    console.log("data")
                }
            );

        }
    }
}

new app();
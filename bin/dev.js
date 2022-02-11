const fs = require("fs");
const { resolve } = require("path");
const { promisify } = require("util");
const figlet = promisify(require('figlet'));

// 打印
const { hrLog, log1, log2, log3 } = require('../libs/utils/pint.js');
// 命令
const { cmd } = require('../libs/utils/cmd.js');
// 配置
const { PROJECT_DIR } = require('../bb.config.js');


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
        // 项目根目录
        const rootDir = resolve(__dirname, `../${PROJECT_DIR}`);

        fs.readdir(rootDir, (err, data) => {
            if (err) {
                log2('微服务项目地址读取异常');
                return;
            }

            data.forEach(fileName => {
                // 子任务
                const url = resolve(__dirname, `../${PROJECT_DIR}/${fileName}`);
                this.subProgarms.set(fileName, url);
            })

            // 任务收集完毕--执行
            this.startTask();

        })
    }

    // 依次启动微任务
    async startTask() {
        const serves = [...this.subProgarms];
        while (serves.length) {

            // 当前服务
            const [name, url] = serves.pop();

            log1(`微服务 *${name}* 开启中`);
            // 启动服务
            cmd(
                `start cmd /k "cd ${url} &&  npm run serve"
                `,
                (data) => {
                    if (data) {
                        log2(`微服务 *${name}* 异常`, data);
                    }
                    log3(`微服务 *${name}* 已停止`);
                }
            );
        }
    }
}
console.log(process.YUNFEI)

new app();
const { spawn } = require("child_process");

const wrapSpawn = async (...args) => {
    return new Promise(res => {
        console.log(...args)

        const proc = spawn(...args);
        // 对接信息流 子 主
        proc.stdout.pipe(process.stdout);
        // 对接 子 错误
        proc.stdout.pipe(process.stderr);
        // 执行完成 监听
        proc.on("close", () => {
            res();
        });
    })
}
module.exports = wrapSpawn;
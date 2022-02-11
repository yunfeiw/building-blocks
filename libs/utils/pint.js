const chalk = require('chalk');

/**
 * @description 分割线
 */
const hrLog = () => {
    console.log(chalk.whiteBright('————————————————————'));
}
/**
 * @description 标题
 * @param {*} txt 
 */
const log1 = (txt) => {
    console.log(chalk.green(txt));
}

/**
 * @description 描述
 * @param {*} txt 
 */
const log2 = (txt) => {
    console.log(chalk.blue(txt));
}

/**
 * @description error
 * @param {*} txt 
 */
const log3 = (txt) => {
    console.log(chalk.red(txt));
}

// 封装打印日志函数
const log = (content) => console.log(chalk.green(content));

module.exports = { hrLog, log1, log2, log3 };

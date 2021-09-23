const chalk = require('chalk');
const validator = require('validator')

console.log(chalk.blue.underline.inverse("Hello"))

const res = validator.isEmail('jessica@78.com')
console.log(res)
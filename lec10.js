const os = require('os');

const arch = os.arch();
console.log(arch)

const remainMen = os.freemem();
console.log(`${remainMen/ 1024/ 1024 / 1024}`);

console.log(os.totalmem() / 1024 / 1024 / 1024)

console.log(os.platform())

const fs = require('fs');

// fs.writeFileSync('lec5.txt', 'Hello My name is Jessica Gulati');

// fs.appendFileSync('lec5.txt', `\n I am fine`)

const data = fs.readFileSync('lec5.txt');
console.log(data.toString())

const a = parseInt(process.argv[2])
console.log(a)
console.log(typeof(a))
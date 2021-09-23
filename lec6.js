// Challenge Time

//1. create a folder named it Jessica
//2. Crete a file in it named it bio.txt and add data to it
//3. add some more exsisting data
//4. Read buffer data
//5. Rename that file and name it mybio.txt
//6. now delete folder and file


const fs = require('fs');

// fs.mkdirSync('jessica')

// fs.writeFileSync('./jessica/bio.txt', "Hello this bio")

// fs.appendFileSync('./jessica/bio.txt', `\n ooooo!!!!!!`)

// fs.renameSync('./jessica/bio.txt', './jessica/mybio.txt')

//DELETE FILE

// fs.unlinkSync('./jessica/mybio.txt');

fs.rmdirSync('./jessica')
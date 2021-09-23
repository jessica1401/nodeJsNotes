const fs = require('fs')
const myData = {
    name : "Jessica", 
    age: 20,
    channel : "Learn Ms Excel"
}

// const jsondata = JSON.stringify(myData)
// console.log(jsondata)

// const objData = JSON.parse(jsondata)
// console.log(objData)


// TASK
// 1. convert to JSON
// 2. Dusare fIle mei add karna hai
// 3. read that file
// 4. agin convert to back to obj and show it on console

const jsonData = JSON.stringify(myData)
console.log(jsonData)
fs.writeFile('lec-18.json', jsonData, (err, data) => {
    if(err) {
        console.log("There is an erroe")
    } else {
        console.log("Data Successfully Added to file")
    }
})

const data = fs.readFile('./lec-18.json', 'utf-8', (err, data) => {
    console.log("reading Data")
    const dataToObj = JSON.parse(data)
    console.log(dataToObj)
})
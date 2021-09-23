const EventEmitter = require('events');

const event = new EventEmitter();

event.on('SayMyName', () => {
    console.log('My Name is Jessica')
})

event.on('SayMyName', (num, str) => {
    console.log('My Name is Jessica', num , ' ', str)
})

event.on('SayMyName', (num) => {
    console.log('My Name is Jessica', num)
})

event.on('SayMyName', () => {
    console.log('My Name is Jessica')
})


event.emit('SayMyName', 200, 'ok') 
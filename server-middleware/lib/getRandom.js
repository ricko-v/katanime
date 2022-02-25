const req = require('request');
const data = require('./data.json')

const getRandom = () => new Promise((res, rej) => {
    let arr = [];
    for (i = 0; i < 5; i++) {
        arr.push(data[Math.floor(Math.random() * data.length - 1)]);
    }

    res({
        sukses: true,
        result: arr
    })
});

module.exports = getRandom;

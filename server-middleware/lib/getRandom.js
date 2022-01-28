const req = require('request');
const data = require('./data.json')

const getRandom = (limit) => new Promise((res, rej) => {
    if (!limit) {
        rej({
            sukses: false,
            pesan: "query limit belum ada :)"
        })
    } else if (!parseInt(limit)) {
        rej({
            sukses: false,
            pesan: "query limit harus angka :)"
        });
    }

    let arr = [];
    for (i = 0; i < limit; i++) {
        arr.push(data[Math.floor(Math.random() * data.length - 1)]);
    }

    res({
        sukses: true,
        result: arr
    })
});

module.exports = getRandom;
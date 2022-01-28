const req = require('request');
const data = require('./data.json');

let getByAnime = (anime, n) => new Promise((res, rej) => {
    if (!n) {
        rej({
            sukses: false,
            pesan: "query page belum ada :)"
        })
    } else if (!parseInt(n)) {
        rej({
            sukses: false,
            pesan: "query page harus angka :)"
        })
    } else if (n == 0) {
        rej({
            sukses: false,
            pesan: "query page dimulai dari 1 :)"
        })
    } else if (!anime) {
        rej({
            sukses: false,
            pesan: "query anime belum ada :)"
        })
    }

    let result = data.filter(x => x['anime'].toLowerCase() == anime.toLowerCase()).slice(parseInt(n) * 15 - 15, parseInt(n) * 15 - 15 + 15);

    if (result.length < 15) {
        res({
            sukses: true,
            next: false,
            result: result
        })
    } else {
        res({
            sukses: true,
            next: true,
            result: result
        })
    }
})

module.exports = getByAnime;
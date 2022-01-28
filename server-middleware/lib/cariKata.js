const data = require('./data.json');

const cariKata = (q, n) => new Promise((res, rej) => {

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
    } else if (!q) {
        rej({
            sukses: false,
            pesan: "query kata belum ada :)"
        })
    }

    let id = data.filter(x => x['indo'].toLowerCase().search(q.toLowerCase()) !== -1).slice(parseInt(n) * 15 - 15, parseInt(n) * 15 - 15 + 15);
    let en = data.filter(x => x['english'].toLowerCase().search(q.toLowerCase()) !== -1).slice(parseInt(n) * 15 - 15, parseInt(n) * 15 - 15 + 15);
    let result = id.concat(en);

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

});

module.exports = cariKata;
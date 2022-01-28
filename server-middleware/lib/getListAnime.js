const data = require('./data.json');

const getListAnime = () => new Promise((res, rej) => {
    let listAnime = [];
    let totKata = [];
    let result = [];

    for (i in data) {
        listAnime.push(data[i].anime)
    }

    let ListFixed = Array.from(new Set(listAnime));

    for (n in ListFixed) {
        let jumlah = data.filter(x => x.anime == ListFixed[n]).length;

        result.push({
            anime: ListFixed[n],
            totalKata: jumlah
        })
    }

    res({
        sukses: true,
        totalKata: data.length,
        result: result
    });
})

module.exports = getListAnime;
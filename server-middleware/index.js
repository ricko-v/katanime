const app = require('express')();
const getRandom = require('./lib/getRandom');
const getListAnime = require('./lib/getListAnime');
const getByAnime = require('./lib/getByAnime');
const cariKata = require('./lib/cariKata');
const { redirect } = require('express/lib/response');

app.set('json spaces', 2);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/api/getrandom', (req, res) => {
    getRandom()
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            res.json(err)
        })
})

app.get('/api/getlistanime', (req, res) => {
    getListAnime()
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            res.json(err)
        })
})

app.get('/api/getbyanime', (req, res) => {
    getByAnime(req.query.anime, req.query.page)
        .then(response => res.json(response))
        .catch(err => res.json(err))
})

app.get('/api/carikata', (req, res) => {
    cariKata(req.query.kata, req.query.page)
        .then(response => res.json(response))
        .catch(err => res.json(err))
})

app.get('/api', (req, res) => {
    res.json({
        message: 'cek /developer-api'
    })
})

module.exports = app;

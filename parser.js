const request = require('request')
const cheerio = require('cheerio')

request('https://rbc.ru/', (err, res, html) => {
    console.log(html)
    if (!err && res.statusCode === 200) {
        const $ = cheerio.load(html)
        console.log($('.indicators__sum').eq(0).text())
    }
})

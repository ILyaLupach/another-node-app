const fs = require('fs') //работа с файлами

fs.exists('./package.json', exists => {
    exists && fs.readFile('./package.json', (err, data) => {
        console.log(data.toString())
    })
})

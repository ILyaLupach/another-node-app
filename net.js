// const https = require('https') стандартный
// https.get('https://geekbrains.ru', res => console.log(res.statusCode))
//     .on('error', e => {
//         console.error(e)
//     })

// const request = require('request');
// const request = require('request') самое популярное решение пакет request
// const rq = () => (
//     request('https://geekbrains.ru', (err, res, body) => {
//         if (err) throw err
//         console.log(body)
//     })
// )
// req()

const nodemailer = request('nodemailer') //отправка писем пакет nodemailer
const smtpTransport = nodemailer.createTransport('SNTP', {
    service: 'GMail',
    auth: {
        user: 'qwerty@gmail.com',
        pass: 'qwerty123'
    }
})
smtpTransport.sendMail({
    from: 'Vasya Pupkin <qwerty@gmail.com>',
    to: 'Kolya Petrov <kolya@gmail.com>',
    subject: 'hello',
    text: 'hello Kolya',
    html: '<h1>Hello Kolya</h1>',
}, (err, res) => {
    if (err) throw err
    console.log('message sent')
    smtpTransport.close()
})

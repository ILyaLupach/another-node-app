const express = require('express')
const bodyParser = require('body-parser')
const consolidate = require('consolidate')

const app = express()

app.use(bodyParser.json()) //добавление мидлваров

// если необходимо, можно добавить шаблонизатор (типа handlebars)
app.engine('hbs', consolidate.handlebars)
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)
////////////////////////////////////////////////////////////////

//вешаем  промежуточные функции на определенное семейство роутов
app.all('/', (req, res, next) => {
    console.log('req') //промежуточные действия
    next() //отправляем дальше по роуту (приоритизация)
})

app.get('/user/:id', (req, res) => {
    console.log(req.query) //обработка ?qwery запросов
    res.send(`user id =  ${req.params.id}`)
})

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => {
    console.log(req.body) //в body ложится тело запроса посли бодипарсера
    res.send('ok')
})

//если прописан шаблонизатор, то можно использовать рендер
app.get('/handlebars', (req, res) => {
    const num = new Date().getMinutes()
    res.render('index', {
        title: 'handlebars consolidate',
        features: [
            { name: 'Ilya', value: num },
            { name: 'Katya', value: 27 },
            { name: 'Ivan', value: 3 },
            { name: 'Yaroslav', value: 0.4 },
        ]
    })
})

app.listen(4000)

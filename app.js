const express = require('express')
const app = express()
const _ = require('lodash')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'hbs')

const data = require('./data.js')
const compliments = data.compliments
const colors = data.colors

app.post('/', (req, res) => {
    compliments.push(req.body.name)
    res.redirect('/')
})

app.get('/:name', (req, res) => {
    let compliment = randomCompliment()
    let color = randomColor()
    let name = req.params.name
    res.render('index', {compliment, color, name})
})

app.get('/', (req, res)=> {
    let compliment = randomCompliment()
    let color = randomColor()
    res.render('index', {compliment, color})
})

function randomCompliment () {
    return _.sample(compliments)
}

function randomColor () {
    return _.sample(colors)
}

app.listen(7777, () => {
    console.log('locked and loaded on 7777')
})
const express = require('express');
const _ = require('lodash');
const app = express();
const port = 3000;

const compliments = [
    'Your instructors love you',
    'High five = ^5',
    'Is it Ruby Tuesday yet?',
    "It's almost beer o'clock",
    'The Force is strong with you'
];

const colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080', '#FFA500'];

app.set('view engine', 'hbs');
app.get('/:name', (req, res) => {
    // add :name after forward slash
    const compliment = _.sample(compliments);
    const color = _.sample(colors);
    res.render('index.hbs', { name: req.params.name, compliment, color }); // still need to work on name
});

// app.get('/:name', (req, res) => {
//     res.render('index', { name: req.params.name });
// });

app.listen(port, () => {
    console.log('running on port ' + port);
});

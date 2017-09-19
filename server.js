const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('home.hbs', {
        name: 'Dusan'
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to complete request :('
    });
});
app.listen(3000);

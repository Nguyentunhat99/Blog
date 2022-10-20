const path = require('path');
const express = require('express');
var morgan = require('morgan');
const { engine } = require('express-handlebars');
const { extname } = require('path');
const app = express();
const port = 3000;
//http logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//template engne
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    // console.log(req.query.ref)
    res.render('search');
});

app.get('/search', (req, res) => {
    console.log(req.body);
    res.send('');
});

          app.listen(port, () => {
                              console.log(`Example app listening on port ${port}`);
                                                                  });

const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

app.engine('hbs',handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.use(express.static(path.join(__dirname, 'public')));

const route = require('./routes');
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})


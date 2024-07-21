const express = require('express');
const path = require("path");
const config = require("config");

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();
const HOST = config.get('HOST');
const PORT = config.get('PORT');

app.set('view engine', 'ejs');
app.set('views', 'views');

const routes = require('./routes/chart');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use(errorController.get404);

app.listen(PORT, HOST ,() => {
        console.log(" Server is Successfully Running, and App is listening on port "+ PORT)
}).on('error', err => {
    console.log(err);
});



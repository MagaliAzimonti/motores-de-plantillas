let express = require('express');
let app = express();
const PORT = 8080;
let hbs = require('express-handlebars')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('hbs', hbs.engine());
app.set('views', './views/hbs');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
    
})

app.get('/productos', (req, res, next) => {

})
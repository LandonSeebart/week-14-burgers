const express = require('express')
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars');



const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
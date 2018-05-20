const express = require('express')
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars');

const PORT = process.env.PORT || 8080;

const app = express()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const router = require("./controllers/burgers_controller.js");
app.use(router);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});


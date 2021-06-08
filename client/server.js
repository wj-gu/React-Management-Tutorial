let express = require('express');
let app = express();
let router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


let server = app.listen(3000, () => {
    console.log("Express servr has started on port 3000");''
});


app.use(express.static('public'));
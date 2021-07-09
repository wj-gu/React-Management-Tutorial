const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // json 형태로 변환해 주는 역할을 함.
app.use(bodyParser.urlencoded({ extenede: true}));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user : conf.user,
    password : conf.password,
    prot : conf.port,
    database : conf.database
});
connection.connect();

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})

app.listen(port, () => console.log(`Listening on port ${port}`));
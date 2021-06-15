const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // json 형태로 변환해 주는 역할을 함.
app.use(bodyParser.urlencoded({ extenede: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/1',
        'name' : '홍길동1',
        'birthday' : '961222',
        'gender' : '여자',
        'job' : '대학생'
        }, {
            'id' : 2,
        'image' : 'https://placeimg.com/64/64/2',
        'name' : '홍길동2',
        'birthday' : '961223',
        'gender' : '남자',
        'job' : '대학생'
        }, {
            'id' : 3,
        'image' : 'https://placeimg.com/64/64/3',
        'name' : '홍길동3',
        'birthday' : '961224',
        'gender' : '남자',
        'job' : '대학생'
        }
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
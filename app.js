const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended : false}))
app.use(bodyparser.json());

const port = 3000;
const router = require('./controllers/userControllers');

app.use(router)

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log('app is listening')
})

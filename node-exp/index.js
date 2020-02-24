const express = require('express');
const app = express();
const port = 5000;

app.get('/student', function(req, res){
    res.send("get all student")
})

app .get('/student/:id',function(req, res){
    let id = req.params.id;
    res.send("student Id:" + id);
})

app.post('/student',function(req, res){
    res.send('Student: Post')
})

app.put('/student',)
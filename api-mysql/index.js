const express = require('express');
const mysql = require('mysql');

const con = mysql.createConnection({
    'host': 'localhost',
    'username': 'root',
    'password' : 'welcome'
})

con.connect((err)=>{
    if(err){
        console.log(err.message)

    }else {
        console.log('successfully connected');
    }
    var createDatabase = "create database node demo";
    con.query(createDatabase,(err,result)=>{
        if(err) throw err;
        console.log(result);
    
    })

    const app=express();

    app.get('/',(req,res)=>{
        res.send("app running");

    })
    const port=5000;
    app.listen(port,(req,res)=>{
        console.log(`server running on : ${port}`)
    })
})
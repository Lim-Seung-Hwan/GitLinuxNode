const express = require('express')
const app = express()
const conn = require("./config/db");
//서버 : 요청, 응답
//http:///localhost:3001
app.get('/' , (req, res)=>{
    console.log("myNode")
    let sql = 'select * from member';
    conn.query(sql,(err, rows)=>{
        if(rows.length>0){
             res.send(rows)
        }
    })
   
})

app.listen(3001)
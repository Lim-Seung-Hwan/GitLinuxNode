const express = require('express')
const app = express()

//서버 : 요청, 응답
//http:///localhost:3001
app.get('/' , (req, res)=>{
    console.log("myNode")
    res.send("myNode")
})

app.listen(3001)
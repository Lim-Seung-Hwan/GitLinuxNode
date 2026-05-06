// DB에 연결할때마다 호출되는 연결정보 코드 작성 공간
const mysql = require("mysql2");

// 1. DB연결정보를 작성
const conn = mysql.createConnection({
    host : "project-db-campus.smhrd.com",
    port : 3307,
    user : "smhrd_teacher_lsh",
    password : "smhrd",
    database : "smhrd_teacher_lsh"
});

//2. 연결정보를 가져다가 연결 진행
conn.connect();

//3. 연결정보를 수출
module.exports = conn;

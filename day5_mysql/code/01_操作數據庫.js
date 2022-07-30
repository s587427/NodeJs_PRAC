// 1. 導入mysql模組

const mysql = require('mysql')

// 2. 建立與MySQL 數據庫的關係

const db = mysql.createPool({
    host: '127.0.0.1', // 資料庫IP位址
    user: 'root', // 資料庫帳號
    password: '12345678',
    database: 'my_db_01', // 操作得資料庫名稱
})

// 測試 mysql 模組是否能正常執行
// db.query('select 1', (err, res)=>{

//     // mysql 模組工作期間報錯了
//     if(err) return console.log(err.message)

//     // 能夠成功執行的SQL語句
//     console.log(res)
// })

// 查詢user表中的所有數據
// const sqlStr = 'select * from users'

// db.query(sqlStr, (err, res)=>{
//     // 查詢數據失敗
//     if(err) return console.log(err.message)

//     // 注意: 如果執行的是select 查詢語句， 則執行的結果是數組

//     // 查詢數據成功
//     console.log(res)
// })


// 要插入users表中的數據對象
// const user = { username: '孫悟空', password: 'pcc321' }
// 定義待執行的SQL語句
// const sqlStr = 'insert into users(username, password) values(? , ?)'
// db.query(sqlStr, [user.username, user.password], (err, res) => {
//     // 失敗
//     if(err) return console.log(err.message) 

//     // 成功了
//     // 注意: 如果執行的是 insert into 插入語句， 則 res 是一個對象
//     // 可以通過 affectedRows 屬性， 來判斷是否插入數據成功 
//     if(res.affectedRows === 1){
//         console.log('插入數據成功!')
//     }
// })


// 插入數據的便捷方式
// const user = { username: '豬八戒', password: 'zxcasd' }
// // 定義待執行的SQL語句
// const sqlStr = 'insert into users set ?'
// db.query(sqlStr,user, (err, res) => {
//     // 失敗
//     if(err) return console.log(err.message) 

//     // 成功了
//     // 注意: 如果執行的是 insert into 插入語句， 則 res 是一個對象
//     // 可以通過 affectedRows 屬性， 來判斷是否插入數據成功 
//     if(res.affectedRows === 1){
//         console.log('插入數據成功!')
//     }
// })

// 演示如何更新用戶的訊息
// const user = { id: 7, username: '沙悟淨', password: '123456' }
// const sqlStr = 'update users set username=?, password=? where id=?'

// db.query(sqlStr, [user.username, user.password, user.id], (err, res) => {
//     if (err) return console.log(err.message)
//     if (res.affectedRows === 1) {
//         console.log('更新數據成功!')
//     }
// })

// 更新數據的便捷方法
// const user = { id: 7, username: '牛魔王', password: '123456' }
// const sqlStr = 'update users set ? where id=?'

// db.query(sqlStr, [user, user.id], (err, res) => {
//     if (err) return console.log(err.message)
//     if (res.affectedRows === 1) {
//         console.log('更新數據成功!')
//     }
// })

// // 刪除id 為 7的用戶
// const sqlStr = 'delete from users where id = ?'

// db.query(sqlStr, 7, (err, res) => {
//     if (err) return console.log(err.message)
//     if (res.affectedRows === 1) {
//         console.log('刪除數據成功!')
//     }
// })

// 標記刪除
const sqlStr = 'update users set status = ? where id = ?'

db.query(sqlStr, [1, 4], (err, res) => {
    if (err) return console.log(err.message)
    if (res.affectedRows === 1) {
        console.log('標記刪除成功!')
    }
})


const express = require('express')

const app = express()


// 創建路由
app.get('/', (req, res) => {
    // 人為製造的錯誤
    throw new Error('服務器內部發生了錯誤!')
    res.send('Home Page.')
})


// 定義錯誤級別的中間件，捕獲整個項目的異常錯誤， 從而防止程序的崩潰
// 需註冊在路由之後

app.use((err, req, res, next) => { 
    console.log('發生了錯誤!' + err.message)
    res.send('Error: ' + err.message)
 })



app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
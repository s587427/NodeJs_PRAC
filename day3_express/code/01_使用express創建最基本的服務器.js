// 導入express
const express = require('express')

// 創建 web 服務器
const app = express()


// 監聽客戶端 GET 和 POST 請求. 並向客戶端響應具體內容

app.get('/user', (req, res) => {
    //使用 express 提供的 res.send() 方法，向客戶端響應一個 JSON 對象
    //console.log(res)
    res.send({ name: '孫悟空', age: 18 })
})

app.post('/user', (req, res) => {
    //使用 express 提供的 res.send() 方法，向客戶端響應一個文本字串
    res.send('請求成功')
})

app.get('/', (req, res) => {
    // 通過 req.query 可以的到客戶端發送過來的 查詢參數
    // 注意: 默認情況下, req.query是一個空對象
    console.log(req.query)
    
    res.send(req.query)
})

// 注意: 這裡的 :id 是一個動態參數
app.get('/user/:id/:name', (req, res)=>{
    // req.params 是動態匹配的 URL 參數，默認也是一個空對象

    console.log(req.params)

    res.send(req.params)
})


// 啟動 web 服務器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})

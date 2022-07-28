

const express = require('express')

const app = express()

// 注意: 除了錯誤級別的中間件， 其他中間件， 必須在其他路由之前進行配置

// 通過express.json()這個中間件， 解析表單中的 JSON 格式的數據
app.use(express.json())

// 通過express.urlencoded()這個中間件， 來解析表單中的 url-encoded 格式的數據
app.use(express.urlencoded({ extended: false}))


app.post('/user', (req, res) => {
    // 在服務器，可以使用req.body 這個屬性， 來接收客戶端發送過來的請求體數據
    // 默認情況下， 如果不配置解析表單數據的中間件， 則req.body 默認等於undefined 
    console.log(req.body)

    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服務器，可以使用req.body 這個屬性， 來接收客戶端JSON格式的表單數據 和 url-encoded 格式的數據
    console.log(req.body)

    res.send('ok')
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
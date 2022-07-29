const express = require('express')

const app = express()

// 導入 Node.js 內置 querysring 模組

const qs = require('querystring')


// 這是解析表單數據的中間件
app.use((req, res, next) => {
    // 定義中間件具業務邏輯
    // 1. 定義一個str 字串, 專門用來儲存客戶端發送過來的請求體數據
    let str = ''

    // 2. 監聽req的 data 事件
    req.on('data', (chunk) => {
        str += chunk
    })

    // 3. 監聽req的 end 事件
    req.on('end', () => {
        // 在 str 中存放的是完整的請求體數據 
        // console.log(str)

        // TODO: 把字串格的請求體數據， 解析成JSON格式

        const body = qs.parse(str)

        req.body = body

        next()

    })

})


app.post('/user', (req, res) => {
    res.send(req.body)
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
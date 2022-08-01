const express = require('express')

const router = express.Router()



// 在這裡掛載相對應的路由
router.get('/get', (req, res) => {

    // 通過 req.query 可以的到客戶端發送過來的 查詢參數
    const query = req.query

    // 使用send()方法，向客戶端響應處理的結果
    res.send({
        status: 0, //0 成功 1失敗
        msg: 'GET 請求成功!',
        data: query
    })
})

// 定義POST接口
router.post('/post', (req, res) => {

    // 通過 req.body 獲取請求體中包含 url-encoded 格式的數據
    const body = req.body

    // 使用send()方法，向客戶端響應處理的結果
    res.send({
        status: 0, //0 成功 1失敗
        msg: 'POST 請求成功!',
        data: body
    })
})

// 定義DELETE接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0, //0 成功 1失敗
        msg: 'DELETE 請求成功!',
    })
})





module.exports = router
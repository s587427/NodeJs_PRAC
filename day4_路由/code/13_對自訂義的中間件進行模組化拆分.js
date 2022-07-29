const express = require('express')

const app = express()

// 1. 導入自己封裝的中間件模組
const cutsomBodyParser = require('./14_custom-body-parser')


// 2. 將定義的中間件函數, 註冊為全局可用的中間件
app.use(cutsomBodyParser)


app.post('/user', (req, res) => {
    res.send(req.body)
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
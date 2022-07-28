const express = require('express')
const app = express()


// app.use(express.static('./files'))

// 1. 導入路由模組
const router = require('./03_router')

// 2. 註冊路由模組
app.use('/api', router)

// 注意: app.use() 函數的作用， 就是用來註冊全局中間件

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})

const express = require('express')

const app = express()

// 定義第一個全局中間件
app.use((req, res, next) => {
    console.log('使用了第一個全局中間件')
    next()
})

// 定義第二個全局中間件
app.use((req, res, next) => {
    console.log('使用了第二個全局中間件')
    next()
})

app.get('/user', (req, res) => {
    res.send('User Page.')
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})

const express = require('express')

const app = express()

// 定義第一個中間件函數

const mw1 = (res, req, next) =>{
    console.log('調用了局部生效中間件')
    next()
}

// 創建路由

app.get('/', mw1, (req, res) => {
    res.send('Home Page.')
})

app.get('/user', (req, res) => {
    res.send('User Page.')
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
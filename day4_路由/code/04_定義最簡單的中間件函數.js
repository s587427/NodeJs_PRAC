const express = require('express')

const app = express()

// 定義一個最簡單的中間件函數
// const mw = function (req, res, next) {
//     console.log('這是最簡單的中間件函數')
//     // 把流轉關係，交給下一個中間件或路由
//     next()
// }

// // 將nw註冊為全局生效的中間件

// app.use(mw)

app.use((req, res, next) => {
    console.log('這是最簡單的中間件函數')
    next()
})


app.get('/', (req, res) => {
    console.log('使用了 / 這個路由')
    res.send('Home Page')
})

app.get('/user', (req, res) => {
    console.log('使用了 /user 這個路由')
    res.send('User Page')
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
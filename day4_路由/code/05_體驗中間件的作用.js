const express = require('express')

const app = express()


app.use((req, res, next) => {
    // 獲取到請求到達到服務器的時間
    const time = Date.now()

    // 為req對象，添加自定義屬性，從而把時間共享給後面的所有路由
    req.startTime = time

    next()
})


app.get('/', (req, res) => {
    res.send('Home Page.' + req.startTime)
})

app.get('/user', (req, res) => {
    res.send('User Page.' + req.startTime)
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
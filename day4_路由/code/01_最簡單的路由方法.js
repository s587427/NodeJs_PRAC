const express = require('express')

// 創建Web 服務器，命名為app

const app = express()


//掛載路由
app.get('/', (req, res) => { res.send('Hello World.') })
app.post('/', (req, res) => { res.send('Post Request.') })


// 啟動 Web 服務器
app.listen(80, ()=>{
    console.log('express server running at http://127.0.0.1')
})
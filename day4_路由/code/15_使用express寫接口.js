const express = require('express')

const app = express()



// 配置解析表單數據的中間件
app.use(express.urlencoded({ extended: false }))


// 必須在配置 cors 中間件之前， 配置 JSONP 的接口

app.get('/api/jsonp', (req, res) => {

    // TODO: 定義JSON 接口具體的實現過程
    // 1. 得到函數的名稱

    const funcName = req.query.callback

    // 2. 定義要發送到客戶端的數據對象

    const data = { name: 'zs', age: 22 }

    // 3. 拼接出一個函數的調用

    const scriptStr = `${funcName}(${JSON.stringify(data)})`

    // 4. 把拼接字串，響應給客戶端

    res.send(scriptStr)

})






// 一定要在路由之前， 配置 cors 這個中間件，從而解決跨域的問題
const cors = require('cors')

app.use(cors())

// 導入路由模組
const router = require('./16_apiRouter')

// 註冊路由模組到app上(全局中間件)
app.use('/api', router)


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})

/**
 * 總結
 * 一定要在路由之前註冊中間件
 * 客戶端發送過來的請求，可以連續使用多個中間件進行處理
 * 執行完中間件後，不要忘記使用next()函數
 * 為了防止代碼邏輯混亂，使用next()函數後不要再寫額外代碼
 */


const express = require('express')

const app = express()

// 定義第一個中間件函數
const mw1 = (res, req, next) =>{
    console.log('調用了第一個局部生效中間件')
    next()
}
// 定義第一個中間件函數
const mw2 = (res, req, next) =>{
    console.log('調用了第二個局部生效中間件')
    next()
}

// 創建路由
app.get('/', [mw1, mw2], (req, res) => {
    res.send('Home Page.')
})

app.get('/user', (req, res) => {
    res.send('User Page.')
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
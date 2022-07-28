
const http = require('http')

const server = http.createServer()


server.on('request', (req, res) => {
    // req 式請求對象，包含客戶端的相關數據和屬性
    // req.url 是客戶端的請求URL地址
    // req.method 是客戶端請求的method類型
    
    const url = req.url
    const method = req.method
    
    // const str = `Your request url is ${url}, and requset method is ${method}`

    const str = `你的請求地址是 ${url}, 請求方法的類型為 ${method}`
    // 為了防止中文顯示亂碼，需要設置響應頭
    // 調用res.setHeader()方法， 設置 Content-Type響應頭，解決中文亂碼的問題
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    console.log(str)

    // 調用res.end()方法， 向客戶端響應一些內容
    res.end(str)
})

server.listen(1010, () => {
    console.log('server running at http://127.0.0.1:1010')
})
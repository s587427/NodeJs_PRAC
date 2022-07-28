/**
 * 1. 獲取url地址
 * 2. 設置默認響應內容為404 Not found
 * 3. 判斷用戶是否為 / or /index.html 首頁
 * 4. 判斷用戶是否為 /about.html 關於頁面
 * 5. 設置 Content-Type 響應頭，防止中文亂碼
 * 6. 使用res.end()把內容響應給客戶端
 */

const http = require('http')

const server = http.createServer()

server.on('request', function(req, res){
    const url = req.url
 
    let content = '<h1>404 Not found !</h1>'

    if(url === '/' || url === 'index.html'){
        content = '<h1>首頁</h1>'
    }else if(url === '/about.html'){
        content = '<h1>關於頁面</h1>'
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
})

server.listen(1010, function(){
    console.log('server running at http://127.0.0.1:1010')
})
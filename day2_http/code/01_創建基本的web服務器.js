/**
 * 1. 導入http模組
 * 2. 創建web服務器實例
 * 3. 為服務器實例綁定request事件，監聽客戶端的請求
 * 4. 啟動服務器
 */

const http = require('http')

const server = http.createServer()

server.on('request', function(req, res){
    console.log('Someone vist our web server.')
})

server.listen(1010, function(){
    console.log('server running at http://127.0.0.1:1010')
})
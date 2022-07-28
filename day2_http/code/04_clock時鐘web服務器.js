const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {

    const url = req.url

    // 預定一個空白文件存放路徑
    let fpath = ''

    // 讀取檔案透過req.url動態拼接
    if (url === '/') {
        fpath = path.join(__dirname, '/clock/index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }


    //讀取檔案
    fs.readFile(fpath, function (err, dataStr) {
        if (err) return res.end('404 Not Found')
        res.end(dataStr)
    })

})

// 啟動服務器
server.listen(1010, () => {
    console.log('server running at http://127.0.0.1:1010')
})


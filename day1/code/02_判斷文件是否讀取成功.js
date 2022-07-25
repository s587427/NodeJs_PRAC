const  fs = require('fs')

fs.readFile('./files/1.txt', 'utf8', function(err, dataStr){
    if(err){
        return console.log(`讀取文件失敗! ${err.message}`)
    }
    console.log(`讀取文件成功! ${dataStr}`)
})

const fs = require('fs')

// 出現路徑拼接錯誤的問題，是因為提供了./或 ../ 開頭的相對路徑
// 如果要解決這個問題， 可以直接提供一個完整的文件存放路徑就行
// fs.readFile('./files/1.txt', 'utf8', function(err, dataStr){
//     if(err){
//         return console.log(`讀取文件失敗! ${err.message}`)
//     }
//     console.log(`讀取文件成功! ${dataStr}`)
// })


// 移植性非常差， 不利於維護
// fs.readFile('E:\\SideProject\\NodeJS_PRAC\\day1\\code\\files\\1.txt', 'utf8', function(err, dataStr){
//     if(err){
//         return console.log(`讀取文件失敗! ${err.message}`)
//     }
//     console.log(`讀取文件成功! ${dataStr}`)
// })

// __dirname 表示當前文件所處的目錄
console.log(__dirname)


fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr){
    if(err){
        return console.log(`讀取文件失敗! ${err.message}`)
    }
    console.log(`讀取文件成功! ${dataStr}`)
})

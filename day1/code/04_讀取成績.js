// 1.導入fs模塊, 來操作文件
const fs = require('fs')

// 2.調用 fs.readFile()方法讀取文件


fs.readFile('../素材/成績.txt', 'utf8', function(err, dataStr){
    // 讀取文件
    if(err){
        return console.log(`讀取文件失敗! ${err.message}`)
    }
    console.log(`讀取文件成功! ${dataStr}`)

    const arrOld = dataStr.split(' ')
    console.log(arrOld)

    const arrNew = []

    arrOld.forEach(item=>{
        arrNew.push(item.replace('=', ': '))
    })

    // \r\n 換行
    const newStr = arrNew.join('\r\n')
    console.log(newStr)

    // 寫入文件
    fs.writeFile('./files/成績ok.txt', newStr, function(err){
        if(err){
            return console.log(`文件寫入失敗! ${err.message}`)
        }
        console.log('文件寫入成功!')
    })
})
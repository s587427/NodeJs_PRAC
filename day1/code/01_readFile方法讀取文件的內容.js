// 導入fs模塊, 來操作文件
const fs = require('fs')

/**
 * 調用 fs.readFile()方法讀取文件
 * 參數1: 讀取文件路徑
 * 參數2: 讀取文件的時候採用的編碼格式，一般默認指定utf8
 * 參數3: 回調函數，拿到讀取失敗和成功的結果 err, dataStr
 * 
 */
fs.readFile('./files/11.txt', 'utf8', function(err, dataStr){
    // 失敗結果
    // 如果讀取成功，則err的值為null
    // 如果讀取失敗，則err的值為錯誤對象， dataStr的值為 undefined
    console.log(err)
    console.log('------')
    // 成功結果
    console.log(dataStr)
})

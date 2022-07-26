// 導入fs模塊, 來操作文件
const fs = require('fs')

/**
 * 調用 fs.writeFile()方法， 寫入文件內容
 * 參數1: 表示文件存放路徑
 * 參數2: 要寫入的內容
 * 參數3: 回調函數，拿到讀取失敗和成功的結果 err, dataStr
 */

/**
 * 只能用來創建文件，不能用來創建路徑
 */
fs.writeFile('./files/3.txt', 'ok123', function(err){
    // 如果文件寫入成功， 則err = null
    // 如果文寫入失敗， 則 err = 一個錯誤的對象
    //console.log(err)

    if(err){
        return console.log(`文件寫入失敗! ${err.message}`)
    }

    console.log('文件寫入成功!')
})
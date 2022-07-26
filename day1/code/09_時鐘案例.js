// 引入fs模塊
const fs = require('fs')
const path = require('path')

// 定義正則表達式， 分別匹配 <style></style> 和 <script></script>
// \s空白字 \S任意非空白字

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 讀取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf-8', function (err, dataStr) {
    // 讀取失敗
    if (err) return console.log(err.message)

    // 讀取成功， 調用對應的三個方法，分別拆解出css, js html 文件 
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})



// 定義處理 css 樣式的方法
function resolveCSS(htmlStr) {
    // 使用正則提取需要的內容
    const r1 = regStyle.exec(htmlStr)
    //console.log(r1[0])

    // 將頭尾<style></style>做替換操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    console.log(newCSS)

    // 寫入文件
    fs.writeFile(path.join(__dirname, '/clock/index.css'), newCSS, function (err) {
        if (err) return console.log('寫入 CSS 樣式失敗!' + err.message)

        console.log('寫入樣式文件成功')
    })
}

// 定義處理 js 樣式的方法
function resolveJS(htmlStr) {
    // 使用正則提取需要的內容
    const r1 = regScript.exec(htmlStr)

    const newJS = r1[0].replace('<script>', '').replace('</script>', '')
    console.log(newJS)

    // 寫入文件
    fs.writeFile(path.join(__dirname, '/clock/index.js'), newJS, function (err) {
        if (err) return console.log('寫入 JS 失敗!' + err.message)

        console.log('寫入JS文件成功')
    })
}

// 定義處理 HTML 結構的方法
function resolveHTML(htmlStr) {
    // 將字串調用 reaplce方法 把內嵌的style 和 script 標籤替換為link 和 script標籤
    const newHTML = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
        .replace(regScript, '<script src="./index.js"></script>')

    //寫入 index.html 這個文件
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err){
        if (err) return console.log('寫入HTML頁面失敗!' + err.message)
        console.log('寫入HTML頁面成功')
    })

}
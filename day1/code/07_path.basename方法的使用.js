const path = require('path')

// 定義文件存放路徑
const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)
console.log(fullName)

const nameWithExt = path.basename(fpath, '.html')
console.log(nameWithExt)
const path = require('path')

// 定義文件存放路徑
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext)
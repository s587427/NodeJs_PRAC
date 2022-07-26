const path = require('path')
const fs = require('fs')

// 注意 ../ 會抵消前面的路徑

// const pathStr = path.join('/a', '/b/c', '../', './d', 'e')

// console.log(pathStr) // \a\b\d\e

//fs.readFile(__dirname + '/files/1.txt')

fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf-8', function(err, dataStr){
    if(err){
        return console.log(err.message)
    }

    console.log(dataStr)
})



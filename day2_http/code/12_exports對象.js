console.log(exports)
console.log(module.exports)

console.log(exports === module.exports)

const username ='zs'

module.exports.username = username
exports.age = 18
exports.sayHello = function(){ console.log('大家好')}

console.log(module.exports)


//node 找查目錄順序 index.txt > index.js > index.json > index.node
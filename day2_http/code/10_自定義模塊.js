// 在一個自定義中的默認情況下, module.exports = {}
const age = 20

module.exports.username = '張三'
module.exports.sayHello = function(){ console.log('hello')}
module.exports.age = age


// 讓module.exports 指向一個全新對象

module.exports = {
    name: '孫悟空',
    age: 18
}
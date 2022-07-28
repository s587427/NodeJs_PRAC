// 在外建使用 require 導入一個自定義模塊的時，得到的成員
// 就是那個模塊中 ，通過module.exports 指向的那個對象
const m = require('./10_自定義模塊')

console.log(m)
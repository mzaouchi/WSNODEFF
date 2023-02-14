// console.log("Hello node")

// const Somme=(a,b)=>{
//     return a+b
// }

// console.log(Somme(1,2))

// function Somme(a,b){
//     return a+b
// }

// console.log(Somme(2,8))

// console.log(process.argv)

// const Somme=(a,b)=>{
//     return a+b
// }

// console.log(Somme(Number(process.argv[2]),Number(process.argv[3])))

// console.log(Somme(+process.argv[2],+process.argv[3]))

const obj = require('./LocalModule')
// const Sous = require('./LocalModule')

console.log(obj.Product(+process.argv[2],+process.argv[3]))
console.log(obj.Sous(+process.argv[2],+process.argv[3]))
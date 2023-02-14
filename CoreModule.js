// const fs = require('fs')

// console.log("Start")

// fs.readFile('./Mamino.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// console.log(fs.readFileSync('./Mamino.txt','utf-8'))

// console.log("End")

const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>Raslen</h1>')
    res.end()
}).listen(5000,console.log("Server is running"))
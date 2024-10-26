 //Write a program to print "HELLO WORLD" to the console
 console.log("HELLO WORLD")
//create a sever
const http = require("http")
const server = http.createServer((req , res)=>{
res.write("hello world")
res.end()
});
server.listen(3000,()=>console.log("sever has accessed on http:/localhost:3000"))
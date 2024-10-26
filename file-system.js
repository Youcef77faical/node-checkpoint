
//create file named welcome.txt
const fs = require("fs")
fs.writeFile('welcome.txt','hello node',(arr)=>{
    if (arr) throw arr;
console.log("welcome.txt has been created")
});
//read data from welcome.txt
fs.readFile('welcome.txt','hello!',(arr,data)=>{
    if (arr) throw arr ;
    console.log(data)
})

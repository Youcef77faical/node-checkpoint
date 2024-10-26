const generatpassword = require("generate-password")
const password = generatpassword.generate({
    length:13,
    symbols:true,
    numbers:true,

});
console.log(`generate password: ${password}  `)

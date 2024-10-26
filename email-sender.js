const nodemailer = require('nodemailer');
const { text } = require('stream/consumers');
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"your-email@gmail.com",
        pass:"your-password"
    }
});
const emailpotions ={
    from:"your-email@gmail.com",
    to:"your-email@gmail.com",
    subject: "hello from node.js",
    text:"this is a test email."
}
transporter.sendMail(emailpotions,(error,info)=>{
if(error)
    {return console.log(error)}
console.log("message sent :%s",info.messageId)
})
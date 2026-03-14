import nodemailer from "nodemailer";
import "dotenv/config";

export const verifyEmail=(token,email)=>{
    const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
});
const mailConfiguration={

    from:process.env.MAIL_USER,

    to:email,

    subject:"Email verification",

    text:`Hi! There,You have recently visited 
          our website and entered your mail.
          Please follow the given link to verify your mail
          http://localhost:5173/verify/${token}
          Thanks`
};

transporter.sendMail(mailConfiguration,function(error,info){
    if(error){ throw Error(error);}
    console.log("Email sent successfully ")
    console.log(info)
});
}






const UserSchema = require('../model/UserSchema');
const bcrypt = require('bcrypt');
const wt = require('jsonwebtoken');
const secret = process.env.SECRET;
const nodemailer = require('nodemailer');
const htmlContent = require('../htmlContent/htmlContent');

const transporter = nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure:false,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAiL_PASSWORD
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    }
})

const signup = async (req,resp) => {
    try{

        const existingUser = await UserSchema.findOne({email: req.body.email});


        if(existingUser){
            return resp.status(400).json({'message':'user already exists'});
        }

        const hash = await bcrypt.hash(req.body.password,10);

        let userSchema = new UserSchema({
            email:req.body.email,
            password:hash,
            fullName:req.body.fullName
        });

        await userSchema.save();

        const mailOption = {
            from:process.env.EMAIL_USER,
            to:req.body.email,
            subject:'congratulation your account created successfully',
            text:'your account was created successfully!!!',
            html:htmlContent.replace('[User]', req.body.fullName)
        }

        transporter.sendMail(mailOption,(error,info)=>{
            if(error){
                console.log(error);
            }else {
                console.log('email sent');
            }
        })

        resp.status(201).json({'message':'User was saved !'});

    }catch (e){
        resp.status(500).json({'message':'somthing went wrong',error:e});
    }
}

const login = async (req,resp) => {
    try{

        const existingUser = await UserSchema.findOne({email: req.body.email});


        if(!existingUser){
            return resp.status(404).json({'message':'user nto found !!!'});
        }

        const isConfirmed = await bcrypt.compare(req.body.password,existingUser.password);

        if(!isConfirmed){
            return resp.status(401).json({'message':'user password is wrong !!!'});
        }

        const token= wt.sign({userId:existingUser._id,email:existingUser.email,fullName:existingUser.fullName},
            secret,
            {expiresIn: '5h'});


        resp.status(201).json({'token':token,'message':'User logged !'})
    }catch (e){
        resp.status(500).json({'message':'somthing went wrong',error:e});
    }
}

module.exports = {signup,login}
// authcontrol.js
const User = require("../models/usermodel");
const bcrypt = require('bcryptjs');
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to router");
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Server error" });
    }
};

const registration = async (req, res) => {
    try {
        const {username,email,phone,password}= req.body;
        const userexist = await User.findOne({email});
        if(userexist){
            return res.status(400).json({msg:"email already exist"});
        }
        const usercreated =await  User.create({username,email,phone,password});
        res.status(200).json({msg:usercreated,token: await usercreated.generatetoken(),userId:usercreated._id.toString()});
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Server error" });
    }
};

const login = async(req,res)=>{
    try {
        const {email,password}= req.body;
        const userexist = await User.findOne({email});
        if(!userexist){
            return res.status(400).json({msg:"invalid credentials"});
        }
        const user = await userexist.check(password);

        if (user){
            res.status(200).json({msg:"login succesful",token: await userexist.generatetoken(),userId:userexist._id.toString()});
        }else{
            res.status(401).json({msg:"INVALID CREDENTIALS"});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Server error" });
    }
}

module.exports = { home, registration ,login};

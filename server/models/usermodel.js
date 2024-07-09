const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userschema = new mongoose.Schema({
    username:{
        type : String,
    },
    email:{
        type : String,
    },
    phone:{
        type :String,
    },
    password:{
        type : String,
    },
    isadmin:{
        type: Boolean,
        default: false
    }
});

userschema.pre("save", async function(next){
    const user = this;
    if(!user.isModified("password")){
        return next();
    }

    try {
        const saltround = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltround);
        user.password = hash_password;
        next();
    } catch (error) {
        return next(error);
    }
});

userschema.methods.generatetoken=async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin : this.isAdmin,
        },
            process.env.JWT_SIGN,
            {
                expiresIn:'30d'
            }
        )
    } catch (error) {
        console.error(error);
    }
};

userschema.methods.check=async function(password){
    return bcrypt.compare(password,this.password);
};

const User = mongoose.model("User", userschema);
module.exports = User;
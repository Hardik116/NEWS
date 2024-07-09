const contact = require('../models/contact-model');

const contactform = async(req,res)=>{
    try {
        const response =  req.body;
        await contact.create(response);
        return res.status(200).json({message:"message sent successfully"});

    } catch (error) {
        return res.status(200).json({message:"message not sent"});
    }
}

module.exports =  contactform;
const {Schema,model} = require('mongoose');

const contactschema = new Schema({
    username :{type:String,requires:true},
    email :{type:String,requires:true},
    message :{type:String,requires:true},

});

const contact = new model('contact',contactschema);
module.exports = contact; 
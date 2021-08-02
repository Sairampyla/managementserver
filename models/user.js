



const mongoose = require ('mongoose');

var User = mongoose.model('user',{
   
    email:{type:String},
    password:{type:String}
    
});

module.exports = {User};
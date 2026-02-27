const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require:true,
            minlength:[3, 'First name must be at least 3 characters long'],

        },
        lastname:{
            type:String,
          
            minlength:[3, 'Last name must be at least 3 characters long'],
        },
        email:{
            type:String,
            require:true,
             
        },
        password:{
            type:String,
            required: true,
            minlength:[5, 'Password must be at least 5 charecters are long'],
        },
    }
})
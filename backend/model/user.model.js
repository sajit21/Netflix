import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({


    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,
        default:"" //incase no image is provided
    },
    searchHistory:[
        {
            type:Array, // can hold an array of values
          deafult:[]  
      }
    ]


    }
)

const User=mongoose.model('User',UserSchema)
export default User;
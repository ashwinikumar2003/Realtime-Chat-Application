import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['Available', 'Busy'],
        default: 'Available'
    }
}, {timestamps:true})

export default model("User", userSchema)
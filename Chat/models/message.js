import mongoose, { Schema, model } from "mongoose";

const messageSchema = new Schema({
    sender: {
        type: String,
        required: true,
        ref:'User'
    },
    receiver: {
        type: String,
        required: true,
        ref:'User'
    },
    content: { 
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
})

export default model('Message', messageSchema)
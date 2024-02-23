import mongoose from "mongoose";

const messageScahema = new mongoose.Schema({
    message: String,
    time: String,
    recived: Boolean,
    user: String
})

const message = mongoose.model("Message", messageScahema)
export default message
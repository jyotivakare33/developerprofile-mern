const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    github: String,
    medium: String,
    linkedin: String,
    codechef: String,
    hackerrank: String,
    avatar: String,
    twitter:String,
    company:String,
    blog:String,
    location:String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Developers', userSchema);

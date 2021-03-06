const mongoose = require('mongoose')

const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    SteamID:{
        type: String,
        required: false
    },
    SpotifyID:{
        type: String,
        required: false
    },
    level:{
        type: String,
        required: true
    },
    
},{collection: 'user-data'})

UserSchema.plugin(findOrCreate);

const User = mongoose.model("Users",UserSchema)
module.exports = User
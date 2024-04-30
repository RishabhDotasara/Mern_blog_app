const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username: {type:String,required:true},
    password: {type:String,required:true},
    email: {type:String,required:true}
})

userSchema.pre("save",async function(next){             //keep in mind arrow functions don't bind their own this.
    const encryptedPassword = await bcrypt.hash(this.password,10)
    this.password = encryptedPassword;
    next();
})
module.exports = mongoose.model("User",userSchema);
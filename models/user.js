const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    favoriteAuthor: {
        type: String,
        required: true
    },
    membershipDate: {
        type: Date,
        default: Date.now
    }
});

// plugin handles password hashing
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
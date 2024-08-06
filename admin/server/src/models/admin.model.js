const { mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    email: String,
    passsword: String
});

module.exports = {
    Admin: mongoose.model('Admins', schema)
} 
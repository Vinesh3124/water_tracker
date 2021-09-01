const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name: {type: String, required: true},
    amount: {type: Number, required: true},
    date: {type: String, required: true},
    gender: {type: String, required: true},
    dob: {type: String, required: true},
    history: {type: Array}
})

module.exports = mongoose.model("user", userSchema)
const express = require('express')
const User = require("../model/user.model")

const router = express.Router()

router.get("", async(req, res) => {
    const user = await User.find({}).lean().exec()
    res.status(200).json({data: user})
})

router.post("/newUser", async(req, res) => {
    const user = await User.create(req.body)
    res.status(201).json({data: user})
})

module.exports = router;
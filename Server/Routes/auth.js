const express = require('express')
const UserModel = require('../models/auth')


const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
        return res.status(200).json({ message: "User Already Exist" })
    }

    UserModel.create({
        username,
        email,
        password
    }).then(result => {
        console.log(result)
    }).catch(err => console.log(err))

    return res.json({ message: "record Saved" })
})



module.exports = router;
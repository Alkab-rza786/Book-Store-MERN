const express = require('express');
const UserModel = require('../models/auth'); // Ensure this path is correct
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const hashpassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            username,
            email,
            password: hashpassword
        });

        const token = jwt.sign({ id: newUser._id }, "alkab", { expiresIn: '1h' }); // Add an expiration time to the token
        res.cookie("token", token, { httpOnly: true });

        return res.status(201).json({ msg: "Registered successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const token = jwt.sign({ id: user._id }, "alkab", { expiresIn: '1h' }); // Add an expiration time to the token
        let data = res.cookie("token", token);
        console.log(data);

        return res.status(200).json({ msg: "Login successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server error" });
    }
});

router.post('/logout', (req, res) => {
    res.cookie("token", "", { expires: new Date(0) });
    res.status(200).json({ msg: "Logged out successfully" });
});



module.exports = router; 

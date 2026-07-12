const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// SIGNUP
router.post('/signup', async (req, res) => {
    console.log("signP DATA AAYA:",req.body);
    try{
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if(userExists) return res.status(400).json({ error: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "Account Created!", token: "fake-token" });
    }catch(err){
        console.log("SIGNUP ERROR: ",err);
        res.status(500).json({ error: err.message });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    console.log("LOGIN DATA AAYA: ",req.body);
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ error: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        res.status(200).json({ message: "Login Successful", token: "fake-token", ...user._doc });
    }catch(err){
        console.log("login  Error: ",err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
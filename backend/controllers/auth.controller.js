const User = require('./../models/userModel');
const bcrypt = require('bcryptjs');
const generateTokenandSetCookie = require('./../utils/jwtToken');

const signup = async (req, res) => {
    try {
        const { firstName, lastName, username, password, confirmPassword,email } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Password does not match' });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const PFP = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

        const newUser = new User({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            profilePicture: PFP,
            email,
        });
        if(newUser){
            generateTokenandSetCookie(newUser._id,res);
            await newUser.save();
        }else{
            return res.status(400).json({ message: 'User not created' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const login = async (req, res) => {            
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({ message: 'User not found' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        generateTokenandSetCookie(user._id,res);
        res.status(200).json({ message: 'User logged in successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const logout = (req, res) => {
    try {
        res.cookie('token', '', { maxAge: 0 });
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
        
    }
};

module.exports = { login, signup, logout };
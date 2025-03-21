const jwt = require('jsonwebtoken');  
const User = require('./../models/userModel'); 

const protectRoute = async (req, res, next) => {
    try {
        const tokentoverify = req.cookies.token;
        console.log("Received Token:", tokentoverify);  // Debugging log

        if (!tokentoverify) {
            console.log("No token found in cookies");
            return res.status(401).send({ error: "Unauthorized" });
        }

        const decoded = jwt.verify(tokentoverify, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);

        if (!decoded) {
            console.log("Invalid token");
            return res.status(401).send({ error: "Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password");
        console.log("Authenticated User:", user);

        if (!user) {
            console.log("User not found in DB");
            return res.status(401).send({ error: "User not found" });
        }

        req.user = user;
        next(); // Move to the next middleware or controller
    } catch (error) {
        console.log("Error in protectRoute:", error);
        res.status(401).send({ error: "Unauthorized" });
    }
};

module.exports = protectRoute;
const User = require("../models/userModel");
const getUsersforSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");
        res.status(200).json(allUsers);
        
    } catch (error) {
        console.error("Error in getUsersforSidebar:", error);
        res.status(500).json({ error: "Internal server error" });
        
    }
}

module.exports = { getUsersforSidebar };
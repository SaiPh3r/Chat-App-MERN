const conversationModel = require("../models/conversationModel");
const MessageModel = require("../models/messageModel");
const { getRecieverSocketId } = require("../socket/socket");

const sendMessage = async (req, res) => {
    try {
        const message = req.body.message;
        const receiver = req.params.id;
        const sender = req.user._id;

        // Find or create a conversation
        let conversation = await conversationModel.findOne({ participants: { $all: [sender, receiver] } });
        if (!conversation) {
            conversation = await conversationModel.create({ participants: [sender, receiver], messages: [] });
        }

        // Create and save new message
        const newMessage = new MessageModel({
            senderId: sender,
            receiverId: receiver, // ✅ Fixed: Using receiver instead of undefined receiverId
            message,
        });

        await newMessage.save();

        // Add message to conversation
        conversation.messages.push(newMessage._id);
        await conversation.save();

        // ✅ Fix: Use `receiver` instead of `receiverId`
        const receiverSocketId = getRecieverSocketId(receiver);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error in sendMessage:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getMessages = async (req, res) => {
    try {
        const receiver = req.params.id;
        const sender = req.user._id;

        const conversation = await conversationModel
            .findOne({ participants: { $all: [sender, receiver] } })
            .populate("messages");  // Populate the messages field  

        if (!conversation) {
            return res.status(200).json({ messages: [] });
        }

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.error("Error in getMessages:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { sendMessage, getMessages };

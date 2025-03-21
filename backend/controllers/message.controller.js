const conversationModel = require("../models/conversationModel");
const MessageModel = require("../models/messageModel");

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
            receiverId: receiver,
            message,
        });

        await newMessage.save();

        // Add message to conversation
        conversation.messages.push(newMessage._id);
        await conversation.save();

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage
        });
    } catch (error) { 
        console.error("Error in sendMessage:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { sendMessage };

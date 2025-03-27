import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { setMessages } = useConversation(); // Removed `messages` since it's not needed

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        };
    }, [socket, setMessages]); // ✅ Removed `messages` from dependency array

    return null;
};

export default useListenMessages;
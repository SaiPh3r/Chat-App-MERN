import { createContext } from "react";
export const SocketContext = createContext();
import { useState,useEffect } from "react";
import { useAuthContext } from "./Authcontext";
import io from 'socket.io-client'


export const SocketContextProvider = ({ children }) => {
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser){
            const socket = io("http://localhost:3000");
            setSocket(socket);
            return()=>socket.close()
        }

        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }


        
    },[])
    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>;
};             
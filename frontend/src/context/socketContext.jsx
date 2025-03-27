import { createContext } from "react";
import { useState,useEffect } from "react";
import { useAuthContext } from "./Authcontext";
import io from 'socket.io-client'
import { useContext } from "react";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};




export const SocketContextProvider = ({ children }) => {
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser){
            const socket = io("http://localhost:3000",
                {
                    query: {
                        userId: authUser._id,
                    },
                }
            );
            setSocket(socket);
            
            socket.on('getOnlineUsers',(users)=>{
                setOnlineUsers(users);
                
            })


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

export default SocketContext
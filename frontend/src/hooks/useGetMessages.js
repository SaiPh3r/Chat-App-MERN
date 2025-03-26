import { useEffect } from 'react';
import { useState } from 'react'
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
    const[loading,setLoading] = useState(false);
    const {messages,setMessages,selectedConversation} = useConversation();

    useEffect(()=>{
        const getMessages = async ()=>{
            setLoading(true);
            try {
                const res = await fetch(`api/messages/${selectedConversation._id}`);
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error)
                }
                setMessages(data);
                
            } catch (error) {
                toast.error(error.message   || "Something went wrong");
                
            }
            finally{
                setLoading(false);
            }
        }
        if(selectedConversation?._id) {
            getMessages();
        }
    },[selectedConversation?._id,setMessages])
    return {loading,messages}

}

export default useGetMessages
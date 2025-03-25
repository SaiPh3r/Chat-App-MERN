import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { LuMessageSquareText } from "react-icons/lu";
import useConversation from '../../zustand/useConversation';

const MessageContainer = (conversation) => {
  const{selectedConversation, setSelectedConversation} = useConversation()
  return (
    <div className='md:min-w-[650px] w-full max-w-4xl flex flex-col h-full bg-black rounded-lg overflow-hidden border border-yellow-500/10 shadow-xl shadow-yellow-500/5 transition-all duration-300 hover:scale-[1.01]'>
      {!selectedConversation ? (
        <NoChatsSelected />
      ) : (
        <>
          {/* Header */}
          <div className='bg-yellow-400 px-4 py-3 flex items-center justify-between'>
            <div>
              <span className='text-black mr-2'>To:</span>
              <span className='text-black font-bold'>{selectedConversation.username}</span>
            </div>
          </div>
          {/* Messages area */}
          <div className="flex-grow overflow-y-auto p-4 bg-black">
            <Messages />
          </div>
          {/* Message input */}
          <div className="p-4 bg-black">
            <MessageInput className='bg-gray-900 border border-yellow-500/20 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300 rounded-xl'/>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatsSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black text-center group">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-4 transform transition-all duration-300 hover:scale-105">
        <p>Welcome John Doe </p>
        <p>Select a chat to start messaging</p>
        <div className="text-6xl text-center text-yellow-500 transform group-hover:rotate-6 transition-transform duration-300">
          <LuMessageSquareText />
        </div>
      </div>
    </div>
  );
};
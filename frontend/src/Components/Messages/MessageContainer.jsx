import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { LuMessageSquareText } from "react-icons/lu";

const MessageContainer = () => {
  const nochatselected = true;
  return (
    <div className='md:min-w-[650px] w-full max-w-4xl flex flex-col h-full bg-black rounded-lg'>
      {nochatselected ? (
        <NoChatsSelected />
      ) : (
        <>
          {/* Header */}
          <div className='bg-yellow-400 px-4 py-2 rounded-t-lg'>
            <span className='text-black'>To:</span>{" "}
            <span className='text-black font-bold'>John Doe</span>
          </div>

          {/* Messages area - give this a flex-grow to push input to bottom */}
          <div className="flex-grow overflow-y-auto p-4">
            <Messages />
          </div>
          
          {/* Message input at bottom - no border */}
          <div className="px-0 py-0">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatsSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full  border-yellow-500">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome John Doe </p>
        <p>Select a chat to start messaging</p>
        <div className="text-3xl md:text-6xl text-center"><LuMessageSquareText /></div>
      </div>
    </div>
  );
};
import React from 'react';
import Messages from './Messages';

const MessageContainer = () => {
  return (
    <div className='md:min-w-[650px] w-full max-w-4xl  flex flex-col  bg-black p-4 rounded-lg'>
      {/* Header */}
      <div className='bg-yellow-400 px-4 py-2 mb-2 rounded-t-lg'>
        <span className='label-text text-black'>To</span>{" "}
        <span className='text-gray-900 font-bold'>John Doe</span>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2">
        <Messages />

      </div>
    </div>
  );
};

export default MessageContainer;
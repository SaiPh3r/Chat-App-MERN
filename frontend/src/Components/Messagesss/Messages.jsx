import React from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkelleton from '../skeletons/messageSkelleton';

const Messages = () => {
  const { loading, messages } = useGetMessages();

  return (
    <div className='px-4 flex-1 overflow-y-auto max-h-[500px]'>
      {!loading && messages.length > 0 && messages.map((message) => <Message key={message._id} message={message} />)}
      {loading && [...Array(3)].map((_, index) => <MessageSkelleton key={index} /> )}
      {!loading && messages.length === 0 && (
          <p className='text-red-700'>Send a message to start the conversation</p>

      )}
    </div>
  );
};

export default Messages;
import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkelleton from '../skeletons/messageSkelleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);


  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-y-auto max-h-[500px]'>
      {!loading && messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))
      }
      {loading && [...Array(3)].map((_, index) => <MessageSkelleton key={index} /> )}
      {!loading && messages.length === 0 && (
        <p className='text-red-700'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;

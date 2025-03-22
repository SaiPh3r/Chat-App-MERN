import React from 'react'
import Message from './Message';

const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-y-auto max-h-[500px]'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages;
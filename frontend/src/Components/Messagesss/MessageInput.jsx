import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message)
    setMessage('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex items-center border-yellow-500'
    >
      <input
        type='text'
        className='flex-1 bg-gray-900 text-white px-4 py-3 focus:outline-none'
        placeholder='Send a message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={loading}
      />
      <button
        type='submit'
        className='bg-blue-600 text-white px-5 py-3 ml-2 mr-2 rounded-md transition-colors cursor-pointer hover:bg-blue-700 flex items-center'
        disabled={loading}
      >
        {loading ? (
          <div className='animate-spin h-5 w-5 border-t-2 border-white rounded-full'></div>
        ) : (
          'Send'
        )}
      </button>
    </form>
  )
}

export default MessageInput

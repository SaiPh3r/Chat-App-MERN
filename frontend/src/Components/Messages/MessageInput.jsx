import React from 'react'

const MessageInput = () => {
  return (
    <div className='w-full flex items-center  border-yellow-500'>
      <input 
        type='text' 
        className='flex-1 bg-gray-900 text-white px-4 py-3 focus:outline-none' 
        placeholder='Send a message'
      />
      <button 
        type='button'
        className='bg-blue-600 text-white px-5 py-3 ml-2 mr-2 rounded-md transition-colors cursor-pointer hover:bg-blue-700'

      >
        Send
      </button>
    </div>
  )
}

export default MessageInput

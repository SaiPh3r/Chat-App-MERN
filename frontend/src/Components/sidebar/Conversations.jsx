import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {
  const {loader,conversations} = useGetConversations()
  console.log(conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation) => (
        <Conversation key={conversation._id} conversation = {conversation}/>
      ))}
    </div>
  )
}

export default Conversations
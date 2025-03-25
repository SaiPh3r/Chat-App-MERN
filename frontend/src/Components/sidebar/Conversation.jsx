import React, { useEffect } from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({conversation}) => {
  const{selectedConversation, setSelectedConversation} = useConversation()
  const isSelected = selectedConversation?._id === conversation._id
  useEffect(() => {
    return()=>setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <>
      <div onClick={() => setSelectedConversation(conversation)} className={`flex gap-3 items-center rounded-lg p-3 cursor-pointer transition-all duration-300 
      ${isSelected ? 'bg-amber-600/30 shadow-lg shadow-amber-500/40 scale-[1.02]' : 'hover:bg-amber-600/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02]'}`}>
        <div className="avatar online">
          <div className="w-14 h-14 rounded-full border-2 border-amber-500 shadow-md shadow-amber-500/30">
            <img src={conversation.profilePicture} className="object-cover" />
          </div>
        </div>

        {/* <div className="avatar offline">
            <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div> */}

        <div className='flex flex-col flex-1'>
          <div className='flex justify-between'>
            <h3 className='text-lg font-semibold text-gray-200 transition-all duration-300 hover:text-amber-400'>{conversation.firstName} {conversation.lastName}</h3>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mx-3"></div>
    </>
  )
}

export default Conversation
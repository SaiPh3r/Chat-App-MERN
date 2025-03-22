import React from 'react'

const Message = () => {
 return (
   <div className="chat chat-end">
     <div className="chat-image avatar">
       <div className="w-10 rounded-full ring-2 ring-amber-500/30 overflow-hidden">
         <img
           alt="Tailwind CSS chat bubble component"
           src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
           className="object-cover"
         />
       </div>
     </div>
     <div className="chat-bubble text-white bg-blue-600 shadow-md shadow-blue-900/20 rounded-2xl px-4 py-2 max-w-xs">
       Hi! What is up?
     </div>
     <div className="chat-footer opacity-70 text-xs flex gap-1 items-center font-medium text-gray-500 mr-2">
       12:42
     </div>
   </div>
 );
};

export default Message;
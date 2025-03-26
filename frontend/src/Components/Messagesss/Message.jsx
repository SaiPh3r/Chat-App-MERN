import React from 'react'
import {useAuthContext} from '../../context/Authcontext';
import useConversation from '../../zustand/useConversation';
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser.user._id
  const chatClassName = fromMe? 'chat-end':'chat-start'
  const profilePic = fromMe? authUser.user.profilePicture:selectedConversation.profilePicture
  const bgColor = fromMe? 'bg-blue-800' :""
  console.log('Auth User:', authUser);
//   console.log('Auth User Profile Picture:', authUser?.profilePicture);
// console.log('Selected Conversation:', selectedConversation);
// console.log('Selected Conversation Profile Picture:', selectedConversation?.profilePicture);
// console.log('Final Profile Pic:', profilePic);
console.log(message)

  
 return (
   <div className={`chat ${chatClassName}`}>
     <div className="chat-image avatar">
       <div className="w-10 rounded-full ring-2 ring-amber-500/30 overflow-hidden">
         <img
           alt="Tailwind CSS chat bubble component"
           src={profilePic}
           className="object-cover"
         />
       </div>
     </div>
     <div className={`chat-bubble text-white bg-blue-600 ${bgColor}  shadow-md shadow-blue-900/20 rounded-2xl px-4 py-2 max-w-xs`}>
       {message.message}
     </div>
     <div className="chat-footer opacity-70 text-xs flex gap-1 items-center font-medium text-gray-500 mr-2">
     {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
     </div>
   </div>
 );
};

export default Message;
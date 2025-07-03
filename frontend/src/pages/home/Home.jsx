import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import MessageContainer from '../../Components/Messagesss/MessageContainer'


const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden'>
        <Sidebar/>
        <MessageContainer/>
        
        
    </div>
    
  )
}

export default Home
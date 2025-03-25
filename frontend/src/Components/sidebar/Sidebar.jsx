import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='w-72 bg-black p-4 flex flex-col h-full border-r border-yellow-500/20 shadow-xl shadow-yellow-500/5 transition-all duration-300'>
      <div className='mb-4 group'>
        <SearchInput/>
        <div className='h-0.5 bg-yellow-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-1'></div>
      </div>
      
      <div className='border-t border-yellow-500/30 my-4 opacity-50'></div>
      
      <div className='flex-grow overflow-y-auto'>
        <Conversations/>
      </div>
      
      <div className='mt-4 pt-4 border-t border-yellow-500/30'>
        <LogoutButton className='hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105'/>
      </div>
    </div>
  )
}

export default Sidebar
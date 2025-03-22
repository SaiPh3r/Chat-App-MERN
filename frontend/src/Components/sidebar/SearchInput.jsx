import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'> 
        <input type='text' placeholder='Search...' className='input input-bodered rounded-full'></input>
        <button type='submit' className='btn btn-circle bg-amber-400 text-white'>
            <FaSearch/>
            
        </button>
    </form>
  )
}

export default SearchInput
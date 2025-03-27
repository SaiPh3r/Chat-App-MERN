import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversations = () => {
    const[loader,setLoader] = useState(false)
    const[conversations,setConversations] = useState([])

    useEffect(() => {
        const getConversations = async()=>{
            setLoader(true)
            try {
                const res = await fetch('/api/users')
                const data = await res.json()
                if(data.error){
                    throw new Error(data.error)

                }
                setConversations(data)
                
            } catch (error) {
                toast.error(error.message)
                
            }
            finally{
                setLoader(false)
            }
        }
        getConversations()
    }, [])
    return {loader,conversations}
}

export default useGetConversations

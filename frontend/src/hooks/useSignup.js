import { useState } from 'react'
import toast from 'react-hot-toast';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  
  const signup = async(firstName,lastName,username,password,confirmPassword,email) => {
    const success = handleInputErrors(firstName,lastName,username,password,confirmPassword,email)
    if(!success) {
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({firstName,lastName,username,password,confirmPassword,email})
      })
      const data = await res.json()
      console.log(data)
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }
  
  return {loading, signup}
}

export default useSignup


function handleInputErrors(firstName, lastName, username, password, confirmPassword,email) {
  if(firstName.length<3) {
    toast.error("First name must be atleast 3 characters long")
    return false
  }
  if(lastName.length<3) {
    toast.error("Last name must be atleast 3 characters long")
    return false
  }
  if(!username) {
    toast.error("Username must be atleast 3 characters long")
    return false
  }
  if(password.length < 6) {
    toast.error("Password must be atleast 6 characters long'")
    return false
  }
  if(password !== confirmPassword) {
    toast.error("Passwords do not match")
    return false
  }
  
  return true
}
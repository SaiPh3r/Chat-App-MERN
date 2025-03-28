import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/Authcontext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext);
  
  const signup = async (firstName, lastName, username, password, confirmPassword, email) => {
    // Validate input before making a request
    const success = handleInputErrors(firstName, lastName, username, password, confirmPassword, email);
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstName, lastName, username, password, confirmPassword, email })
      });

      const data = await res.json();

      if (!res.ok) {  
        throw new Error(data.message || "Signup failed");
      }

      // Save user data in local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data); // Update authentication state

      toast.success("Signup successful!");
      
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  
  return { loading, signup };
};

export default useSignup;

// Function to validate form inputs
function handleInputErrors(firstName, lastName, username, password, confirmPassword, email) {
  if (firstName.length < 3) {
    toast.error("First name must be at least 3 characters long");
    return false;
  }
  if (lastName.length < 3) {
    toast.error("Last name must be at least 3 characters long");
    return false;
  }
  if (!username || username.length < 3) {
    toast.error("Username must be at least 3 characters long");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (!email || !email.includes('@')) {
    toast.error("Please provide a valid email");
    return false;
  }
  
  return true;
}
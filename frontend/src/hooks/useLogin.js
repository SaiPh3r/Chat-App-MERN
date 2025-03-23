import { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/Authcontext';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext); // Get Auth Context

  const login = async (username, password) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Invalid username or password");
      }

      // Save user data and update auth context
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useLogin()
  const handleSubmit = async(e) => { 
    e.preventDefault();
    await login(username, password);  
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[350px] h-[500px] rounded-full bg-yellow-500/10 blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-yellow-600/5 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-yellow-700/5 blur-2xl"></div>

      {/* Login Card with Improved Styling */}
      <div className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gray-900/90 backdrop-blur-lg border border-gray-700/70 transition-all duration-300 hover:shadow-yellow-500/20 hover:border-gray-600 z-10">
        <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-xl -mr-20 -mt-20"></div>
        
        <h1 className="text-4xl font-bold text-center text-gray-200 mb-8 relative">
          Login <span className="text-yellow-500 relative">
            SaiLink
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></span>
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Username
            </label>
            <input 
              type="text" 
              placeholder="Enter username" 
              className="w-full h-12 px-4 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-md focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all duration-200 backdrop-blur-lg hover:border-gray-500" 
              value = {username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          {/* Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="w-full h-12 px-4 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-md focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all duration-200 backdrop-blur-lg hover:border-gray-500"
              value={password}  
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          {/* Login Button with Enhanced Styling */}
          <div className="mt-8">
            <button className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black py-3 h-12 rounded-md font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-yellow-500/40 group">
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                Login
              </span>
              <span className="absolute inset-0 bg-white/10 w-0 group-hover:w-full transition-all duration-500"></span>
            </button>
          </div>

          {/* Signup Redirect with Enhanced Styling */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account? 
              <Link to="/signup" className="text-yellow-500 hover:text-yellow-400 hover:underline font-medium transition-colors duration-200 ml-1 relative group">
                Sign up
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
import React from 'react';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[350px] h-[500px] rounded-3xl bg-yellow-500/10 blur-3xl"></div>
      </div>

      {/* Signup Card */}
      <div className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gray-900 border border-gray-700 transition-all duration-300 hover:shadow-yellow-500/20">
        <h1 className="text-4xl font-bold text-center text-gray-200 mb-6">
          Signup <span className="text-yellow-500">SaiLink</span>
        </h1>

        <form className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              First Name
            </label>
            <input 
              type="text" 
              placeholder="Enter first name" 
              className="w-full h-12 px-4 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-md focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all duration-200 backdrop-blur-lg" 
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Last Name
            </label>
            <input 
              type="text" 
              placeholder="Enter last name" 
              className="w-full h-12 px-4 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-md focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all duration-200 backdrop-blur-lg" 
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Username
            </label>
            <input 
              type="text" 
              placeholder="Enter username" 
              className="w-full h-12 px-4 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-md focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all duration-200 backdrop-blur-lg" 
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <input 
              type="password" 
              placeholder="Enter password" 
              className="w-full h-12 px-4 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-md focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all duration-200 backdrop-blur-lg" 
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Confirm Password
            </label>
            <input 
              type="password" 
              placeholder="Confirm password" 
              className="w-full h-12 px-4 bg-gray-800/50 text-gray-200 border border-gray-600 rounded-md focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all duration-200 backdrop-blur-lg" 
            />
          </div>

          {/* Signup Button */}
          <div className="mt-8">
            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black py-3 h-12 rounded-md font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-yellow-500/30">
              Signup
            </button>
          </div>

          {/* Login Redirect */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account? 
              <a href="#" className="text-yellow-500 hover:text-yellow-400 hover:underline font-medium transition-colors duration-200 ml-1">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
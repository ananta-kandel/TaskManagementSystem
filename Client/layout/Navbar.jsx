import React from 'react';
import { Home, CheckSquare, LogIn, UserPlus } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and main nav */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              {/* <CheckSquare className="h-6 w-6" /> */}
              <span className="font-bold text-xl">TaskMaster</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="/" className="flex items-center space-x-1 hover:text-blue-200">
                {/* <Home className="h-4 w-4" /> */}
                <span>Home</span>
              </a>
              <a href="/tasks" className="flex items-center space-x-1 hover:text-blue-200">
                {/* <CheckSquare className="h-4 w-4" /> */}
                <span>Tasks</span>
              </a>
            </div>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            <a href="/login" className="flex items-center space-x-1 px-4 py-2 rounded hover:bg-blue-800">
              {/* <LogIn className="h-4 w-4" /> */}
              <span>Login</span>
            </a>
            <a href="/register" className="flex items-center space-x-1 bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">
              {/* <UserPlus className="h-4 w-4" /> */}
              <span>Register</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
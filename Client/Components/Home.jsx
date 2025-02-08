import React from 'react';
import { CheckCircle, Star, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Manage Tasks with Ease
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Stay organized and boost your productivity with our powerful task management system
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            {/* <CheckCircle className="h-12 w-12 text-blue-900 mx-auto mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">Easy Task Creation</h3>
            <p className="text-gray-600">
              Create and organize tasks quickly with our intuitive interface
            </p>
          </div>
          <div className="text-center p-6">
            {/* <Star className="h-12 w-12 text-blue-900 mx-auto mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">Priority Management</h3>
            <p className="text-gray-600">
              Set task priorities and never miss important deadlines
            </p>
          </div>
          <div className="text-center p-6">
            {/* <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-gray-600">
              Work together with your team members seamlessly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
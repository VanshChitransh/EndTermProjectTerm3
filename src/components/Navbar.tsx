import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 
      'text-blue-600 dark:text-blue-400' : 
      'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200';
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-gray-900 dark:text-white">GitHub Finder</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>
              About
            </Link>
            <Link to="/privacy" className={`${isActive('/privacy')} transition-colors duration-200`}>
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
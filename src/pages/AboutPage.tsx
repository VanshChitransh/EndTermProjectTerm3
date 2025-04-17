import React from 'react';
import { Info, Mail, Github } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <Info className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About Us</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            GitHub User Finder is a modern web application designed to help developers 
            and recruiters easily find and explore GitHub profiles. Our tool provides 
            a simple and intuitive way to access public GitHub user information and 
            their top repositories.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We aim to make GitHub profile discovery and exploration as simple as possible, 
            helping connect developers and making open source contribution more accessible.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
            Contact Us
          </h2>
          <div className="space-y-4">
            <a 
              href="mailto:support@githubfinder.com"
              className="flex items-center text-blue-600 dark:text-blue-400 
                hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              support@githubfinder.com
            </a>
            <a 
              href="https://github.com/githubfinder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 
                hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              Follow us on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
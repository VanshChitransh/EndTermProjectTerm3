import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We value your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data when 
            you use our GitHub User Finder application.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our application only processes publicly available information from GitHub's API. 
            We do not store any personal data or tracking information about our users.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The GitHub profile information displayed in our application is used solely for 
            the purpose of showing public GitHub data. We do not use this information for 
            any other purposes.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
            Data Security
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We implement appropriate security measures to protect against unauthorized access, 
            alteration, disclosure, or destruction of data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
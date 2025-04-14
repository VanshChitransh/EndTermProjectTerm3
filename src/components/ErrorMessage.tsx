import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 
      p-4 rounded-md flex items-start mt-6">
      <AlertCircle className="text-red-500 dark:text-red-400 mr-3 flex-shrink-0 mt-0.5" size={20} />
      <div>
        <h3 className="text-red-800 dark:text-red-200 font-medium">Error</h3>
        <p className="text-red-700 dark:text-red-300 mt-1">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
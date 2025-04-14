import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'medium' }) => {
  const sizeClass = {
    small: 'w-5 h-5 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4',
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className={`${sizeClass[size]} border-t-blue-500 dark:border-t-blue-400 
        border-blue-200 dark:border-blue-700 rounded-full animate-spin`} />
    </div>
  );
};

export default LoadingSpinner;
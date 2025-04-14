import React from 'react';
import { GitHubRepo } from '../types';
import { Star, GitFork, Code } from 'lucide-react';

interface RepositoryItemProps {
  repo: GitHubRepo;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repo }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm 
      border border-gray-100 dark:border-gray-700 p-4 
      transition-all duration-200 hover:shadow-md 
      hover:border-gray-200 dark:hover:border-gray-600">
      <div className="flex justify-between items-start">
        <div>
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-600 dark:text-blue-400 
              hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            {repo.name}
          </a>
          
          {repo.description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
              {repo.description}
            </p>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-3">
        <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
          <Star size={16} className="mr-1 text-amber-500" />
          <span>{repo.stargazers_count.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
          <GitFork size={16} className="mr-1" />
          <span>{repo.forks_count.toLocaleString()}</span>
        </div>
        
        {repo.language && (
          <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
            <Code size={16} className="mr-1" />
            <span>{repo.language}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepositoryItem;
import React from 'react';
import { GitHubUser } from '../types';
import { MapPin, Users, GitFork, Link as LinkIcon } from 'lucide-react';

interface ProfileCardProps {
  user: GitHubUser;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
      border border-gray-100 dark:border-gray-700 
      transition-all duration-300 hover:shadow-lg">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-24"></div>
      
      <div className="px-6 py-4 relative">
        <div className="absolute -top-12 left-6 border-4 border-white dark:border-gray-800 
          rounded-full overflow-hidden shadow-md">
          <img 
            src={user.avatar_url} 
            alt={`${user.login}'s avatar`} 
            className="w-24 h-24 object-cover"
          />
        </div>
        
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {user.name || user.login}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-2">@{user.login}</p>
            </div>
            <a 
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-0 inline-flex items-center text-sm 
                text-blue-600 dark:text-blue-400 
                hover:text-blue-800 dark:hover:text-blue-300 
                transition-colors"
            >
              <LinkIcon size={16} className="mr-1" />
              View on GitHub
            </a>
          </div>
          
          {user.bio && (
            <p className="text-gray-700 dark:text-gray-300 my-4">{user.bio}</p>
          )}
          
          <div className="flex flex-wrap gap-4 mt-4">
            {user.location && (
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin size={16} className="mr-1" />
                <span>{user.location}</span>
              </div>
            )}
            
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Users size={16} className="mr-1" />
              <span>{user.followers} followers · {user.following} following</span>
            </div>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <GitFork size={16} className="mr-1" />
              <span>{user.public_repos} repositories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
import React from 'react';
import { GitHubRepo } from '../types';
import RepositoryItem from './RepositoryItem';

interface RepositoryListProps {
  repositories: GitHubRepo[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  if (repositories.length === 0) {
    return (
      <div className="text-center py-6 bg-gray-50 dark:bg-gray-800 rounded-lg mt-6">
        <p className="text-gray-500 dark:text-gray-400">
          No repositories found for this user.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Top Repositories
      </h3>
      <div className="space-y-4">
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import RepositoryList from '../components/RepositoryList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { fetchUser, fetchUserRepos, getTopRepositories } from '../services/github';
import { GitHubUser, GitHubRepo } from '../types';

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      if (!username) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const userData = await fetchUser(username);
        setUser(userData);
        
        const repos = await fetchUserRepos(username);
        const topRepos = getTopRepositories(repos, 5);
        setRepositories(topRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [username]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <LoadingSpinner size="large" />
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          Loading profile...
        </p>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        to="/"
        className="mb-6 flex items-center text-gray-600 dark:text-gray-300 
          hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        ← Back to search
      </Link>
      
      <ProfileCard user={user} />
      <RepositoryList repositories={repositories} />
    </div>
  );
};

export default ProfilePage;
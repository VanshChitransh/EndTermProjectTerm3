import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Github } from 'lucide-react';
import { fetchUser } from '../services/github';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await fetchUser(username);
      navigate(`/profile/${username}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-blue-600 dark:text-blue-400 mb-6">
        <Github size={64} />
      </div>
      
      <Search onSearch={handleSearch} isLoading={isLoading} />
      
      {isLoading && (
        <div className="mt-12">
          <LoadingSpinner size="large" />
          <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
            Searching for user...
          </p>
        </div>
      )}
      
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default HomePage;
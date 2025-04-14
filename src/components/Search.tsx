import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

const Search: React.FC<SearchProps> = ({ onSearch, isLoading }) => {
  const [username, setUsername] = useState('');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
          GitHub User Finder
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Enter a username to discover GitHub profiles
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search for a GitHub user..."
          className="w-full bg-white dark:bg-gray-800 rounded-lg px-4 py-3 pl-12 
            shadow-sm border border-gray-200 dark:border-gray-700
            focus:border-blue-500 dark:focus:border-blue-400 
            focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 
            outline-none transition duration-200 
            text-gray-900 dark:text-gray-100
            placeholder-gray-500 dark:placeholder-gray-400"
          disabled={isLoading}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
          <SearchIcon size={20} />
        </div>
        <button
          type="submit"
          className={`absolute right-3 top-1/2 -translate-y-1/2 
            bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
            text-white rounded-md px-3 py-1 text-sm font-medium 
            transition duration-150 ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
          disabled={isLoading || !username.trim()}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default Search;
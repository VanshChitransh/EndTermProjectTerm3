import axios from 'axios';
import { GitHubUser, GitHubRepo } from '../types';

const baseURL = 'https://api.github.com';

export const fetchUser = async (username: string): Promise<GitHubUser> => {
  try {
    const response = await axios.get<GitHubUser>(`${baseURL}/users/${username}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error('User not found. Please check the username and try again.');
      }
      if (error.response?.status === 403) {
        throw new Error('API rate limit exceeded. Please try again later.');
      }
    }
    throw new Error('Failed to fetch user data. Please try again.');
  }
};

export const fetchUserRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await axios.get<GitHubRepo[]>(
      `${baseURL}/users/${username}/repos?per_page=100&sort=updated`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error('Repositories not found for this user.');
      }
      if (error.response?.status === 403) {
        throw new Error('API rate limit exceeded. Please try again later.');
      }
    }
    throw new Error('Failed to fetch repositories. Please try again.');
  }
};

export const getTopRepositories = (repos: GitHubRepo[], count: number = 5): GitHubRepo[] => {
  return [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, count);
};
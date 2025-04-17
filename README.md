# GitHub User Finder

A modern React application that allows you to search for GitHub users and view their profiles along with their top repositories. Built with React, TypeScript, and Tailwind CSS.

## Features

- Search for GitHub users by username
- View detailed user profiles including:
  - Avatar and basic information
  - Bio and location
  - Follower and following counts
  - Public repository count
- Display top 5 repositories sorted by stars
- Dark mode support with system preference detection
- Responsive design for all screen sizes
- Loading states and error handling
- Clean and modern UI with hover effects

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Axios for API requests
- Lucide React for icons
- Vite for build tooling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the provided local URL

## Project Structure

- `src/components/` - React components
- `src/hooks/` - Custom React hooks
- `src/services/` - API service functions
- `src/types/` - TypeScript interfaces
- `src/App.tsx` - Main application component

## API Integration

This project uses the GitHub REST API to fetch:
- User profile information
- User repositories
- Repository statistics

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project as a template for your own work.
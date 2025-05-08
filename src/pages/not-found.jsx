import React from 'react';
import { Link } from 'wouter';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center px-4 py-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <a className="px-5 py-2 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white rounded-md font-medium hover:opacity-90 transition-opacity">
            Go Back Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
import React from "react";

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-white opacity-90">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-purple-500"></div>
    </div>
  );
};

export default LoadingSpinner;

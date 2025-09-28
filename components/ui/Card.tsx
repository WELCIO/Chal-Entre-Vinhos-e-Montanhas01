
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  darkMode: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', darkMode }) => {
  const cardClasses = darkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white/80 backdrop-blur-sm border-orange-200';
  
  return (
    <div className={`border rounded-2xl p-6 shadow-lg ${cardClasses} ${className}`}>
      {children}
    </div>
  );
};

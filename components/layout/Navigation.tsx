import React from 'react';
import { NAV_ITEMS } from '../../constants';
import { Page } from '../../types';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  darkMode: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage, darkMode }) => {
  const cardClasses = darkMode
    ? 'bg-gray-800/80 border-gray-700'
    : 'bg-white/80 border-orange-200';

  return (
    <nav className={`${cardClasses} border-b sticky top-[89px] z-40 backdrop-blur-lg`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center space-x-2 sm:space-x-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 sm:p-3 rounded-xl transition-all hover:scale-110 ${
                currentPage === item.id 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
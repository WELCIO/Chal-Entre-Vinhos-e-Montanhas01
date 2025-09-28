import React from 'react';
import { Sun, Moon, Settings } from 'lucide-react';
import { Page } from '../../types';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, setCurrentPage }) => {
  const cardClasses = darkMode
    ? 'bg-gray-800/80 border-gray-700'
    : 'bg-white/80 border-orange-200';

  return (
    <header className={`${cardClasses} border-b sticky top-0 z-50 backdrop-blur-lg`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
             <img src="https://i.imgur.com/uV7cpZW.png" alt="Chalé Entre Vinhos e Montanhas Logo" className="h-16 w-16 object-contain" />
            <h1 className="text-xl font-bold leading-tight text-amber-900 dark:text-amber-700">
              Chalé Entre Vinhos
              <br/>
              e Montanhas
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl hover:scale-110 transition-transform ${darkMode ? 'text-yellow-400' : 'text-gray-600'}`}
              aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setCurrentPage('admin')}
              className="p-2 rounded-xl hover:scale-110 transition-transform text-gray-600 dark:text-gray-400"
              aria-label="Open admin settings"
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
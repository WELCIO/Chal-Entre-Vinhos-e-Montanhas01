
import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
    darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
    const cardClasses = darkMode
        ? 'bg-gray-800/80 border-gray-700'
        : 'bg-white/80 border-orange-200';

  return (
    <footer className={`${cardClasses} border-t mt-16`}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-4 sm:space-y-0">
            <a
              href="https://instagram.com/entrevinhosemontanhas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-pink-500 hover:scale-110 transition-transform"
            >
              <Instagram size={24} />
              <span>@entrevinhosemontanhas</span>
            </a>
            
            <a
              href="https://wa.me/5587988722202"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-500 hover:scale-110 transition-transform"
            >
              <MessageCircle size={24} />
              <span>(87) 98872-2202</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
            <Mail size={20} />
            <span>contato@chaleentrevinhosemontanhas.com.br</span>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Chalé Entre Vinhos e Montanhas. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

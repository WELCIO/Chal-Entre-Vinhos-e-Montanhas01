
import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Notification, Page } from '../../types';
import { CHALE_IMAGES } from '../../constants';

interface HomePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([
    { name: 'Marina S.', time: '2 min atrás', action: 'visualizou o chalé' },
    { name: 'Carlos M.', time: '15 min atrás', action: 'fez uma reserva' },
    { name: 'Ana P.', time: '1h atrás', action: 'está interessada' }
  ]);
  
  const cardClasses = darkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white/80 backdrop-blur-sm border-orange-200';

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CHALE_IMAGES.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const notificationTimer = setInterval(() => {
      const names = ['João S.', 'Maria L.', 'Pedro C.', 'Luana R.', 'Roberto M.'];
      const actions = ['visualizou o chalé', 'está interessada', 'fez uma pergunta'];
      const times = ['agora', '5 min atrás', '12 min atrás', '28 min atrás'];
      
      setNotifications(prev => [
        { 
          name: names[Math.floor(Math.random() * names.length)], 
          time: times[Math.floor(Math.random() * times.length)], 
          action: actions[Math.floor(Math.random() * actions.length)]
        },
        ...prev.slice(0, 2)
      ]);
    }, 30000);
    
    return () => clearInterval(notificationTimer);
  }, []);

  return (
    <div className="space-y-8">
      <div className={`${cardClasses} border rounded-2xl p-4 shadow-lg`}>
        <h3 className="text-sm font-semibold mb-3 text-orange-600">🔥 Atividade Recente</h3>
        <div className="space-y-2">
          {notifications.map((notif, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span><strong>{notif.name}</strong> {notif.action}</span>
              <span className="text-gray-500 dark:text-gray-400">{notif.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
        {CHALE_IMAGES.map((src, index) => (
             <img 
             key={src}
             src={src} 
             alt="Chalé" 
             className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
           />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold mb-2">Chalé Entre Vinhos e Montanhas</h1>
            <p className="text-lg opacity-90">Refúgio perfeito na Serra dos Morgados</p>
          </div>
        </div>
        
        <button 
          onClick={() => setCurrentSlide((prev) => prev === 0 ? CHALE_IMAGES.length - 1 : prev - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % CHALE_IMAGES.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 right-4 flex space-x-2">
          {CHALE_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => window.open('https://wa.me/5587988722202?text=Olá! Gostaria de fazer uma reserva no Chalé Entre Vinhos e Montanhas', '_blank')}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-lg flex items-center justify-center space-x-3"
        >
          <Calendar size={28} />
          <span>Reservar Agora</span>
        </button>
        
        <button
          onClick={() => setCurrentPage('guide')}
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-lg flex items-center justify-center space-x-3"
        >
          <BookOpen size={28} />
          <span>Guia do Chalé</span>
        </button>
      </div>

      <div className={`${cardClasses} border rounded-2xl p-6 shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4">💰 Preços Especiais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-4 rounded-xl">
            <h3 className="font-bold text-lg">Segunda a Quinta</h3>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">A partir de R$ 240</p>
            <p className="text-sm">2 diárias para até 2 pessoas</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 p-4 rounded-xl">
            <h3 className="font-bold text-lg">Sexta a Domingo</h3>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-300">A partir de R$ 600</p>
            <p className="text-sm">2 diárias para até 2 pessoas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

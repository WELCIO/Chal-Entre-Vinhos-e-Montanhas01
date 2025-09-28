import React, { useState } from 'react';
import { MapPin, Cloud, Thermometer, Sun, CloudSun, CloudRain, Copy, Check } from 'lucide-react';
import { ATTRACTIONS } from '../../constants';
import { Card } from '../ui/Card';

interface GuidePageProps {
  darkMode: boolean;
}

const GuidePage: React.FC<GuidePageProps> = ({ darkMode }) => {
  const [wifiCopied, setWifiCopied] = useState(''); // 'ssid' or 'pass'

  const handleCopy = (textToCopy: string, type: 'ssid' | 'pass') => {
      navigator.clipboard.writeText(textToCopy).then(() => {
          setWifiCopied(type);
          setTimeout(() => setWifiCopied(''), 2000);
      });
  };
  
  const weeklyForecast = [
    { day: 'Hoje', icon: Sun, high: 28, low: 16, condition: 'Ensolarado' },
    { day: 'Amanhã', icon: CloudSun, high: 26, low: 17, condition: 'Parcialmente Nublado' },
    { day: 'Sábado', icon: Sun, high: 29, low: 18, condition: 'Ensolarado' },
    { day: 'Domingo', icon: CloudRain, high: 24, low: 15, condition: 'Chuvas Isoladas' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Guia do Chalé</h2>
      
      <Card darkMode={darkMode}>
        <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <MapPin className="text-orange-500" />
            <span>Como Chegar</span>
        </h3>
        <div className="w-full h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.940162214848!2d-40.239790581906625!3d-10.24116965993234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x772bdca32ef6711%3A0x3b3b479619b67d12!2sChal%C3%A9%20Entre%20Vinhos%20e%20Montanhas!5e0!3m2!1spt-BR!2sbr!4v1759069089380!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Chalé Entre Vinhos e Montanhas"
            ></iframe>
        </div>
        <div className="mt-4">
            <button
                onClick={() => window.open('https://maps.app.goo.gl/6o68ch2Kb5HXQQgMA', '_blank')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
                <MapPin size={20} />
                <span>Abrir no Google Maps</span>
            </button>
        </div>
      </Card>

      <Card darkMode={darkMode}>
        <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <Cloud className="text-blue-500" />
            <span>Previsão do Tempo - Serra dos Morgados, Jaguarari/BA</span>
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-around bg-blue-50 dark:bg-blue-900/50 p-4 rounded-xl mb-4">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
                <p className="text-5xl font-bold">{weeklyForecast[0].high}°C</p>
                <p className="font-semibold">{weeklyForecast[0].condition}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Máx: {weeklyForecast[0].high}° / Mín: {weeklyForecast[0].low}°</p>
            </div>
            <div>
                <weeklyForecast[0].icon size={80} className="text-yellow-500" />
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {weeklyForecast.map((day, index) => (
                <div key={index} className="text-center p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                    <p className="font-bold">{day.day}</p>
                    <day.icon size={32} className={`mx-auto my-2 ${day.icon === Sun ? 'text-yellow-500' : 'text-blue-400'}`} />
                    <p className="text-sm font-semibold">{day.high}° / {day.low}°</p>
                </div>
            ))}
        </div>
        <p className="text-xs text-center mt-4 text-gray-500">
            *Previsão ilustrativa. Para dados em tempo real,
            <a href="https://www.tempo.com/serra-dos-morgados.htm?d=proxima-semana" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
                clique aqui.
            </a>
        </p>
      </Card>

      <Card darkMode={darkMode}>
        <h3 className="text-xl font-bold mb-4">📖 Manual Digital</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <span className="font-semibold">Wi-Fi:</span>
              <div className="flex items-center gap-2">
                  <code className="bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded">chale_wifi_2024</code>
                  <button onClick={() => handleCopy('chale_wifi_2024', 'ssid')} className="p-1 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label="Copiar nome da rede Wi-Fi">
                      {wifiCopied === 'ssid' ? <Check size={16} className="text-green-500"/> : <Copy size={16}/>}
                  </button>
              </div>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <span className="font-semibold">Senha:</span>
              <div className="flex items-center gap-2">
                  <code className="bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded">montanhas123</code>
                  <button onClick={() => handleCopy('montanhas123', 'pass')} className="p-1 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label="Copiar senha do Wi-Fi">
                      {wifiCopied === 'pass' ? <Check size={16} className="text-green-500"/> : <Copy size={16}/>}
                  </button>
              </div>
          </div>
          <div className="p-3 bg-amber-50 dark:bg-amber-900 rounded-lg">
            <p><strong>🔥 Lareira:</strong> Use apenas lenha seca. Feche o registro após o uso.</p>
          </div>
        </div>
      </Card>

      <Card darkMode={darkMode}>
        <h3 className="text-xl font-bold mb-6">🗻 O que fazer na Serra dos Morgados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {ATTRACTIONS.map((attraction, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/50 dark:to-emerald-900/50 rounded-xl overflow-hidden hover:scale-105 transition-transform">
              <img src={attraction.image} alt={attraction.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">{attraction.name}</h4>
                <p className="text-sm text-green-600 dark:text-green-400 mb-2">{attraction.type}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-amber-50 dark:bg-amber-900/50 p-4 rounded-xl mb-4">
          <h4 className="font-bold mb-2 text-amber-800 dark:text-amber-200">👨‍🏫 Guia Local</h4>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Converse com a equipe do chalé para contratar um guia local. 
            Ele te levará aos pontos turísticos e explicará a história de cada local!
          </p>
          <button
            onClick={() => window.open('https://wa.me/5587988722202?text=Gostaria de contratar um guia local para as trilhas', '_blank')}
            className="mt-3 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Contratar Guia
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-xl">
            <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-200">🛒 Feira de Jaguarari</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
              Todo sábado pela manhã - produtos frescos e locais!
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400">
              Durante a semana também há algumas barracas com verduras e frutas
            </p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/50 p-4 rounded-xl">
            <h4 className="font-bold mb-2 text-purple-800 dark:text-purple-200">🏪 Comércio Jaguarari</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Supermercado, lojas agrícolas, material de construção, roupas, 
              lotéricas, Banco do Brasil e pizzaria
            </p>
          </div>
        </div>
      </Card>
      
      <Card darkMode={darkMode}>
        <h3 className="text-xl font-bold mb-4">🎉 Eventos na Região</h3>
        <div className="relative rounded-xl overflow-hidden group">
            <img src="https://i.imgur.com/WlcbGbR.jpeg" alt="Eco Festival do Café" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 flex flex-col justify-end p-4">
                <h4 className="font-bold text-white text-lg">Eco Festival do Café</h4>
                <p className="text-sm text-white/90">Anualmente, entre Junho e Julho.</p>
                <p className="text-xs text-white/80 mt-2">Um evento que celebra a cultura do café na Serra dos Morgados, com música, gastronomia e muito mais.</p>
            </div>
        </div>
    </Card>
    </div>
  );
};

export default GuidePage;
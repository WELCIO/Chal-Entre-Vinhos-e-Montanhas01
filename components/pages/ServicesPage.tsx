
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { EXTRA_SERVICES } from '../../constants';

interface ServicesPageProps {
  darkMode: boolean;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ darkMode }) => {
  const [pixCopied, setPixCopied] = useState(false);

  const copyPixKey = () => {
    const pixKey = "54.668.093/0001-56";
    navigator.clipboard.writeText(pixKey).then(() => {
      setPixCopied(true);
      setTimeout(() => setPixCopied(false), 3000);
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Serviços Extras</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXTRA_SERVICES.map((service, index) => (
          <Card key={index} darkMode={darkMode} className="hover:scale-105 transition-transform p-6">
            <div className="text-center">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">{service.price}</p>
              <button 
                onClick={() => window.open(`https://wa.me/5587988722202?text=Gostaria de solicitar: ${service.name}`, '_blank')}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl hover:scale-105 transition-transform"
              >
                Solicitar via WhatsApp
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Card darkMode={darkMode}>
        <h3 className="text-xl font-bold mb-6 text-center">💳 Formas de Pagamento</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 p-6 rounded-xl text-center">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-bold text-lg mb-2">PIX</h4>
            <p className="text-sm mb-3">CNPJ: 54.668.093/0001-56</p>
            <p className="text-xs mb-4 text-gray-600 dark:text-gray-400">Raquel Cantídio M Azevedo (C6 Bank)</p>
            <button
              onClick={copyPixKey}
              className={`w-full p-2 rounded-lg font-semibold transition-all ${
                pixCopied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {pixCopied ? '✓ Copiado!' : 'Copiar Chave PIX'}
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 p-6 rounded-xl text-center">
            <div className="text-3xl mb-3">💳</div>
            <h4 className="font-bold text-lg mb-2">Cartão</h4>
            <p className="text-sm mb-6">Débito ou Crédito</p>
            <button
              onClick={() => window.open('https://wa.me/5587988722202?text=Gostaria de pagar com cartão', '_blank')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg font-semibold transition-colors"
            >
              Pagar com Cartão
            </button>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/50 dark:to-orange-900/50 p-6 rounded-xl text-center">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-bold text-lg mb-2">Dinheiro</h4>
            <p className="text-sm mb-6">Pagamento no local</p>
            <button
              onClick={() => window.open('https://wa.me/5587988722202?text=Gostaria de pagar em dinheiro', '_blank')}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded-lg font-semibold transition-colors"
            >
              Pagar em Dinheiro
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ServicesPage;

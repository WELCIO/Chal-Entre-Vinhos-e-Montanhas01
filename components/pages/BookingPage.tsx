import React, { useState, useMemo } from 'react';
import { BookingData } from '../../types';
import { Card } from '../ui/Card';

interface BookingPageProps {
  darkMode: boolean;
}

const BookingPage: React.FC<BookingPageProps> = ({ darkMode }) => {
  const [bookingData, setBookingData] = useState<BookingData>({
    checkin: '',
    checkout: '',
    guests: 2,
    dates: 2
  });
  
  const calculatePrice = useMemo(() => {
    const { guests, dates } = bookingData;
    const isWeekend = new Date().getDay() > 4 || new Date().getDay() === 0; 
    
    let basePrice = 0;
    if (guests <= 2) basePrice = isWeekend ? 300 : 120;
    else if (guests <= 4) basePrice = isWeekend ? 440 : 220;
    else if (guests <= 6) basePrice = isWeekend ? 510 : 300;
    else basePrice = isWeekend ? 720 : 540;
    
    return basePrice * dates + 100; // Taxa de limpeza
  }, [bookingData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: name === 'guests' || name === 'dates' ? parseInt(value) : value }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Faça sua Reserva</h2>
      
      <Card darkMode={darkMode}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Check-in</label>
            <input
              type="date"
              name="checkin"
              value={bookingData.checkin}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">Check-out</label>
            <input
              type="date"
              name="checkout"
              value={bookingData.checkout}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            />
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Número de Hóspedes</label>
            <select
              name="guests"
              value={bookingData.guests}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            >
              <option value={2}>Até 2 pessoas</option>
              <option value={4}>Até 4 pessoas</option>
              <option value={6}>Até 6 pessoas</option>
              <option value={12}>Até 12 pessoas</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">Número de Diárias</label>
            <select
              name="dates"
              value={bookingData.dates}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            >
              <option value={2}>2 diárias</option>
              <option value={3}>3 diárias</option>
              <option value={4}>4 diárias</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Resumo da Reserva</h3>
          <p className="text-lg">Valor Total: <span className="font-bold text-2xl text-green-600 dark:text-green-400">R$ {calculatePrice.toLocaleString()}</span></p>
          <p className="text-sm mt-2">Incluindo taxa de Limpeza e Lavanderia(R$ 100)</p>
          <p className="text-sm">Condições: 50% antecipado + 50% no check-in</p>
        </div>
        
        <div className="mt-6">
          <button
            onClick={() => window.open('https://wa.me/5587988722202?text=Gostaria de fazer uma reserva no Chalé Entre Vinhos e Montanhas', '_blank')}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl hover:scale-105 transition-transform font-bold text-lg"
          >
            Reservar pelo WhatsApp
          </button>
        </div>
      </Card>
    </div>
  );
};

export default BookingPage;
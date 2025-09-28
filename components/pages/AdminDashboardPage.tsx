
import React from 'react';
import { Page } from '../../types';
import { Card } from '../ui/Card';

interface AdminDashboardPageProps {
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  darkMode: boolean;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ setIsAdmin, setCurrentPage, darkMode }) => {
  const recentBookings = [
    { name: 'Carlos Silva', dates: '15-17 Mai', guests: 4, value: 'R$ 980' },
    { name: 'Maria Santos', dates: '18-20 Mai', guests: 2, value: 'R$ 640' },
    { name: 'João Pedro', dates: '22-24 Mai', guests: 6, value: 'R$ 1.320' }
  ];
  
  const stats = [
      {label: 'Reservas Este Mês', value: '15', color: 'text-blue-600 dark:text-blue-400'},
      {label: 'Faturamento', value: 'R$ 12.450', color: 'text-green-600 dark:text-green-400'},
      {label: 'Avaliação Média', value: '4.8', color: 'text-orange-600 dark:text-orange-400'},
      {label: 'Taxa de Ocupação', value: '89%', color: 'text-purple-600 dark:text-purple-400'},
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Painel Administrativo</h2>
        <button
          onClick={() => {setIsAdmin(false); setCurrentPage('home');}}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-colors"
        >
          Sair
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
            <Card key={stat.label} darkMode={darkMode} className="text-center p-6">
                <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
            </Card>
        ))}
      </div>
      
      <Card darkMode={darkMode}>
        <h3 className="text-xl font-bold mb-4">Reservas Recentes</h3>
        <div className="space-y-3">
          {recentBookings.map((booking, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
              <div>
                <p className="font-bold">{booking.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{booking.dates} • {booking.guests} pessoas</p>
              </div>
              <p className="font-bold text-green-600 dark:text-green-400">{booking.value}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboardPage;

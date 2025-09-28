import React, { useState } from 'react';
import { Page, AdminCredentials } from '../../types';

interface AdminLoginPageProps {
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  darkMode: boolean;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ setIsAdmin, setCurrentPage, darkMode }) => {
  const [adminCredentials, setAdminCredentials] = useState<AdminCredentials>({ email: '', password: '' });

  const handleLogin = () => {
    if (adminCredentials.email === 'contato@chaleentrevinhosemontanhas.com.br' && adminCredentials.password === 'Chalé123') {
      setIsAdmin(true);
      setCurrentPage('admin');
    } else {
      alert('Credenciais incorretas!');
    }
  };
  
  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gradient-to-br from-orange-50 via-green-50 to-amber-50 text-gray-900';

  const cardClasses = darkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white/80 backdrop-blur-sm border-orange-200';

  return (
    <div className={`fixed inset-0 ${themeClasses} flex items-center justify-center p-4 z-50`}>
      <div className={`${cardClasses} border rounded-2xl p-8 w-full max-w-md shadow-xl`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Área Administrativa</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            value={adminCredentials.email}
            onChange={(e) => setAdminCredentials({...adminCredentials, email: e.target.value})}
          />
          <input
            type="password"
            placeholder="Senha"
            className={`w-full p-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            value={adminCredentials.password}
            onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Entrar
          </button>
          <button
            onClick={() => setCurrentPage('home')}
            className="w-full bg-gray-500 text-white p-3 rounded-xl font-semibold hover:scale-105 transition-transform mt-2"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
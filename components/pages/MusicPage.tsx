
import React from 'react';
import { Music, Play } from 'lucide-react';
import { Card } from '../ui/Card';
import { PLAYLISTS } from '../../constants';

interface MusicPageProps {
  darkMode: boolean;
}

const MusicPage: React.FC<MusicPageProps> = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">🎵 Playlists</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLAYLISTS.map((playlist, index) => (
          <div key={index} className={`bg-gradient-to-br ${playlist.color} text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{playlist.name}</h3>
              <p className="mb-4">{playlist.genre}</p>
              <button 
                onClick={() => window.open(playlist.link, '_blank')}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors flex items-center space-x-2 mx-auto"
              >
                <Play size={16} />
                <span>Ouvir no Spotify</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <Card darkMode={darkMode}>
        <h3 className="text-xl font-bold mb-4 text-center">🎶 Outras Plataformas Gratuitas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => window.open('https://www.youtube.com/results?search_query=relaxing+music', '_blank')}
            className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition-colors font-semibold"
          >
            YouTube Music
          </button>
          <button
            onClick={() => window.open('https://soundcloud.com/search?q=relaxing', '_blank')}
            className="bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 transition-colors font-semibold"
          >
            SoundCloud
          </button>
          <button
            onClick={() => window.open('https://deezer.com/search/relaxing', '_blank')}
            className="bg-purple-500 text-white p-3 rounded-xl hover:bg-purple-600 transition-colors font-semibold"
          >
            Deezer
          </button>
          <button
            onClick={() => window.open('https://music.amazon.com', '_blank')}
            className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition-colors font-semibold"
          >
            Amazon Music
          </button>
        </div>
      </Card>
    </div>
  );
};

export default MusicPage;

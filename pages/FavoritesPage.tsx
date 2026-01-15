
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_PETS } from '../data';

const FavoritesPage: React.FC = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorited_pets') || '[]');
    const favPets = ALL_PETS.filter(pet => favoriteIds.includes(pet.id));
    setFavorites(favPets);
  }, []);

  return (
    <div className="pb-24 overflow-y-auto no-scrollbar min-h-screen">
      <header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-5 pt-6 pb-4">
        <h1 className="text-text-main text-[32px] font-extrabold">我的收藏</h1>
      </header>

      <div className="px-5 mt-4">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-20 text-center">
            <div className="size-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-slate-400 text-[40px]">favorite</span>
            </div>
            <p className="text-slate-500 font-medium">暂无收藏的宠物</p>
            <button 
              onClick={() => navigate('/home')}
              className="mt-6 text-primary font-bold px-6 py-2 border border-primary/20 rounded-full"
            >
              去逛逛
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {favorites.map((pet, i) => (
              <div key={i} onClick={() => navigate(`/pet/${pet.id}`)} className="bg-white dark:bg-surface-dark rounded-2xl p-3 shadow-sm cursor-pointer">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-3">
                  <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url('${pet.img}')`}}></div>
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary filled text-[18px]">favorite</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white">{pet.name}</h3>
                  <span className={`material-symbols-outlined ${pet.gender === 'male' ? 'text-blue-400' : 'text-pink-400'}`} style={{fontSize: '20px'}}>{pet.gender}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                  <span className="material-symbols-outlined" style={{fontSize: '14px'}}>location_on</span>
                  <span>{pet.dist}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 pb-6 pt-3 px-6 shadow-2xl z-50">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[28px]">home</span>
            <span className="text-[10px] font-medium">首页</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined filled text-[28px]">favorite</span>
            <span className="text-[10px] font-bold">收藏</span>
          </button>
          <button onClick={() => navigate('/messages')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[28px]">chat_bubble</span>
            <span className="text-[10px] font-medium">消息</span>
          </button>
          <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[28px]">person</span>
            <span className="text-[10px] font-medium">我的</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default FavoritesPage;

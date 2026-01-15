
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ALL_PETS } from '../data';

const PetDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const pet = ALL_PETS.find(p => p.id === id) || ALL_PETS[0];
  
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorited_pets') || '[]');
    setIsFavorited(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorited_pets') || '[]');
    let newFavorites;
    if (favorites.includes(id)) {
      newFavorites = favorites.filter((favId: string) => favId !== id);
      setIsFavorited(false);
    } else {
      newFavorites = [...favorites, id];
      setIsFavorited(true);
    }
    localStorage.setItem('favorited_pets', JSON.stringify(newFavorites));
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-6 pt-12">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white">
          <span className="material-symbols-outlined">ios_share</span>
        </button>
      </div>

      <div className="relative w-full h-[55vh] shrink-0">
        <img 
          alt={pet.name} 
          className="w-full h-full object-cover" 
          src={pet.img}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2 z-20">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>

      <div className="relative z-20 -mt-8 flex flex-col flex-1 rounded-t-3xl bg-background-light dark:bg-background-dark shadow-2xl">
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
        </div>

        <div className="px-6 pb-32 flex flex-col gap-8">
          <div className="mt-2 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{pet.name}</h1>
              <div className="flex items-center gap-1.5 mt-2 text-slate-500">
                <span className="material-symbols-outlined text-[20px] text-primary">location_on</span>
                <span className="text-sm font-medium">北京市朝阳区 ({pet.dist})</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold text-primary">¥0</span>
              <span className="text-xs font-medium text-slate-400">领养费用</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: '年龄', val: pet.age },
              { label: '性别', val: pet.gender === 'male' ? '公' : '母', icon: pet.gender },
              { label: '体重', val: '14 公斤' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 shadow-sm">
                <span className="text-[11px] font-bold text-slate-400 mb-1">{item.label}</span>
                <div className="flex items-center gap-1">
                  {item.icon && <span className={`material-symbols-outlined text-[16px] ${item.icon === 'male' ? 'text-blue-500' : 'text-pink-500'}`}>{item.icon}</span>}
                  <span className="text-slate-900 dark:text-white font-bold">{item.val}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCK8U4SVqAn6XRMJ-PAdT4YQOjkpvtrlMTuFsJw1WSViiVlP7ttQOT3WnCSmpyvBWOohqAmCPUIWnhHZvSWLUXjxUHU8m3g3549x3ISaZl1WFOWi5zPJMx1e3yWxhFAhOHkJ_BbGmtz42phuA5jyBL7E8HdX6-2e_cQ8MUDl6YuWuPeKfo_NopymuN94GgsRtroBDXN8cXPyj7Y07vkNoskrBIaRU8CakCjTC1Q9jwFSKgCno0ymhW6vcLkm14DkUewsLXblfo3W00')"}}></div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                <span className="material-symbols-outlined text-[12px] text-white">verified</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">安心爪爪庇护所</h3>
              <p className="text-xs text-slate-500">2小时前发布</p>
            </div>
            <button onClick={() => navigate('/messages')} className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">关于 {pet.name}</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {pet.name} 是一只精力充沛的{pet.breed}，特别喜欢玩丢球游戏、睡长觉和让人揉肚子。对小朋友和其他狗狗都非常友好。
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">健康状况</h2>
            <div className="flex flex-wrap gap-3">
              {['已接种疫苗', '已绝育', '已植入芯片'].map((tag, i) => (
                <div key={i} className="flex h-9 items-center px-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40 px-6 py-4 pb-8 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-xl border-t border-slate-200 flex items-center gap-4">
        <button 
          onClick={toggleFavorite}
          className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 shadow-sm transition-colors ${isFavorited ? 'border-primary/30' : ''}`}
        >
          <span className={`material-symbols-outlined text-[28px] ${isFavorited ? 'text-primary filled' : 'text-slate-400'}`}>favorite</span>
        </button>
        <button 
          onClick={() => navigate(`/apply/${id}`)}
          className="flex-1 h-14 bg-primary text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-3"
        >
          <span>申请领养</span>
          <span className="material-symbols-outlined text-[24px]">pets</span>
        </button>
      </div>
    </div>
  );
};

export default PetDetailPage;

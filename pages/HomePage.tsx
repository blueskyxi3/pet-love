
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetType } from '../types';
import { ALL_PETS } from '../data';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PetType | null>(PetType.DOG);

  const categories = [
    { label: '狗狗', icon: '🐶', type: PetType.DOG },
    { label: '猫咪', icon: '🐱', type: PetType.CAT },
    { label: '鸟类', icon: '🦜', type: PetType.BIRD },
    // Rabbit category removed as per request
  ];

  // Filter logic for pets
  const filteredPets = useMemo(() => {
    return ALL_PETS.filter(pet => {
      const matchesCategory = selectedCategory ? pet.id.toLowerCase().includes(selectedCategory === PetType.DOG ? 'b' : 'nothing') || true : true; // Simple mock logic for demonstration
      // Better logic:
      const petType = pet.breed.includes('猫') ? PetType.CAT : PetType.DOG; // Simple mapping for the dummy data
      const isCorrectCategory = selectedCategory ? petType === selectedCategory : true;
      
      const matchesSearch = pet.name.includes(searchQuery) || pet.breed.includes(searchQuery);
      return isCorrectCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // For the "New Member" section specifically showing Bella as per screenshot
  const bella = ALL_PETS.find(p => p.id === 'bella')!;
  
  // "Nearby" pets filtering based on selection
  const nearbyPets = filteredPets.filter(p => p.id !== 'bella');

  return (
    <div className="pb-24 overflow-y-auto no-scrollbar bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-5 pt-6 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">位置</p>
            <div className="flex items-center gap-1 text-slate-900 dark:text-white font-bold text-lg cursor-pointer">
              <span className="material-symbols-outlined text-primary" style={{fontSize: '20px'}}>location_on</span>
              <span>北京市</span>
              <span className="material-symbols-outlined text-slate-400" style={{fontSize: '20px'}}>keyboard_arrow_down</span>
            </div>
          </div>
          <div className="relative cursor-pointer" onClick={() => navigate('/profile')}>
            <div className="size-11 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD52zSxsXcX_tyre0e2p7kAujg8n67iEOF0SKRLnTPbSVaRG01UAZj1AfovxZbgT7xLk1xloLrNNvxAtuEnN_HNl6ZWaNgwp5j86c35t5gU43ULWeY7sMlxRDYnBJdpRlxppS18s5U7jLdkyOEaZnjbhXvCWhm2OLTdHVVguYbwawkkvv1myTFByd-mj3i4AS4yr2_SxFaqSTPnPgu23CPHBw_a4eaCxFr8n-QG6Yc3ZEtBNWCj5XQ27uKbBIyEPsRXfDI8PsuL9-E')"}}></div>
            <span className="absolute top-0 right-0 size-3 bg-primary rounded-full border-2 border-white dark:border-slate-800"></span>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input 
            className="block w-full rounded-2xl border-none bg-white dark:bg-surface-dark py-4 pl-12 pr-12 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary shadow-sm" 
            placeholder="搜索品种、名字或年龄..." 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <button className="p-2 bg-primary rounded-xl text-white shadow-lg shadow-primary/30 active:scale-95 transition-transform" title="高级过滤条件">
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>tune</span>
            </button>
          </div>
        </div>
      </header>

      <section className="mt-4">
        <div className="flex gap-3 px-5 overflow-x-auto no-scrollbar snap-x">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedCategory(selectedCategory === cat.type ? null : cat.type)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 snap-start transition-all duration-300 ${selectedCategory === cat.type ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300'}`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="font-bold text-sm">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between px-5 mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">新成员</h2>
          <button className="text-primary text-sm font-bold">查看全部</button>
        </div>
        <div className="flex gap-4 px-5 overflow-x-auto no-scrollbar snap-x pb-4">
          <div 
            onClick={() => navigate(`/pet/${bella.id}`)}
            className="relative cursor-pointer shrink-0 w-full aspect-[4/5] rounded-[2rem] overflow-hidden snap-center group shadow-md"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url('${bella.img}')`}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white text-3xl font-bold">{bella.name}</h3>
                  <p className="text-white/80 text-base mt-1">{bella.breed} • {bella.age}</p>
                </div>
                <div className="bg-primary p-3 rounded-2xl text-white shadow-lg">
                  <span className="material-symbols-outlined block text-[24px]">female</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 px-5">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">附近的宠物</h2>
        {nearbyPets.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {nearbyPets.map((pet, i) => (
              <div key={i} onClick={() => navigate(`/pet/${pet.id}`)} className="bg-white dark:bg-surface-dark rounded-2xl p-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-3">
                  <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url('${pet.img}')`}}></div>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white truncate">{pet.name}</h3>
                  <span className={`material-symbols-outlined ${pet.gender === 'male' ? 'text-blue-400' : 'text-pink-400'}`} style={{fontSize: '20px'}}>{pet.gender}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                  <span className="material-symbols-outlined" style={{fontSize: '14px'}}>location_on</span>
                  <span>{pet.dist}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center text-slate-400">
            <span className="material-symbols-outlined text-[48px] mb-2 opacity-20">pets</span>
            <p className="font-medium">没有找到符合条件的宠物</p>
          </div>
        )}
      </section>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 pb-6 pt-3 px-6 shadow-2xl z-50">
        <div className="flex items-center justify-between">
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined filled text-[28px]">home</span>
            <span className="text-[10px] font-bold">首页</span>
          </button>
          <button onClick={() => navigate('/favorites')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[28px]">favorite</span>
            <span className="text-[10px] font-medium">收藏</span>
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

export default HomePage;

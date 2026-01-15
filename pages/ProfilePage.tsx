
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pb-32 overflow-y-auto no-scrollbar">
      <div className="flex items-center px-4 py-4 justify-between sticky top-0 z-30 bg-background-light/90 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="flex size-12 items-center justify-center rounded-full hover:bg-black/5">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">个人中心</h2>
        <button className="text-primary font-bold">编辑</button>
      </div>

      <div className="flex flex-col items-center px-6 pt-2 pb-6">
        <div className="relative mb-5 group cursor-pointer">
          <div 
            className="size-32 rounded-full shadow-soft bg-cover bg-center border-4 border-white" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXSuop6spdQ7tO3NGa7Y6QYM9Csfkxu9Y83l4W7U5bWEejy2xS1n6raotvfIogejGe-1uRsIY_94ixJFDN7IXWOaALmKrNZ1ifl6DrC1DFF_Vq7z7RrsEt9Xejkyt4imOn3aOgdg6ucAHXxHxanlxUFzl25wJU6SlJqV2UwW0xdOgym9euOuBilDLITWD9GsxOoGAt7VBIex0RzvjS_GvtauDLg4wl-0vokSdWAvmgUmsm7roaRs5HSaFRz7mHBfttnQgmsQHm30o')"}}
          />
          <div className="absolute bottom-1 right-1 bg-primary text-white size-8 rounded-full border-2 border-background-light flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[16px]">edit</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-text-main mb-2">莎拉·詹金斯</h1>
        <p className="text-slate-500 text-center text-base font-medium px-8 leading-relaxed">
          爱狗人士，正在寻找毛茸茸的伙伴 🐶
        </p>
      </div>

      <div className="px-4 mb-8">
        <div className="flex w-full gap-3 p-5 bg-white rounded-xl shadow-card border border-slate-100">
          {[
            { val: '12', label: '关注' },
            { val: '5', label: '收藏', primary: true, action: () => navigate('/favorites') },
            { val: '1', label: '状态' }
          ].map((stat, i) => (
            <div key={i} onClick={stat.action} className={`flex-1 flex flex-col items-center justify-center gap-1 ${i < 2 ? 'border-r border-slate-100' : ''} ${stat.action ? 'cursor-pointer' : ''}`}>
              <span className={`text-2xl font-bold ${stat.primary ? 'text-primary' : 'text-slate-900'}`}>{stat.val}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4">
        <button 
          onClick={() => navigate('/status/buddy')}
          className="group relative flex items-center gap-4 p-4 bg-white rounded-xl shadow-card border border-slate-100 hover:border-primary/50 transition-all active:scale-[0.99]"
        >
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">description</span>
          </div>
          <div className="flex-1 text-left">
            <p className="text-base font-bold text-text-main group-hover:text-primary">我的申请</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-white shadow-sm">
              <div className="size-1.5 rounded-full bg-white animate-pulse"></div>
              <span className="text-[11px] font-bold">待处理</span>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </div>
        </button>

        {[
          { icon: 'grid_view', label: '我的发布' },
          { icon: 'pets', label: '我的宠物' },
          { icon: 'settings', label: '设置' },
          { icon: 'help', label: '帮助与反馈' }
        ].map((item, i) => (
          <button key={i} className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-card border border-slate-100 transition-all active:scale-[0.99]">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div className="flex-1 text-left">
              <p className="text-base font-bold text-text-main group-hover:text-primary">{item.label}</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary">chevron_right</span>
          </button>
        ))}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-md border-t border-slate-100 pb-6 pt-3 px-6 shadow-2xl z-50">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[28px]">home</span>
            <span className="text-[10px] font-medium">首页</span>
          </button>
          <button onClick={() => navigate('/favorites')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[28px]">favorite</span>
            <span className="text-[10px] font-medium">收藏</span>
          </button>
          <button onClick={() => navigate('/messages')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[28px]">chat_bubble</span>
            <span className="text-[10px] font-medium">消息</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined filled text-[28px]">person</span>
            <span className="text-[10px] font-bold">我的</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default ProfilePage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ChatItem {
  name: string;
  msg: string;
  time: string;
  unread: boolean;
  img: string;
  action?: () => void;
  type?: 'approval' | 'default';
}

const MessageCenterPage: React.FC = () => {
  const navigate = useNavigate();
  const [hasNewNotif, setHasNewNotif] = useState(localStorage.getItem('has_new_notif') === 'true');
  const isApproved = localStorage.getItem('adoption_status') === 'approved';

  const markAsRead = () => {
    localStorage.removeItem('has_new_notif');
    setHasNewNotif(false);
  };

  const baseChats: ChatItem[] = [
    { name: '市中心救助站', msg: '太好了！您想什么时候见见 Luna？', time: '2分钟前', unread: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3mZduxvvEd_xNog-g4ja7ygryok2N345KdUR0aqMNoSBGoAt6kTezDQyFhzW_RvrM7LKGXHsojs-vDYTQUQgHKvsr1iNKAEY4PKLOoTvbpb0_HLOw7U9KkvlsCOdNYQGwOjM2HGYfPyJa6MWkX8yYUGq2HF-msRZAR-REvowEXqq1ZwnG2Sb6Ln_jrStuGA0YvdcCEZLzypYH46WXNT8AG3wOTbDuwwgxwAkiI_4v40NsA0oypyp3hsKWjcK_XbnsSkStCbzmyMw' },
    { name: 'Sarah (寄养妈妈)', msg: '这是 Oliver 的疫苗接种记录。', time: '昨天', unread: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqzTmFQR5_iarMKTC0wy-blzBn5-nTaKyJXRc5EjIHNAqD-sGlNakpgjg1NtQQNLRC8ZpjFHvK9NFQdIBjE-YNHxBz_UPuBO5TfCcdDWWsSXwXKDZnE6Dgp10QLiV-LvGrhshOr7Fc9qxFgYlH58g5lw-IYr9cSlnMzam-DwyKGUP2jdLCcGbXzQ7k3j3_1Dv4SMAyuO7V0IwjCo4bTsKxTbLRaEt9AxclsOzLcURck1HqhW1R-FzvoVxn2G8GW8Uu7BSNWtjAEBQ' },
    { name: '快乐爪爪庇护所', msg: '感谢您的申请。', time: '周一', unread: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCByjVCGLQjLbPFer4QL4xN666toHvgOrzaPpeTdYwkw0_OM-9qO1stk2iEi_P5BC6IYWPN_FFqvTAXOJByEDHgwqbw0O-MeiQuuq8rvLI8f9lLT9Lnh4T8bD6vdt-wAxENwZIgB4xE-rDa39gWRMpkmqrFzYEPG7eZB32vMe9snia6jjY32TpoKxsfIvhQr5D8Z0SAUAkXllJ3S-bZbSoMX3MutjxRTyeXmNO5VQfbKz_R1jxXJdorYr0u4qSvybtP0DxQls-Aruo' }
  ];

  const approvalChat: ChatItem = {
    name: '安心爪爪庇护所',
    msg: '🎉 恭喜！您的领养申请已通过。Buddy 已经迫不及待要见到你了！点击查看领养证。',
    time: '刚刚',
    unread: hasNewNotif,
    type: 'approval',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK8U4SVqAn6XRMJ-PAdT4YQOjkpvtrlMTuFsJw1WSViiVlP7ttQOT3WnCSmpyvBWOohqAmCPUIWnhHZvSWLUXjxUHU8m3g3549x3ISaZl1WFOWi5zPJMx1e3yWxhFAhOHkJ_BbGmtz42phuA5jyBL7E8HdX6-2e_cQ8MUDl6YuWuPeKfo_NopymuN94GgsRtroBDXN8cXPyj7Y07vkNoskrBIaRU8CakCjTC1Q9jwFSKgCno0ymhW6vcLkm14DkUewsLXblfo3W00',
    action: () => navigate('/success/buddy')
  };

  const allChats = isApproved ? [approvalChat, ...baseChats] : baseChats;

  return (
    <div className="flex flex-col h-screen overflow-y-auto no-scrollbar bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm pt-4">
        <div className="flex flex-col gap-2 px-4 pb-2">
          <div className="flex items-center h-12 justify-between">
            <button onClick={() => navigate(-1)} className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back</button>
            <button className="text-primary font-bold">编辑</button>
          </div>
          <h1 className="text-text-main dark:text-white text-[32px] font-extrabold tracking-tight">消息</h1>
        </div>
        <div className="px-4 py-2 pb-4">
          <div className="flex items-center bg-white dark:bg-surface-dark rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/5 h-12 px-4">
            <span className="material-symbols-outlined text-slate-400">search</span>
            <input className="ml-3 border-none bg-transparent outline-none w-full text-sm dark:text-white" placeholder="搜索聊天..."/>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-4 gap-3 pb-24">
        {allChats.map((chat, i) => (
          <div 
            key={i} 
            onClick={() => {
              if (chat.action) chat.action();
              if (chat.unread) markAsRead();
            }}
            className={`flex items-center gap-4 p-4 rounded-3xl transition-all cursor-pointer border relative ${
              chat.unread 
                ? 'bg-white dark:bg-surface-dark shadow-md border-primary/20 ring-1 ring-primary/5' 
                : 'bg-transparent border-transparent hover:bg-black/5'
            } ${chat.type === 'approval' ? 'bg-gradient-to-r from-primary/5 to-transparent' : ''}`}
          >
            <div className="relative shrink-0">
              <div className="h-14 w-14 rounded-full bg-cover bg-center border border-slate-100 dark:border-slate-800 shadow-sm" style={{backgroundImage: `url("${chat.img}")`}}></div>
              {chat.unread && <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary border-2 border-white dark:border-background-dark rounded-full animate-pulse shadow-sm shadow-primary"></div>}
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <p className={`text-base line-clamp-1 ${chat.unread ? 'font-bold text-text-main dark:text-white' : 'font-semibold text-slate-600 dark:text-slate-400'}`}>{chat.name}</p>
                <p className={`text-[11px] font-bold shrink-0 ml-2 ${chat.unread ? 'text-primary' : 'text-slate-400'}`}>{chat.time}</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <p className={`text-sm line-clamp-1 leading-snug ${chat.unread ? 'text-slate-800 dark:text-slate-200 font-medium' : 'text-slate-500'}`}>{chat.msg}</p>
              </div>
            </div>
            {chat.type === 'approval' && (
              <div className="absolute right-4 bottom-4">
                <span className="material-symbols-outlined text-primary text-[20px] filled">stars</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 pb-6 pt-3 px-6 shadow-2xl z-50">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[28px]">home</span>
            <span className="text-[10px] font-medium">首页</span>
          </button>
          <button onClick={() => navigate('/favorites')} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined text-[28px]">favorite</span>
            <span className="text-[10px] font-medium">收藏</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary relative">
            <span className="material-symbols-outlined filled text-[28px]">chat_bubble</span>
            <span className="text-[10px] font-bold">消息</span>
            {hasNewNotif && <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white dark:border-surface-dark animate-ping"></div>}
            {hasNewNotif && <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white dark:border-surface-dark"></div>}
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

export default MessageCenterPage;

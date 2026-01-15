
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ApplicationStatusPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [status, setStatus] = useState(localStorage.getItem('adoption_status') || 'pending');

  const handleApprove = () => {
    localStorage.setItem('adoption_status', 'approved');
    localStorage.setItem('has_new_notif', 'true');
    setStatus('approved');

    const approvalNotif = {
      id: `app_${Date.now()}`,
      title: '安心爪爪庇护所',
      message: '🎉 恭喜！您的领养申请已通过最终审批。Buddy 已经迫不及待要见到你了！点击查看您的电子领养证。',
      time: '刚刚',
      type: 'approval',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK8U4SVqAn6XRMJ-PAdT4YQOjkpvtrlMTuFsJw1WSViiVlP7ttQOT3WnCSmpyvBWOohqAmCPUIWnhHZvSWLUXjxUHU8m3g3549x3ISaZl1WFOWi5zPJMx1e3yWxhFAhOHkJ_BbGmtz42phuA5jyBL7E8HdX6-2e_cQ8MUDl6YuWuPeKfo_NopymuN94GgsRtroBDXN8cXPyj7Y07vkNoskrBIaRU8CakCjTC1Q9jwFSKgCno0ymhW6vcLkm14DkUewsLXblfo3W00'
    };

    localStorage.setItem('last_system_notif', JSON.stringify(approvalNotif));

    // Dispatch global push notification event
    window.dispatchEvent(new CustomEvent('petlove-push-notification', {
      detail: approvalNotif
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between p-4 sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <button onClick={() => navigate('/home')} className="flex items-center justify-center w-10 h-10 rounded-full active:bg-black/5 dark:active:bg-white/5">
          <span className="material-symbols-outlined dark:text-white">home</span>
        </button>
        <h1 className="text-lg font-bold flex-1 text-center pr-10 dark:text-white">申请状态</h1>
      </header>

      <main className="flex-1 px-5 pt-2 pb-32">
        <div className="mb-8">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark shadow-card border border-slate-100 dark:border-slate-800">
            <div className="relative w-20 h-20 shrink-0">
              <div 
                className="w-full h-full rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuClPQVMZm6sxlS44o47DVT2a1M9X82flprzljU5-Vn8b9M6sOvklJAJLNZ7hkQNB59_NkFOoAOqZ2Yr9_7R7kfpEL1H9dAMLMxnNlkVWBL-AcDr1lI7mErjjH_BpUtlprQXCD9tLlT7laF5vVDQsN2nziJNXX4tRTMV9LI1h-l6r7JtfhQfnwbujJBAAovk2xSI3xQ6JlhEoy11puelkH4BpovmMfXZ-1bIkH5hXZXuoEulR63K4Okr5z2gq9hRsfwfJUJvD1axTDY')"}}
              ></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white dark:border-slate-700">
                <span className="material-symbols-outlined text-white text-[14px]">pets</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold dark:text-white">Buddy</h2>
              <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">金毛寻回犬 • 2岁</p>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold mt-1 ${status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                {status === 'approved' ? '已通过' : '进行中'}
              </span>
            </div>
          </div>
        </div>

        <div className="relative pl-2">
          <div className="absolute left-[27px] top-4 bottom-10 w-[2px] bg-slate-100 dark:bg-slate-800"></div>
          
          <div className="relative grid grid-cols-[50px_1fr] gap-x-3 mb-8">
            <div className="relative flex flex-col items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow-md ring-4 ring-background-light dark:ring-background-dark">
                <span className="material-symbols-outlined text-[18px]">check</span>
              </div>
              <div className="absolute top-8 bottom-[-32px] w-[2px] bg-primary"></div>
            </div>
            <div className="pt-1">
              <p className="text-base font-bold dark:text-white">提交申请</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">2023年9月28日</p>
            </div>
          </div>

          <div className="relative grid grid-cols-[50px_1fr] gap-x-3 mb-8">
            <div className="relative flex flex-col items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow-md ring-4 ring-background-light dark:ring-background-dark">
                <span className="material-symbols-outlined text-[18px]">check</span>
              </div>
              <div className={`absolute top-8 bottom-[-32px] w-[2px] ${status === 'approved' ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'}`}></div>
            </div>
            <div className="pt-1">
              <p className="text-base font-bold dark:text-white">初步审核</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">于2023年9月30日通过</p>
            </div>
          </div>

          <div className="relative grid grid-cols-[50px_1fr] gap-x-3 mb-8">
            <div className="relative flex flex-col items-center">
              <div className={`z-10 flex items-center justify-center w-8 h-8 rounded-full ${status === 'approved' ? 'bg-primary text-white' : 'bg-orange-500 text-white'} shadow-md ring-4 ring-background-light dark:ring-background-dark`}>
                <span className="material-symbols-outlined text-[18px]">{status === 'approved' ? 'check' : 'home'}</span>
              </div>
              {status === 'approved' && <div className="absolute top-8 bottom-[-32px] w-[2px] bg-primary"></div>}
            </div>
            <div className={`pt-1 ${status !== 'approved' ? 'cursor-pointer' : ''}`} onClick={status !== 'approved' ? handleApprove : undefined}>
              <p className="text-base font-bold dark:text-white">家庭回访</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">{status === 'approved' ? '已完成' : '点击模拟通过家庭回访'}</p>
            </div>
          </div>

          <div className="relative grid grid-cols-[50px_1fr] gap-x-3">
            <div className="relative flex flex-col items-center">
              <div className={`z-10 flex items-center justify-center w-8 h-8 rounded-full ${status === 'approved' ? 'bg-primary text-white shadow-lg ring-4 ring-background-light dark:ring-background-dark scale-110' : 'bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-300 ring-4 ring-background-light dark:ring-background-dark'}`}>
                <span className="material-symbols-outlined text-[18px]">{status === 'approved' ? 'verified' : 'radio_button_unchecked'}</span>
              </div>
            </div>
            <div className={`pt-1 ${status !== 'approved' ? 'opacity-60' : ''}`}>
              <p className="text-base font-bold dark:text-white">最终审批</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">{status === 'approved' ? '恭喜！领养申请已通过' : '预计时间：待定'}</p>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pt-10 pb-8 flex flex-col gap-3 max-w-md mx-auto z-20">
        <button 
          onClick={() => status === 'approved' ? navigate(`/success/${id}`) : navigate('/messages')} 
          className="w-full flex items-center justify-center gap-2 rounded-full h-14 bg-primary text-white font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[20px]">{status === 'approved' ? 'workspace_premium' : 'chat_bubble'}</span>
          <span>{status === 'approved' ? '查看领养证' : '联系收容所'}</span>
        </button>
        <button onClick={() => navigate('/home')} className="w-full h-10 text-slate-400 dark:text-slate-500 text-sm font-semibold">返回首页</button>
      </div>
    </div>
  );
};

export default ApplicationStatusPage;


import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center overflow-x-hidden">
      <div className="relative w-full flex flex-col items-center pt-12 pb-6 px-4">
        <div className="relative z-10 flex flex-col items-center">
          <div className="p-1.5 rounded-full bg-white shadow-xl">
            <div 
              className="relative rounded-full h-40 w-40 bg-cover bg-center border-4 border-primary/20" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBe1FshjXX_grde1Vexq6JuBDXCo_gb_mjPHvDeg1YWCEklBM3KEuTonsmQW5E9mXcBOGFivaL-oi5lbkIs5YVfPPNLfLWGxdah-ZDE22BlWlW1QwRwKn9JN4gAsCxcSyN5zNry8bjc_ZMxm7WXy4TFw2Q1XhEF77Tyjb0siLAMMPrGgtsFAa5IGh_OzQxSXRXksn50ERg_0n9hyGAS4-ata2jxvP0Ubnqt80PGeAe4GTVRMcfFAnjQGKmOOjkIzKGRYncDhfNiKFY')"}}
            ></div>
          </div>
          <div className="-mt-5 bg-primary text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
            <span className="material-symbols-outlined text-[20px] filled">home</span>
            <span className="text-sm font-bold tracking-wide">欢迎回家！</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-2 flex flex-col items-center text-center">
        <h1 className="text-3xl font-extrabold text-text-main dark:text-white leading-tight mb-2">领养成功！</h1>
        <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed max-w-[280px]">
          恭喜你！<br/>你给了 <span className="text-primary font-bold">Buddy</span> 一个永远的家。
        </p>
      </div>

      <div className="px-4 py-6 w-full mt-4">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-soft border border-slate-100 p-5 relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">电子领养证</p>
                <h2 className="text-xl font-bold text-text-main dark:text-white">Buddy</h2>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">pets</span>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-slate-400">领养日期</p>
                <p className="text-base font-medium">2023年10月24日</p>
              </div>
              <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="text-xs font-bold">官方认证乖宝宝</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="w-full px-6 py-8 flex flex-col gap-3">
        <button className="flex w-full items-center justify-center rounded-full h-14 bg-primary text-white gap-2 shadow-lg shadow-primary/20 font-bold">
          <span className="material-symbols-outlined text-white">share</span>
          <span>分享这份喜悦</span>
        </button>
        <button onClick={() => navigate('/home')} className="flex w-full items-center justify-center rounded-full h-12 text-slate-400 font-bold text-sm">
          <span>回到首页</span>
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ account: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock logic
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="px-4 py-6 flex items-center justify-center">
        {/* Back button removed as per request */}
        <div className="size-10"></div> 
      </header>

      <main className="flex-1 px-8 pt-4 pb-12 flex flex-col">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-text-main dark:text-white tracking-tight mb-3">
            欢迎回来 <span className="text-primary">!</span>
          </h1>
          <p className="text-slate-500 font-medium">请登录您的账号继续领养之旅</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">手机号 / 邮箱</label>
            <div className="relative group">
              <input 
                type="text" 
                required
                className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl h-14 px-5 pl-12 shadow-soft ring-1 ring-slate-100 dark:ring-white/5 focus:ring-2 focus:ring-primary transition-all outline-none"
                placeholder="请输入手机号或邮箱"
                value={formData.account}
                onChange={(e) => setFormData({...formData, account: e.target.value})}
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors">
                person
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">密码</label>
              <button type="button" className="text-xs font-bold text-primary hover:text-primary-dark">忘记密码?</button>
            </div>
            <div className="relative group">
              <input 
                type="password" 
                required
                className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl h-14 px-5 pl-12 shadow-soft ring-1 ring-slate-100 dark:ring-white/5 focus:ring-2 focus:ring-primary transition-all outline-none"
                placeholder="请输入密码"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors">
                lock
              </span>
              <button type="button" className="absolute right-4 top-4 text-slate-300">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="mt-4 w-full h-14 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>立即登录</span>
            <span className="material-symbols-outlined text-[20px]">login</span>
          </button>
        </form>

        <div className="mt-auto pt-10 text-center">
          <p className="text-slate-500 font-medium text-sm">
            还没有账号?{' '}
            <button 
              onClick={() => navigate('/register')}
              className="text-primary font-bold hover:underline"
            >
              点击注册
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;

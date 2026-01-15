
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', account: '', password: '', agree: false });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('请先同意用户协议和隐私政策');
      return;
    }
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
            创建账号 <span className="text-primary">.</span>
          </h1>
          <p className="text-slate-500 font-medium">加入 PetLove 大家庭，给宠物一份爱</p>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">用户名</label>
            <div className="relative group">
              <input 
                type="text" 
                required
                className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl h-14 px-5 pl-12 shadow-soft ring-1 ring-slate-100 dark:ring-white/5 focus:ring-2 focus:ring-primary transition-all outline-none"
                placeholder="请输入您的昵称"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors">
                badge
              </span>
            </div>
          </div>

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
                mail
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">设置密码</label>
            <div className="relative group">
              <input 
                type="password" 
                required
                className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl h-14 px-5 pl-12 shadow-soft ring-1 ring-slate-100 dark:ring-white/5 focus:ring-2 focus:ring-primary transition-all outline-none"
                placeholder="至少6位数字或字母"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors">
                lock_open
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-2 px-1">
            <div className="flex items-center h-5">
              <input
                id="agree"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                checked={formData.agree}
                onChange={(e) => setFormData({...formData, agree: e.target.checked})}
              />
            </div>
            <label htmlFor="agree" className="text-xs text-slate-500 leading-normal">
              我已阅读并同意 <span className="text-primary font-bold cursor-pointer">《用户服务协议》</span> 和 <span className="text-primary font-bold cursor-pointer">《隐私政策》</span>
            </label>
          </div>

          <button 
            type="submit"
            className="mt-4 w-full h-14 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>注册并登录</span>
            <span className="material-symbols-outlined text-[20px]">person_add</span>
          </button>
        </form>

        <div className="mt-auto pt-10 text-center">
          <p className="text-slate-500 font-medium text-sm">
            已有账号?{' '}
            <button 
              onClick={() => navigate('/login')}
              className="text-primary font-bold hover:underline"
            >
              返回登录
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;

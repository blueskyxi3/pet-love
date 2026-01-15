
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="relative w-full h-[60vh] shrink-0">
        <div className="h-full w-full overflow-hidden rounded-b-[3rem] bg-[#e0d8cf] shadow-sm relative">
          <div 
            className="h-full w-full bg-cover bg-center" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRMcf95VKpPku5DBCHPa9349kFJZGqCAxItTXuEhB1fwKkgezEZ7hHjQ_riUZtmuIzwYJgaqhsq77siwYlwPO3x-4jECKFCm1cn2i5MdqEb5E1HewZfjvpfZWYkTNXyTn4zin5LIpXCLMl7I3_zGAzDXLh1DpwafHhTBSckf3uaYC_POcwAyaZA4JE4f8a2cNp1T0Xe66MKHmBvL3NQRhivQrPImJNeWt5Q8Hr4qtdqtjvVz_N4Sc3p6fu0RlqAOaSpwsFe4tDPyc")'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col items-center px-6 pt-10 pb-8 text-center justify-between">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-text-main dark:text-white tracking-tight text-3xl font-bold leading-tight">
            为爱寻找一个家
          </h1>
          <p className="text-text-main/70 dark:text-white/70 text-base font-normal leading-relaxed max-w-[280px]">
            让每一份流浪都终结在温暖的怀抱中
          </p>
        </div>
        
        <div className="w-full max-w-[320px] flex flex-col gap-4 mb-4">
          <button 
            onClick={() => navigate('/register')}
            className="group flex w-full cursor-pointer items-center justify-center rounded-full h-14 bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98]"
          >
            <span className="text-lg font-bold tracking-wide">立即注册</span>
            <span className="material-symbols-outlined ml-2 text-[20px] transition-transform group-hover:translate-x-1">
              person_add
            </span>
          </button>
          
          <button 
            onClick={() => navigate('/login')}
            className="flex w-full cursor-pointer items-center justify-center rounded-full h-12 bg-primary-light text-primary hover:bg-primary/10 transition-colors"
          >
            <span className="text-sm font-bold tracking-wide">已有账号？立即登录</span>
          </button>

          <button 
            onClick={() => navigate('/onboarding')}
            className="text-slate-400 text-xs font-medium hover:text-slate-600 transition-colors"
          >
            先随便看看
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "实名审核，安心领养",
      desc: "所有送养人均经过严格实名认证，确保领养过程安全、透明",
      icon: "verified_user",
    },
    {
      title: "加入宠物爱心社区",
      desc: "分享领养后的喜悦，获取专业的养宠知识与医疗建议",
      icon: "pets",
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="flex h-screen w-full flex-col relative overflow-hidden">
      <div className="flex items-center p-6 justify-end absolute top-0 left-0 right-0 z-20">
        <button 
          onClick={() => navigate('/home')}
          className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <p className="text-text-muted dark:text-[#d4a87d] text-base font-bold">跳过</p>
        </button>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8 relative z-10">
        <div className="w-full flex justify-center mb-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-[#ffaf5e] to-[#e0750d] rounded-[2rem] shadow-xl flex items-center justify-center transform transition-all duration-700">
              <span className="material-symbols-outlined text-white text-[5rem] drop-shadow-md">
                {steps[step].icon}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-xs mx-auto text-center">
          <h1 className="text-text-main dark:text-[#f2ece6] tracking-tight text-[28px] font-bold leading-tight pb-4">
            {steps[step].title}
          </h1>
          <p className="text-[#6b5d52] dark:text-[#a89f96] text-base font-normal leading-relaxed">
            {steps[step].desc}
          </p>
        </div>
      </main>

      <div className="w-full px-6 pb-10 pt-2 flex flex-col gap-6">
        <div className="flex w-full flex-row items-center justify-center gap-3">
          {steps.map((_, i) => (
            <div 
              key={i}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === step ? 'w-6 bg-primary' : 'w-2.5 bg-[#e7dbcf] dark:bg-white/10'}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="w-full bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all text-white text-lg font-bold h-14 rounded-full shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
        >
          <span>{step === steps.length - 1 ? '立即进入' : '继续'}</span>
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default OnboardingPage;

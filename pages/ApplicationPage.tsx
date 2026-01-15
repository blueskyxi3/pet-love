
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ApplicationPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = () => {
    // 模拟提交申请
    localStorage.setItem('adoption_status', 'pending');
    navigate(`/status/${id}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between px-4 py-3 sticky top-0 z-10 bg-background-light/90 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="flex h-10 w-10 items-center justify-center rounded-full active:bg-black/5">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10">申请表</h2>
      </header>

      <div className="px-6 py-2">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm shadow-md ring-4 ring-primary/20">1</div>
            <span className="text-xs font-semibold text-primary mt-1">基本信息</span>
          </div>
          <div className="h-[2px] flex-1 bg-primary/20 mx-2 rounded-full relative">
            <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-primary"></div>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-50">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-500 font-bold text-sm">2</div>
            <span className="text-xs font-medium text-slate-500 mt-1">家庭环境</span>
          </div>
          <div className="h-[2px] flex-1 bg-slate-200 mx-2 rounded-full"></div>
          <div className="flex flex-col items-center gap-1 opacity-50">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-500 font-bold text-sm">3</div>
            <span className="text-xs font-medium text-slate-500 mt-1">养宠经验</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24 no-scrollbar">
        <div className="mb-6">
          <h1 className="text-[28px] font-bold leading-tight mb-2">让我们更了解您</h1>
          <p className="text-slate-500 text-base">第 1 步 / 共 3 步：基本信息</p>
        </div>

        <form className="flex flex-col gap-5">
          {[
            { label: '姓名', icon: 'person', ph: '请输入您的姓名' },
            { label: '联系电话', icon: 'call', ph: '138 0000 0000' },
            { label: '职业', icon: 'work', ph: '例如：软件工程师' }
          ].map((field, i) => (
            <div key={i}>
              <label className="text-slate-900 text-sm font-semibold mb-2 block ml-1">{field.label}</label>
              <div className="relative flex items-center">
                <input className="w-full rounded-xl border-slate-200 py-4 pl-4 pr-12 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none shadow-sm" placeholder={field.ph} type="text"/>
                <span className="material-symbols-outlined absolute right-4 text-slate-400">{field.icon}</span>
              </div>
            </div>
          ))}

          <div>
            <label className="text-slate-900 text-sm font-semibold mb-3 block ml-1">目前的住房状况？</label>
            <div className="grid grid-cols-2 gap-3">
              {['自有住房', '租房'].map((opt, i) => (
                <label key={i} className="cursor-pointer relative">
                  <input className="peer sr-only" name="housing" type="radio" value={opt}/>
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-slate-100 peer-checked:border-primary peer-checked:bg-primary/5 h-full">
                    <span className="material-symbols-outlined text-3xl mb-2 text-slate-400 peer-checked:text-primary">{i === 0 ? 'home' : 'apartment'}</span>
                    <span className="font-medium text-slate-900 peer-checked:text-primary">{opt}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </form>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t border-slate-100">
        <button 
          onClick={handleSubmit}
          className="w-full bg-primary text-white font-bold text-lg py-4 rounded-full shadow-lg flex items-center justify-center gap-2"
        >
          <span>提交申请</span>
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
};

export default ApplicationPage;

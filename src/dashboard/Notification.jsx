import React from 'react';
import Header from './header';
import alert from '../assets/alert.svg';
import blackClock from '../assets/blackClock.svg';

const notifications = [{ content: '', time: '' }];
const Notification = () => {
  return (
    <section className="h-full overflow-y-auto bg-white px-5 mx-[-20px] md:px-16 md:mx-[-64px]">
      <Header title="Notifications" />

<h3 className="font-[700] text-lg md:hidden">Notifications</h3>
      <div className="mt-3">
        <div className="flex gap-3 md:gap-7 pt-3 md:pt-11 pb-[19px] md:pb-9 border-b border-b-[rgba(0,0,0,0.1)] ">
          <div className="flex items-center justify-center w-10 h-[35px] md:w-[68px] md:h-[60px] rounded-[5px] bg-[#FFCA1436]">
            <img src={alert} alt="Alert Svg" className="w-4 h-[15px] md:h-max md:w-max" />
          </div>

          <div className="">
            <div className="flex">
              <p className="max-w-[257px] sm:max-w-[615px] text-sm md:text-2xl font-[500]">
                Dear Joseph Micheal, a full house{' '}
                <span className="font-[600]">meeting</span> will be held this{' '}
                <span className="font-[600]">Saturday </span>
                Please click to see details 
                <span className="sm:hidden inline-block ml-2 py-auto text-center tracking-[0.15px] text-white bg-black text-[10px] font-[600] px-[9px] w-[38px] h-5 rounded-[5px]">New</span>
              </p>
              <div className="hidden sm:flex items-center justify-center tracking-[0.15px] text-white bg-black text-xs font-[600] h-[30px] px-4 w-max rounded-[5px]">
                New
              </div>
            </div>
            <div className="mt-1.5 md:mt-[13px] gap-[7px] md:gap-[9px] flex items-center">
              <img src={blackClock} alt="Clock Svg" className='w-[11px] h-[11px] md:w-max md:h-max' />
              <p className="text-[10px] md:text-xs">1hr ago</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 md:gap-7 pt-3 md:pt-11 pb-[19px] md:pb-9 border-b border-b-[rgba(0,0,0,0.1)] ">
          <div className="flex items-center justify-center w-10 h-[35px] md:w-[68px] md:h-[60px] rounded-[5px] bg-[#FFCA1436]">
            <img src={alert} alt="Alert Svg" className="w-4 h-[15px] md:h-max md:w-max" />
          </div>

          <div className="">
            <div className="flex">
              <p className="max-w-[257px] sm:max-w-[615px] text-sm md:text-2xl font-[500]">
                Dear Joseph Micheal, a full house{' '}
                <span className="font-[600]">meeting</span> will be held this{' '}
                <span className="font-[600]">Saturday </span>
                Please click to see details 
                <span className="sm:hidden inline-block ml-2 py-auto text-center tracking-[0.15px] text-white bg-black text-[10px] font-[600] px-[9px] w-[38px] h-5 rounded-[5px]">New</span>
              </p>
              <div className="hidden sm:flex items-center justify-center tracking-[0.15px] text-white bg-black text-xs font-[600] h-[30px] px-4 w-max rounded-[5px]">
                New
              </div>
            </div>
            <div className="mt-1.5 md:mt-[13px] gap-[7px] md:gap-[9px] flex items-center">
              <img src={blackClock} alt="Clock Svg" className='w-[11px] h-[11px] md:w-max md:h-max' />
              <p className="text-[10px] md:text-xs">1hr ago</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 md:gap-7 pt-3 md:pt-11 pb-[19px] md:pb-9 border-b border-b-[rgba(0,0,0,0.1)] ">
          <div className="flex items-center justify-center w-10 h-[35px] md:w-[68px] md:h-[60px] rounded-[5px] bg-[#FFCA1436]">
            <img src={alert} alt="Alert Svg" className="w-4 h-[15px] md:h-max md:w-max" />
          </div>

          <div className="">
            <div className="flex">
              <p className="max-w-[257px] sm:max-w-[615px] text-sm md:text-2xl font-[500]">
                Dear Joseph Micheal, a full house{' '}
                <span className="font-[600]">meeting</span> will be held this{' '}
                <span className="font-[600]">Saturday </span>
                Please click to see details 
                {/* <span className="md:hidden inline-block ml-2 py-auto text-center tracking-[0.15px] text-white bg-black text-[10px] font-[600] px-[9px] w-[38px] h-5 rounded-[5px]">New</span> */}
              </p>
              {/* <div className="hidden md:flex items-center justify-center tracking-[0.15px] text-white bg-black text-xs font-[600] h-[30px] px-4 w-max rounded-[5px]">
                New
              </div> */}
            </div>
            <div className="mt-1.5 md:mt-[13px] gap-[7px] md:gap-[9px] flex items-center">
              <img src={blackClock} alt="Clock Svg" className='w-[11px] h-[11px] md:w-max md:h-max' />
              <p className="text-[10px] md:text-xs">1hr ago</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 md:gap-7 pt-3 md:pt-11 pb-[19px] md:pb-9 border-b border-b-[rgba(0,0,0,0.1)] ">
          <div className="flex items-center justify-center w-10 h-[35px] md:w-[68px] md:h-[60px] rounded-[5px] bg-[#FFCA1436]">
            <img src={alert} alt="Alert Svg" className="w-4 h-[15px] md:h-max md:w-max" />
          </div>

          <div className="">
            <div className="flex">
              <p className="max-w-[257px] sm:max-w-[615px] text-sm md:text-2xl font-[500]">
                Dear Joseph Micheal, a full house{' '}
                <span className="font-[600]">meeting</span> will be held this{' '}
                <span className="font-[600]">Saturday </span>
                Please click to see details 
                {/* <span className="md:hidden inline-block ml-2 py-auto text-center tracking-[0.15px] text-white bg-black text-[10px] font-[600] px-[9px] w-[38px] h-5 rounded-[5px]">New</span> */}
              </p>
              {/* <div className="hidden md:flex items-center justify-center tracking-[0.15px] text-white bg-black text-xs font-[600] h-[30px] px-4 w-max rounded-[5px]">
                New
              </div> */}
            </div>
            <div className="mt-1.5 md:mt-[13px] gap-[7px] md:gap-[9px] flex items-center">
              <img src={blackClock} alt="Clock Svg" className='w-[11px] h-[11px] md:w-max md:h-max' />
              <p className="text-[10px] md:text-xs">1hr ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;

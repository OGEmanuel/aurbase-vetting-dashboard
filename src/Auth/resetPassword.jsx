import React from 'react';
import ForgetCard from '../components/ForgetCard';
import curlyArrowDown from '../assets/curlyArrowDown.svg';
import curlyArrowUp from '../assets/curlyArrowUp.svg';
import wavyLeft from '../assets/wavyLeft.svg';
import wavyRight from '../assets/wavyRight.svg';
import blackGirl from '../assets/blackGirl.svg';
import blackBoy from '../assets/blackBoy.svg';
import baldBoy from '../assets/baldBoy.svg';
import whiteBoy from '../assets/whiteBoy.svg';
import Close from '../assets/close.png';
import Logo from '../assets/images/logo.png';
import EyeSlash from '../assets/EyeSlash.svg';

const resetPassword = () => {
  return (
    <section className="relative lg:pt-[147px] lg:pb-[191px] bg-white lg:bg-bg-2 h-full overflow-y-auto flex items-center justify-center ">
      <img
        src={blackGirl}
        alt="black girl"
        className="hidden lg:block z-[10] absolute top-[110px] left-[65px]"
      />
      <img
        src={whiteBoy}
        alt="white boy"
        className="hidden lg:block z-[10] absolute top-[102px] right-[119px]"
      />
      <img
        src={baldBoy}
        alt="bald boy"
        className="hidden lg:block z-[10] absolute bottom-[74px] left-[137px]"
      />
      <img
        src={blackBoy}
        alt="black boy"
        className="hidden lg:block z-[10] absolute bottom-[99px] right-[114px]"
      />
      <img
        src={curlyArrowDown}
        alt="arrow down"
        className="hidden lg:block z-[5] absolute bottom-[258px] left-[0px]"
      />
      <img
        src={curlyArrowUp}
        alt="arrow up"
        className="hidden lg:block z-[5] absolute bottom-[340px] right-[0px]"
      />
      <img
        src={wavyLeft}
        alt=""
        className="hidden lg:block z-[5] absolute top-0 left-0"
      />
      <img
        src={wavyRight}
        alt=""
        className="hidden lg:block z-[5] absolute bottom-0 right-0"
      />
      <div className="rounded-[10px] z-10 w-full md:w-auto">
        <div className="w-full md:w-[700px] bg-white px-5 md:px-10 lg:px-20 pb-[100px]">
          <div className="hidden lg:flex justify-end md:pt-[67px]">
            <img src={Close} alt="" />
          </div>
          <div className="flex justify-start lg:justify-center mt-[89px] md:mt-0">
            <img src={Logo} alt="" />
          </div>
          <p className="lg:text-center mt-[18px] text-[45px] font-semibold">
            Reset Password
          </p>
          <p className="text-left lg:text-center mb-[55px] mt-[13px] lg:w-[75%] mx-auto">
            kindly set a new password for your account
          </p>
          <form action="">
            <div className="relative mb-10">
              <img
                // onClick={togglePassword}
                src={EyeSlash}
                alt="Eye Slash SVG"
                className="absolute bottom-4 right-6"
              />
              <label
                htmlFor=""
                className="block pb-2 text-[#4E4B66] text-lg font-[900]"
              >
                Enter New Password
              </label>
              <input
                // {...register('newpassword')}
                // type={showPassword ? 'text' : 'password'}
                placeholder="**********"
                className="w-full h-[58px] py-4 pl-4 rounded-[4px] border border-[#D6D8E7]"
              />
            </div>
            <div className="relative">
              <img
                // onClick={togglePassword}
                src={EyeSlash}
                alt="Eye Slash SVG"
                className="absolute bottom-4 right-6"
              />
              <label
                htmlFor=""
                className="block pb-2 text-[#4E4B66] text-lg font-[900]"
              >
                Confirm New Password
              </label>
              <input
                // {...register('newpassword')}
                // type={showPassword ? 'text' : 'password'}
                placeholder="**********"
                className="w-full h-[58px] py-4 pl-4 rounded-[4px] border border-[#D6D8E7]"
              />
            </div>
            <div className="mt-[66px]">
              <button className="text-white bg-black p-4 w-full rounded-lg">
              Set Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default resetPassword;

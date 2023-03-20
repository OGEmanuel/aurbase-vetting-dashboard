import React from 'react';
import logo from "../assets/logo.svg";
import EyeSlash from "../assets/EyeSlash.svg";
import curlyArrowDown from "../assets/curlyArrowDown.svg";
import curlyArrowUp from "../assets/curlyArrowUp.svg";
import wavyLeft from "../assets/wavyLeft.svg";
import wavyRight from "../assets/wavyRight.svg";
import blackGirl from "../assets/blackGirl.svg";
import blackBoy from "../assets/blackBoy.svg";
import baldBoy from "../assets/baldBoy.svg";
import whiteBoy from "../assets/whiteBoy.svg";

const Login = () => {
  return (
    <section className="relative pt-[147px] pb-[191px] bg-bg-2 h-full overflow-y-auto flex items-center justify-center ">
      <img
        src={blackGirl}
        alt=""
        className="z-[10] absolute top-[110px] left-[65px]"
      />
      <img
        src={whiteBoy}
        alt=""
        className="z-[10] absolute top-[102px] right-[119px]"
      />
      <img
        src={baldBoy}
        alt=""
        className="z-[10] absolute bottom-[74px] left-[137px]"
      />
      <img
        src={blackBoy}
        alt=""
        className="z-[10] absolute bottom-[99px] right-[114px]"
      />
      <img
        src={curlyArrowDown}
        alt=""
        className="z-[5] absolute bottom-[258px] left-[0px]"
      />
      <img
        src={curlyArrowUp}
        alt=""
        className="z-[5] absolute bottom-[340px] right-[0px]"
      />
      <img src={wavyLeft} alt="" className="z-[5] absolute top-0 left-0" />
      <img src={wavyRight} alt="" className="z-[5] absolute bottom-0 right-0" />
      
        <div className="rounded-[10px] z-[10] bg-white w-[700px] px-[115.5px] pt-[67px] pb-[73px] m-auto flex flex-col justify-center">
          <img
            src={logo}
            alt="Aurbase Logo"
            className="w-max flex self-center"
          />
          <h3 className="text-[45px] leading-[54px] text-center font-[600] pt-4">
            Welcome Back
          </h3>
          <p className="pt-3 pb-[22px] text-center text-[#4E4B66]">
            To continue using our services, Log in to your account
          </p>

          <div className="mb-7">
            <label
              htmlFor="email"
              className="block pb-2 text-[#4E4B66] text-lg font-[900]"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email address here"
              className="w-full h-[58px] py-4 pl-4 placeholder-[#A0A3BD] rounded-[4px] border border-[#D6D8E7] "
            />
          </div>
          <div className="relative">
            <img
              src={EyeSlash}
              alt="Eye Slash SVG"
              className="absolute bottom-4 right-6"
            />
            <label
              htmlFor=""
              className="block pb-2 text-[#4E4B66] text-lg font-[900]"
            >
              Password
            </label>
            <input
              type="text"
              placeholder="**********"
              className="w-full h-[58px] py-4 pl-4 rounded-[4px]  border border-[#D6D8E7] "
            />
          </div>

          <div className="font-[900] text-[#4E4B66] flex justify-between items-center mt-[15px]">
            <div className="flex gap-[11px] items-center">
              <input type="checkbox" />
              <p className="">Remember me</p>
            </div>
            <p className="">Forgot Password</p>
          </div>

          <button
            className="bg-black w-full text-white mt-[49px] py-[18px] rounded-[8px] shadow-[0px_4px_8px_0px_#39B54A0A]
"
          >
            Log In
          </button>
          <p className="pt-4 text-center">
            <span className="text-[#3A3A3A80]"> Not yet a member?</span> Create
            an account now!{' '}
          </p>
        </div>
    </section>
  );
};

export default Login;

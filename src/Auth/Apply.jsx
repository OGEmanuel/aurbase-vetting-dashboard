import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import EyeSlash from '../assets/EyeSlash.svg';
import dropdown from '../assets/dropdown.svg';
import curlyArrowDown from '../assets/curlyArrowDown.svg';
import curlyArrowUp from '../assets/curlyArrowUp.svg';
import wavyLeft from '../assets/wavyLeft.svg';
import wavyRight2 from '../assets/wavyRight2.svg';
import blackGirl from '../assets/blackGirl.svg';
import blackBoy from '../assets/blackBoy.svg';
import baldBoy from '../assets/baldBoy.svg';
import whiteBoy from '../assets/whiteBoy.svg';

const Apply = () => {
  const [showTracks, setShowTracks] = useState(false);
  const [showMedia, setShowMedia] = useState(false);

  const trackDropdownHandler = () => {
    setShowTracks(!showTracks);
  };
  const mediumDropdownHandler = () => {
    setShowMedia(!showMedia);
  };

  return (
    // <section className="pt-[147px] pb-[191px] bg-[#FFFFFFF2] h-screen overflow-y-auto flex items-center justify-center ">
    <section className=''>
      {/* <AuthLayout> */}
      <div className="relative  bg-bg-2 h-full overflow-x-hidden overflow-y-auto m-a flex items-center justify-center ">
        <img
          src={blackGirl}
          alt="bitmoji"
          className="z-[10] absolute top-[110px] left-[65px]"
        />
        <img
          src={whiteBoy}
          alt="bitmoji"
          className="z-[10] absolute top-[102px] right-[50px]"
        />
        <img
          src={baldBoy}
          alt="bitmoji"
          className="z-[10] absolute bottom-[210px] left-[50px]"
        />
        <img
          src={blackBoy}
          alt="bitmoji"
          className="z-[10] absolute bottom-[335px] right-[70px]"
        />
        <img
          src={curlyArrowDown}
          alt="Arrow pointing down"
          className="z-[5] absolute bottom-[558px] left-[-50px]"
        />
        <img
          src={curlyArrowUp}
          alt="Arrow pointing up"
          className="z-[5] absolute bottom-[578px] right-[-40px]"
        />
        <img src={wavyLeft} alt="Abstract waves svg" className="z-[5] absolute top-0 left-0" />
        <img
          src={wavyRight2}
          alt="Abstract waves svg"
          className="z-[5] absolute bottom-0 right-0"
        />

        <div className="mt-[147px] mb-[191px] rounded-[10px] z-[10] bg-white w-[845px] px-[159px] pt-[62px] pb-[51px] m-auto flex flex-col justify-center">
          <img
            src={logo}
            alt="Aurbase Logo"
            className="w-max flex self-center"
          />
          <h4 className="text-center text-[32px] font-[600] pt-[18px] pb-9">
            Apply to Join our Talent Network
          </h4>

          <div className="mb-[30px]">
            <p className="pb-[6px] text-xl font-[600]">Track</p>
            <div className="flex items-center justify-between text-xl font-[600] w-full h-[58px] py-4 pl-[23px] pr-[25px] rounded border border-[#D6D8E7] ">
              I am a Developer
              <img
                onClick={trackDropdownHandler}
                src={dropdown}
                alt="Dropdown Icon"
                className="w-[15px] h-2.5"
              />
            </div>
            {showTracks && (
              <div className="h-[58px] text-xl font-[600] w-full pl-[23px] mt-4 bg-white shadow-md">
                <li className=" list-none">I am a Product Manager</li>
              </div>
            )}
          </div>
          <div className="mb-[30px]">
            <label
              htmlFor="email"
              className="block pb-[6px] text-xl font-[600]"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="sample@gmail.com"
              className="w-full h-[58px] py-4 pl-4 placeholder-[#A0A3BD] rounded-[4px] border border-[#D6D8E7] "
            />
          </div>
          <div className="relative mb-[30px]">
            <img
              src={EyeSlash}
              alt="Eye Slash SVG"
              className="absolute bottom-4 right-6"
            />
            <label htmlFor="" className="block pb-[6px] text-xl font-[600]">
              Password
            </label>
            <input
              type="text"
              placeholder="**********"
              className="w-full h-[58px] py-4 pl-4 rounded-[4px]  border border-[#D6D8E7] "
            />
          </div>
          <div className="mb-[30px]">
            {/* <img src={EyeSlash} alt="Eye Slash SVG" className="absolute bottom-4 right-6" /> */}
            <label htmlFor="" className="block pb-[6px] text-xl font-[600]">
              Confirm Password
            </label>
            <input
              type="text"
              placeholder="**********"
              className="w-full h-[58px] py-4 pl-4 rounded-[4px]  border border-[#D6D8E7] "
            />
          </div>

          <div className="">
            <p className="pb-[6px] text-xl font-[600]">
              How do you hear about us ?
            </p>
            <div className="flex items-center justify-between text-xl font-[600] w-full h-[58px] py-4 pl-[23px] pr-[25px] rounded-[4px] border border-[#D6D8E7] ">
              Twitter
              <img
                onClick={mediumDropdownHandler}
                src={dropdown}
                alt="Dropdown Icon"
                className="w-[15px] h-2.5"
              />
            </div>
            {showMedia && (
              <div className="h-[58px] text-xl font-[600] w-full pl-[23px] mt-4 bg-white shadow-md">
                <li className=" list-none">Facebook</li>
              </div>
            )}
          </div>
          <div className="mt-[22px] items-start flex gap-2">
            <input type="checkbox" />
            <p className="text-sm leading-[18px] mt-[-2px]">
              You acknowledge that the Aurbase screening procedure is
              confidential and that you will not reveal any information about it
              publicly. You acknowledge that you have read and agree to our
              terms and conditions, privacy and policy, and cookie policy by
              submitting.
            </p>
          </div>

          <button
            className="bg-black w-full font-[600] text-white mt-[23px] py-[18px] rounded-[4px] shadow-[0px_4px_8px_0px_#39B54A0A]
"
          >
            Apply Now
          </button>
          <p className="text-center pt-[14px]">
            <span className="text-[#3A3A3A80]">Already a member?</span> Login
            now!
          </p>
        </div>
      </div>
      {/* </AuthLayout> */}
    </section>
  );
};

export default Apply;

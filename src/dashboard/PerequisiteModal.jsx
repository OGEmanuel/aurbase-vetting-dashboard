import React from 'react';
import { Link } from 'react-router-dom';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import dropdown2 from '../assets/dropdown2.svg';
import clock from '../assets/clock.svg';
import close from '../assets/trackClose.svg';
import logo from '../assets/logo-small.svg';

const PerequisiteModal = props => {

  return (
    <div className="md:ml-[-64px] ml-[-20px] z-[100000000] bg-black bg-opacity-50 md:w-[80vw] h-screen fixed self-start flex items-center justify-center">
      <div className="bg-white pl-[38px] pr-[46px] pt-[22px] pb-[34px] w-[506px]">
        <div className="flex justify-between items-center ">
          <div className="mr-16 w-16 h-16 bg-[#D9D9D9] flex items-center justify-center rounded-full">
            <img src={logo} alt="Aurbase Logo" className="" />
          </div>
          <h4 className="text-2xl font-[600]">Prerequisite Test</h4>
          <img
            onClick={props.onClose}
            src={close}
            alt="Close Modal Svg"
            className="ml-auto"
          />
        </div>

        <div className="mt-[29px] flex flex-wrap items-center justify-center gap-[7px] md:gap-4">
          {/* {stacks[i].skills.map((skill) => ( */}
          <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-1 bg-[#F2F2F2] rounded-[5px]">
            <img src={html} alt="HTML Logo" className="w-4 md:w-auto" />
            <p className="text-xs md:text-base">HTML</p>
          </div>
          <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-1 bg-[#F2F2F2] rounded-[5px]">
            <img src={css} alt="CSS Logo" className="w-4 md:w-auto" />
            <p className="text-xs md:text-base">CSS</p>
          </div>
          <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-1 bg-[#F2F2F2] rounded-[5px]">
            <img src={js} alt="JavaScript Logo" className="w-4 md:w-auto" />
            <p className="text-xs md:text-base">JavaScript</p>
          </div>
          {/* ))} */}
        </div>

        <div className="mt-6 flex justify-center items-center gap-2.5">
          <p className="text-lg font-[600]">Choose a Stack :</p>
          <div className="px-6 py-[13px] h-[50px] md:h-[50px] w-[74px] md:w-[158px] flex items-center bg-[#F2F2F2] rounded-[5px]">
            {/* <div className="flrx"></div> */}
            <img src={html} alt="HTML Logo" className="pr-1 w-4 md:w-auto" />
            <p className="pl-1 pr-10 text-xs md:text-base">HTML</p>
            <img src={dropdown2} alt="Dropdown Svg" />
          </div>
        </div>
        <h4 className="text-2xl font-[700] mt-5">Instructions</h4>

        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center justify-center w-10 h-10 font-[600] text-2xl bg-[#FFCA14] rounded-[100%] ">
            1
          </div>
          <p className="text-lg">All questions are in multiple choices</p>
        </div>
        <div className="flex items-center gap-4 mt-[22px]">
          <div className="flex items-center justify-center w-10 h-10 font-[600] text-2xl bg-[#FFCA14] rounded-[100%] ">
            2
          </div>
          <p className="text-lg">You have only one answer at each question</p>
        </div>

        <div className="mt-6 flex justify-between items-center font-[600]">
          <div className="flex items-center">
            <p className="pr-2.5">Test Duration:</p>
            <div className="flex items-center text-[#FFCA14]">
              <img src={clock} alt="Clock Svg" />
              <p className="ml-[3px]">30 minutes </p>
            </div>
          </div>

          <Link to="questions">
            <button className="bg-black text-white rounded-[5px] px-11 py-[14.5px]">
              Start Test
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerequisiteModal;

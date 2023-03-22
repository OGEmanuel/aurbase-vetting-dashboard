import React from 'react';
import react from '../assets/react.svg';
import clock from '../assets/clock.svg';
import close from '../assets/trackClose.svg';

const StartTestModal = (props) => {
    const closeModalHandler = () =>{}
  return (
    <div onClick={props.onClose} className="z-[100000000] bg-black bg-opacity-50 w-[78.4%] h-screen fixed  flex items-center justify-center">
      <div className="bg-white px-10 pt-[30px] pb-9 w-[506px]">
        <img onClick={props.onClose} src={close} alt="Close Modal Svg" className='ml-auto' />
        <div className="flex gap-3 items-center ">
          <img src={react} alt="" className="w-[58px] h-[52px]" />
          <h4 className="text-2xl font-[700]">React Js Test</h4>
        </div>

        <p className="mt-2">
          React makes it painless to create interactive UIs. Design simple views
          for each state Build encapsulated components that manage their own
          state, then compose them to make complex UIs.
        </p>
        <h4 className="text-2xl font-[700] mt-2">Instructions</h4>

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

          <button className="bg-black text-white rounded-[5px] px-11 py-[14.5px]">
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartTestModal;

import React from 'react';
import Header from '../header';
import Circle from '../../components/Circle';
import Timer from './Timer';
import next from '../../assets/next.png';

const AssessmentQuestions = () => {
  const questions = [
    {
      question: '',
      options: [
        {
          id: 'option1',
          value:
            '09:15 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
        },
        {
          id: 'option2',
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam Lorem',
        },
      ],
    },
  ];
  return (
    <>
      <Header />
      <section className="w-full h-full">
        <div className="flex flex-col rounded-[10px] bg-white pt-11 pl-[67px] pr-[75px] pb-11">
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="text-4xl font-[700]">Question 1</h2>
              <p className="text-[32px] pt-6 max-w-[475px]">
                What do you consider your greatest accomplishment?
              </p>
            </div>
            <div className="h-[120.84px] w-[120.84px]">
              <Timer />
            </div>
          </div>
          <div className="mt-[34px] font-[600] flex flex-col gap-4 ">
            <div className="flex items-center gap-5">
              <input className="w-7 h-7" type="radio" name="q1" id="" />
              <p className="max-w-[431px]">
                09:15 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam
              </p>
            </div>
            <div className="flex items-center gap-5">
              <input className="w-7 h-7" type="radio" name="q1" id="" />
              <p className="max-w-[431px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam Lorem
              </p>
            </div>
            <div className="flex items-center gap-5">
              <input className="w-7 h-7" type="radio" name="q1" id="" />
              <p className="max-w-[431px]">
                ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                Lorem ipsum
              </p>
            </div>
            <div className="flex items-center gap-5">
              <input className="w-7 h-7" type="radio" name="q1" id="" />
              <p className="max-w-[431px]">
                dolor sit amet, consectetur adipiscing elit ut aliquam
              </p>
            </div>
          </div>

          <button className="text-white bg-black h-[47px] rounded-[5px] mt-[59px] py-[11.5px] px-[28.5px] flex self-end items-center gap-4 text-2xl font-[600]">
            Next
            <img src={next} alt="Next Svg" />
          </button>
        </div>
      </section>
    </>
  );
};

export default AssessmentQuestions;

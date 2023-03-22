import React, {useState} from 'react';
import Header from './header';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import angular from '../assets/angular.svg';
import greaterThan from '../assets/greaterThan.svg';
import circleArrowRight from '../assets/circleArrowRight.svg';
import important_2 from '../assets/important_2.svg';

import StartTestModal from './StartTestModal';

const skillTests = [
  {
    skill: 'React js',
    logo: react,
    alt: 'React logo',
  },
  {
    skill: 'Angular ',
    logo: angular,
    alt: 'Angular logo',
  },
];

const TrackTest = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () =>{
    setShowModal(false)
  }
  const openModalHandler = () =>{
    setShowModal(true)
  }

  return (
    <>
    {showModal && <StartTestModal onOpen={openModalHandler} onClose={closeModalHandler} />}
      <section className="h-full w-auto relative">
        <Header />
        <div className="text-2xl font-[600] flex items-center mb-8">
          <p className="mr-[11px] text-[#00000080]">Track</p>
          <img src={greaterThan} alt="Greater than Svg" className="" />
          <p className="ml-[6.4px]">Frontend Developer stack </p>
        </div>
        <div className="relative mb-7 flex flex-col bg-white py-4 md:pt-5 px-[17px] md:pl-[42px] md:pb-[30px] md:pr-[49px]">
          <div className="absolute left-0 top-0 h-full w-1.5 rounded-r-[50px] bg-black"></div>
          <div className="gap-1.5 flex items-center md:justify-end">
            <img
              src={important_2}
              alt="An Svg that signifies important"
              className="w-4 h-4 md:w-auto md:h-auto"
            />
            <p className="text-[#EC1C24A6] text-[8px] md:text-xs">
              Not Taken Yet
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* left */}
            <div className="">
              <h4 className="font-[600] leading-[21px] text-lg md:text-2xl mb-[7px] md:mb-5">
                Take Prerequisite test for your stack.
              </h4>
              <p className="md:text-base text-xs md:leading-[21px]  md:max-w-[447px] mb-3 md:mb-4">
                The test assesses candidates' basic knowledge of HTML, CSS, and
                JavaScript
              </p>

              <div className="flex flex-wrap items-center gap-[7px] md:gap-4">
                {/* {stacks[i].skills.map((skill) => ( */}
                <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-[3px] bg-[#F2F2F2] rounded-[5px]">
                  <img src={html} alt="HTML Logo" className="w-4 md:w-auto" />
                  <p className="text-xs md:text-base">HTML</p>
                </div>
                <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-[3px] bg-[#F2F2F2] rounded-[5px]">
                  <img src={css} alt="CSS Logo" className="w-4 md:w-auto" />
                  <p className="text-xs md:text-base">CSS</p>
                </div>
                <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-[3px] bg-[#F2F2F2] rounded-[5px]">
                  <img
                    src={js}
                    alt="JavaScript Logo"
                    className="w-4 md:w-auto"
                  />
                  <p className="text-xs md:text-base">JavaScript</p>
                </div>
                {/* ))} */}
              </div>
            </div>

            {/* right */}
            <button onClick={openModalHandler} className="mt-5 md:mt-0 flex  self-start md:self-auto items-center justify-center gap-1 md:h-[42px] h-[38px] w-[115px] md:w-[154px] text-xs md:text-base text-white bg-[#121212] rounded-[5px]">
              View Stack test
              <img
                src={circleArrowRight}
                alt="Arrow pointing right"
                className="w-4 h-4 md:w-auto md:h-auto"
              />
            </button>
          </div>
        </div>

        {skillTests.map(skill => (
          <div className="relative mb-7 flex flex-col bg-white py-4 md:pt-5 px-[17px] md:pl-[42px] md:pb-[30px] md:pr-[49px]">
            <div className="absolute left-0 top-0 h-full w-1.5 rounded-r-[50px] bg-[#5382A1]"></div>
            <div className="gap-1.5 flex items-center md:justify-end">
              <img
                src={important_2}
                alt="An Svg that signifies important"
                className="w-4 h-4 md:w-auto md:h-auto"
              />
              <p className="text-[#EC1C24A6] text-[8px] md:text-xs">
                Not Taken Yet
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* left */}
              <div className="">
                <h4 className="flex items-center font-[600] leading-[21px] text-lg md:text-2xl mb-[7px] md:mb-5">
                  Take Test on
                  <img
                    src={skill.logo}
                    alt={skill.alt}
                    className="pl-2.5 pr-[3px]"
                  />
                  {skill.skill}
                </h4>
                <p className="md:text-base text-xs md:leading-[21px]  md:max-w-[447px] mb-3 md:mb-4">
                  The test assesses candidates’ knowledge of javascript famework{' '}
                  {skill.skill}”
                </p>

                <div className="flex flex-wrap items-center gap-[7px] md:gap-4">
                  {/* {stacks[i].skills.map((skill) => ( */}
                  <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-[3px] bg-[#F2F2F2] rounded-[5px]">
                    <img
                      src={skill.logo}
                      alt={skill.alt}
                      className="w-4 md:w-auto"
                    />
                    <p className="text-xs md:text-base">{skill.skill}</p>
                  </div>
                  {/* <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-[3px] bg-[#F2F2F2] rounded-[5px]">
                  <img src={css} alt="CSS Logo" className="w-4 md:w-auto" />
                  <p className="text-xs md:text-base">CSS</p>
                </div>
                <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-[3px] bg-[#F2F2F2] rounded-[5px]">
                  <img
                    src={js}
                    alt="JavaScript Logo"
                    className="w-4 md:w-auto"
                  />
                  <p className="text-xs md:text-base">JavaScript</p>
                </div> */}
                  {/* ))} */}
                </div>
              </div>

              {/* right */}
              <div className="flex flex-col self-auto md:self-end">
                <button className="mt-5 md:mt-0 flex  self-start md:self-auto items-center justify-center gap-1 md:h-[42px] h-[38px] w-[115px] md:w-[154px] text-xs md:text-base text-white bg-[#121212] rounded-[5px]">
                  View Stack test
                  <img
                    src={circleArrowRight}
                    alt="Arrow pointing right"
                    className="w-4 h-4 md:w-auto md:h-auto"
                  />
                </button>
                <p className="text-sm text-start md:text-end mt-5 leading-[35px]">
                  Test Duration :60mins
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TrackTest;

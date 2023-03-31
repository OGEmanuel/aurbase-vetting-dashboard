import React from 'react';
import Header from './header';
import stack from '../assets/stack.png';
import important from '../assets/important.svg';
import radioBlack from '../assets/radioBlack.svg';
import radioYellow from '../assets/radioYellow.svg';
import radioPurple from '../assets/radioPurple.svg';
import php from '../assets/php.svg';
import laravel from '../assets/laravel.svg';
import nodejs from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import jQuery from '../assets/jQuery.svg';
import angular from '../assets/angular.svg';
import vue from '../assets/vue.svg';
import circleArrowRight from '../assets/circleArrowRight.svg';
import important_2 from '../assets/important_2.svg';
import { Link } from 'react-router-dom';

const stacks = [
  {
    stack: 'Frontend Developer',
    skills: [
      { skill: 'React Js', logo: react, alt: 'React logo' },
      { skill: 'JQuery', logo: jQuery, alt: 'JQuery logo' },
      { skill: 'Angular', logo: angular, alt: 'Angular logo' },
      { skill: 'Vue', logo: vue, alt: 'Vue logo' },
    ],
    color: '#000000',
  },
  {
    stack: 'Back-end Developer',
    skills: [
      { skill: 'PHP', logo: php, alt: 'PHP logo' },
      { skill: 'Laravel', logo: laravel, alt: 'Laravel logo' },
      { skill: 'Node.Js', logo: nodejs, alt: 'Nodejs logo' },
    ],
    color: '#FFDD67',
  },
  {
    stack: 'Back-end Developer',
    skills: [
      { skill: 'PHP', logo: php, alt: 'PHP logo' },
      { skill: 'Laravel', logo: laravel, alt: 'Laravel logo' },
      { skill: 'Node.Js', logo: nodejs, alt: 'Nodejs logo' },
    ],
    color: '#A259FF',
  },
];

const Assessment = () => {
  return (
    <div>
      <Header title="Assessment" />
      <section className=" h-full ">
        {/* Hero section */}
        <div className="mb-7 md:mb-10 md:pt-1.5 md:pb-0 px-7 py-9 md:pr-5 md:pl-[52px] flex flex-col-reverse md:flex-row md:justify-between w-full h-max items-center bg-dp bg-cover bg-[#121212] text-white md:rounded-[10px]">
          {/*hero left */}
          <div className="flex flex-col md:self-auto self-start ">
            <p className="text-[20px] md:text-2xl mb-3.5 md:mb-[9px]">
              Assessment
            </p>
            <p className="text-2xl md:text-[32px] font-[600] md:mb-[18px] max-w-[225px] md:max-w-[479px]">
              Pass a stack test to become eligible for a live interview
            </p>
            <div className="hidden md:flex items-center gap-[15px] mb-4">
              <img
                src={important}
                alt="An Svg that signifies important"
                className=""
              />
              <p className="">
                Your assesment is based on your seniority level
              </p>
            </div>
            <div className="hidden md:flex gap-1.5 items-center text-sm">
              <p className="">Note:</p>
              <div className="font-[600] gap-3 flex items-center ">
                <div className="flex items-center gap-1.5">
                  <img src={radioBlack} alt="A black ellipse Svg" />
                  <p>Senior Level</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src={radioYellow} alt="A yellow ellipse Svg" />
                  <p>Intermediate Level</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src={radioPurple} alt="A purple ellipse Svg" />
                  <p>Junior Level</p>
                </div>
              </div>
            </div>
          </div>
          {/* hero right */}
          <div className="w-[249px] pb-[30px] md:pb-0 md:w-[484px]">
            <img
              src={stack}
              alt="A vector showing different JavaScript frameworks"
            />
          </div>
        </div>

        {/* Frontend stack */}
        {stacks.map((stack, i) => (
          <div className="relative mb-7 flex flex-col bg-white py-4 md:pt-5 px-[17px] md:pl-[42px] md:pb-[30px] md:pr-[49px]">
            <div
              className={`absolute left-0 top-0 h-full w-1.5 rounded-r-[50px]`}
              style={{ background: `${stack.color}` }}
            ></div>
            <div className="gap-1.5 flex items-center md:justify-end mb-2 md:mb-0">
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
                <h4 className="font-[600] leading-[21px] text-lg md:text-[32px] mb-[7px] md:mb-5">
                  {stack.stack} stack
                </h4>
                <p className="md:text-lg text-xs md:leading-[21px]  md:max-w-[551px] mb-3 md:mb-4">
                  Complete your stack challenge to improve your chance in
                  landing that dream job
                </p>

                <div className="flex flex-wrap items-center gap-[7px] md:gap-4">
                  {stacks[i].skills.map(skill => (
                    <div className="h-8 md:h-[53px] w-[74px] md:w-[110px] justify-center flex items-center gap-[3px] bg-[#F2F2F2] rounded-[5px]">
                      <img
                        src={skill.logo}
                        alt={skill.alt}
                        className="w-4 md:w-auto"
                      />
                      <p className="text-xs md:text-base">{skill.skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* right */}
              <Link className="flex self-start md:self-auto" to={`${i}`}>
                <button className="mt-5 md:mt-0 flex  self-start md:self-auto items-center justify-center gap-1 md:h-[42px] h-[38px] w-[115px] md:w-[154px] text-xs md:text-base text-white bg-[#121212] rounded-[5px]">
                  View Stack test
                  <img
                    src={circleArrowRight}
                    alt="Arrow pointing right"
                    className="w-4 h-4 md:w-auto md:h-auto"
                  />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Assessment;

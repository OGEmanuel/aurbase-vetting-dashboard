import frontend from '../../../../assets/frontend.svg';
import frontendlg from '../../../../assets/frontend-lg.svg';
import close from '../../../../assets/close.svg';
import react from '../../../../assets/react.svg';
import search from '../../../../assets/search.svg';
import angular from '../../../../assets/angular.svg';
import js from '../../../../assets/js.svg';
import jQuery from '../../../../assets/jQuery.svg';
import ember from '../../../../assets/ember.svg';
import vue from '../../../../assets/vue.svg';
import bin from '../../../../assets/bin.svg';
import arrow from '../../../../assets/roles-drop.svg';
import remove from '../../../../assets/remove.svg';
import arrowb from '../../../../assets/drop-black.svg';

import { useState } from 'react';

const STACK = [
  { id: 1, icon: react, tech: 'React' },
  { id: 2, icon: angular, tech: 'Angular' },
  { id: 3, icon: js, tech: 'Javascript' },
  { id: 4, icon: jQuery, tech: 'JQuery' },
  { id: 5, icon: ember, tech: 'EmberJs' },
  { id: 6, icon: vue, tech: 'Vue' },
];

const Roles = () => {
  const [checked, setChecked] = useState([]);
  const handleCheckChange = id => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className="bg-white px-6 md:px-12 rounded-custom w-[88.5%] max-width xl:w-auto z-[9000] fixed top-[50%] left-[50%] xl:left-[60%] translate-x-[-50%] translate-y-[-50%] scroll overflow-auto h-[30rem]">
      <div className="grid grid-cols-[1fr,_max-content] border-b-2 border-extra-9 mb-5">
        <div className="py-6 md:py-7 border-r-2 border-extra-9 pr-12">
          <p className="font-semibold md:text-[2.5rem] mb-5">Add Roles</p>
          <form action="" className="relative mb-2.5">
            <input
              type="search"
              placeholder="Frontend"
              className="w-full outline-none py-[7px] border border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 xl:w-[20.07rem] pl-10 pr-5 placeholder:opacity-50"
            />
            <img
              src={search}
              alt=""
              className="absolute top-[.8rem] left-[.8rem]"
            />
          </form>
          <div className="flex bg-bg-6 py-[10px] px-5 gap-2.5 rounded-b-custom-sm">
            <img src={frontend} alt="" />
            <p className="text-sm">Frontend Developer</p>
          </div>
        </div>
        <div className="py-6 md:pt-[2.7rem] md:pb-[1.5rem] pl-6">
          <img src={close} alt="" className="w-auto ml-auto mb-5" />
          <div>
            <p className="text-sm mb-3">Add your prefered stack</p>
            <form action="" className="grid grid-cols-3 gap-3.5">
              {STACK.map(stack => (
                <label htmlFor={stack.id} key={stack.id}>
                  <input
                    type="checkbox"
                    id={stack.id}
                    className="hidden"
                    onChange={() => handleCheckChange(stack.id)}
                  />
                  <div
                    className={`flex gap-1 items-center bg-bg-7 p-3 rounded-custom-sm border-[1.5px] ${
                      checked.includes(stack.id)
                        ? 'border-extra-10'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={stack.icon}
                      alt=""
                      className={stack.icon === angular ? 'w-[1.2rem]' : ''}
                    />
                    <p>{stack.tech}</p>
                  </div>
                </label>
              ))}
              <button className="text-sm text-white p-4 bg-black rounded-custom-sm col-[3_/_span_1]">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      <form action="">
        <div>
          <div className="bg-extra-10 font-semibold text-white grid grid-cols-[repeat(4,_minmax(max-content,_1fr))] gap-10 px-5 py-3 items-center mb-5">
            <div className="flex gap-3">
              <img src={frontendlg} alt="" />
              <p>Frontend Developer</p>
            </div>
            <label htmlFor="" className="flex gap-[2.7rem] items-center">
              <p className="text-sm">Seniority Level:</p>
              <div className="relative">
                <select
                  name=""
                  id=""
                  defaultValue="4"
                  className="bg-extra-10 text-xs outline-none border border-extra-11 rounded-custom-tiny py-1 pl-2.5 pr-7 sel"
                >
                  <option value="1">1 years</option>
                  <option value="2">2 years</option>
                  <option value="3">3 years</option>
                  <option value="4">4 years</option>
                  <option value="5">5 years</option>
                </select>
                <img
                  src={arrow}
                  alt=""
                  className="absolute top-[0.75rem] right-[0.5rem] pointer-events-none"
                />
              </div>
            </label>
            <label htmlFor="" className="flex gap-5 items-center">
              <p className="text-sm">Role priority:</p>
              <div className="relative">
                <select
                  name=""
                  id=""
                  defaultValue="1"
                  className="bg-extra-10 text-xs outline-none border border-extra-11 rounded-custom-tiny py-1 pl-2.5 pr-7  sel"
                >
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                </select>
                <img
                  src={arrow}
                  alt=""
                  className="absolute top-[0.75rem] right-[0.5rem] pointer-events-none"
                />
              </div>
            </label>
            <button className="justify-self-end">
              <img src={bin} alt="" />
            </button>
          </div>
          <div className="font-semibold grid grid-cols-[repeat(4,_minmax(max-content,_1fr))] gap-10 px-5 py-3 items-center">
            <div className="flex gap-3 w-[10.3rem]">
              <img src={react} alt="" />
              <p>React js</p>
            </div>
            <label htmlFor="" className="flex gap-4 items-center">
              <p className="text-sm">Years of Experience:</p>
              <div className="relative">
                <select
                  name=""
                  id=""
                  defaultValue="4"
                  className="text-xs outline-none border border-extra-13 rounded-custom-tiny py-1 pl-2.5 pr-7 sel"
                >
                  <option value="1">1 years</option>
                  <option value="2">2 years</option>
                  <option value="3">3 years</option>
                  <option value="4">4 years</option>
                  <option value="5">5 years</option>
                </select>
                <img
                  src={arrowb}
                  alt=""
                  className="absolute top-[0.75rem] right-[0.5rem] pointer-events-none"
                />
              </div>
            </label>
            <label htmlFor="" className="flex gap-1 items-center">
              <p className="text-sm">Experience level</p>
              <div className="relative">
                <select
                  name=""
                  id=""
                  defaultValue="1"
                  className="text-xs outline-none border border-extra-13 rounded-custom-tiny py-1 pl-2.5 pr-7  sel"
                >
                  <option value="1">Junior</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Senior</option>
                </select>
                <img
                  src={arrowb}
                  alt=""
                  className="absolute top-[0.75rem] right-[0.5rem] pointer-events-none"
                />
              </div>
            </label>
            <button className="flex gap-1 items-center justify-self-end">
              <img src={remove} alt="" className="" />
              <p className="text-sm font-normal text-extra-12">Remove</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Roles;

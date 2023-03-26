import angular from '../../../../../assets/angular.svg';
import js from '../../../../../assets/js.svg';
import jQuery from '../../../../../assets/jQuery.svg';
import ember from '../../../../../assets/ember.svg';
import vue from '../../../../../assets/vue.svg';
import react from '../../../../../assets/react.svg';
import { useState } from 'react';

const STACK = [
  { id: 1, icon: react, tech: 'React' },
  { id: 2, icon: angular, tech: 'Angular' },
  { id: 3, icon: js, tech: 'Javascript' },
  { id: 4, icon: jQuery, tech: 'JQuery' },
  { id: 5, icon: ember, tech: 'EmberJs' },
  { id: 6, icon: vue, tech: 'Vue' },
];

const StackForm = () => {
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
    <form action="" className="grid grid-cols-3 gap-3.5 pb-1 md:pb-0">
      {STACK.map(stack => (
        <label htmlFor={stack.id} key={stack.id}>
          <input
            type="checkbox"
            id={stack.id}
            className="hidden"
            onChange={() => handleCheckChange(stack.id)}
          />
          <div
            className={`flex gap-1 items-center bg-bg-7 py-3 px-1 justify-center md:p-3 rounded-custom-sm border-[1.5px] ${
              checked.includes(stack.id)
                ? 'border-extra-10'
                : 'border-transparent'
            }`}
          >
            <img
              src={stack.icon}
              alt=""
              className={`w-[1rem] md:w-auto ${
                stack.icon === angular ? 'w-[1.2rem]' : ''
              }`}
            />
            <p className="text-xs md:text-base">{stack.tech}</p>
          </div>
        </label>
      ))}
      <button
        type="button"
        className="text-sm text-white px-10 py-2.5 md:p-4 w-max md:w-auto bg-black rounded-custom-sm col-[1_/_span_2] md:col-[3_/_span_1]"
      >
        Add
      </button>
    </form>
  );
};

export default StackForm;

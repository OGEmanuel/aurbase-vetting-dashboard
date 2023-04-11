import { useState } from 'react';
import { useSelector } from 'react-redux';

const Slider = () => {
  const [checked, setChecked] = useState(false);
  const displayNav = useSelector(state => state.display.sideNav);

  const handleChange = e => {
    setChecked(e.target.checked);
  };

  return (
    <div
      className={`relative xl:overflow-visible
    ${displayNav ? 'overflow-hidden' : ''}

    `}
    >
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        onChange={handleChange}
      />
      <label
        htmlFor="toggle"
        className={`w-9 h-[1.2rem] cursor-pointer ${
          checked
            ? 'bg-black before:left-[1.3rem] before:bg-white'
            : 'bg-white before:bg-black'
        } outline-none rounded-custom transition-[.5s] absolute -top-[.6rem] before:absolute before:w-[10px] before:h-[10px] before:rounded-[50%] before:top-[.30rem] xl:before:top-[.25rem] before:left-[.2rem] before:transition-[.5s] before:scale-110`}
      ></label>
    </div>
  );
};

export default Slider;

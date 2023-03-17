import { useState } from 'react';

const Slider = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    setChecked(e.target.checked);
  };

  return (
    <div className="relative">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        onChange={handleChange}
      />
      <label
        htmlFor="toggle"
        className={`w-9 h-[1.2rem] ${
          checked
            ? 'bg-extra-2 before:left-[1.3rem]'
            : 'bg-white before:bg-extra-2'
        } outline-none rounded-custom transition-[.5s] absolute -top-[.6rem] before:absolute before:w-[10px] before:h-[10px] before:rounded-[50%] before:top-[.25rem] before:left-[.2rem] before:bg-white before:transition-[.5s] before:scale-110 `}
      ></label>
    </div>
  );
};

export default Slider;

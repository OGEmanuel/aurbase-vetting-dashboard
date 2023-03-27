import Card from '../UI/profile-card';
import pen from '../../../../assets/pen-2.svg';
import bin from '../../../../assets/delete.svg';

const DisplayExperience = ({ experienceHandler, add, displayOverlay }) => {
  return (
    <Card className="row-[3_/_span_1]">
      <div className="flex-between-center">
        <p className="p-head">EXPERIENCE</p>
        <button className="flex-btn" onClick={experienceHandler}>
          <img src={add} alt="" className="w-[1rem] md:w-auto" />
          <p className="p-small">Edit</p>
        </button>
      </div>
      <hr
        className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
          displayOverlay ? 'opacity-100' : 'opacity-40'
        } `}
      />
      {/* <p className="p-body w-[70%] py-20">
        Click on the <span className="span-body">“+”</span> button to add your
        work experience
      </p> */}
      <div
        className={`border-b border-extra-5 xl:border-opacity-40 pb-6 mb-4 xl:overflow-visible ${
          displayOverlay ? 'border-opacity-100' : 'border-opacity-40'
        } `}
      >
        <div className="flex justify-between mb-1.5 items-center">
          <p className="text-sm font-semibold">Product Design Teamlead</p>
          <div className="flex gap-2.5 md:gap-5 text-[8px]">
            <div>
              <img src={pen} alt="" className="mb-1" />
              <span className="text-secondary hidden md:block">Edit</span>
            </div>
            <div>
              <img src={bin} alt="" className="mb-1" />
              <span className="text-extra-12 hidden md:block">Delete</span>
            </div>
          </div>
        </div>
        <p className="font-semibold text-[0.875rem] md:text-lg mb-1.5">
          <span className="text-extra-10">CAPRIQUOTA</span> 2019-Till date
        </p>
        <div className="w-[90%] text-sm text-extra-14">
          <p className="text-sm w-full mb-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            dolore officia repellat cumque doloribus Lorem ipsum dolor sit
          </p>
          <ol>
            <li>
              1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </li>
            <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ol>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-1.5 items-center">
          <p className="text-sm font-semibold">Product Design Teamlead</p>
          <div className="flex gap-2.5 md:gap-5 text-[8px]">
            <div>
              <img src={pen} alt="" className="mb-1" />
              <span className="text-secondary hidden md:block">Edit</span>
            </div>
            <div>
              <img src={bin} alt="" className="mb-1" />
              <span className="text-extra-12 hidden md:block">Delete</span>
            </div>
          </div>
        </div>
        <p className="font-semibold text-[0.875rem] md:text-lg mb-1.5">
          <span className="text-extra-10">AMAZON</span> 2019-Till date
        </p>
        <div className="w-[90%] text-sm text-extra-14">
          <p className="text-sm w-full mb-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            dolore officia repellat cumque doloribus Lorem ipsum dolor sit
          </p>
          <ol>
            <li>
              1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </li>
            <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ol>
        </div>
      </div>
    </Card>
  );
};

export default DisplayExperience;

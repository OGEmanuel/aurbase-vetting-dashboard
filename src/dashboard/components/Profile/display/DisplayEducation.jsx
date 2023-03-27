import Card from '../UI/profile-card';
import pen from '../../../../assets/pen-2.svg';
import bin from '../../../../assets/delete.svg';

const DisplayEducation = ({ educationHandler, add, displayOverlay }) => {
  return (
    <Card className="h-max">
      <div className="flex-between-center">
        <p className="p-head">EDUCATION</p>
        <button onClick={educationHandler} className="flex-btn">
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
        click on the <span className="span-body">“+”</span> button to add your
        education experience
      </p> */}
      <div>
        <div className="flex justify-between mb-2.5 items-center">
          <div className="font-semibold">
            <span className="text-[8px]">March 2017 - March 2021</span>
            <p className="text-lg font-semibold">Havard University</p>
            <span className="text-[10px]">BSc Computer Science</span>
          </div>
          <div className="flex gap-5 text-[8px]">
            <div>
              <img src={pen} alt="" className="mb-1" />
              <span className="text-secondary">Edit</span>
            </div>
            <div>
              <img src={bin} alt="" className="mb-1" />
              <span className="text-extra-12">Delete</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-2.5 items-center">
          <div className="font-semibold">
            <span className="text-[8px]">March 2017 - March 2021</span>
            <p className="text-lg font-semibold">Havard University</p>
            <span className="text-[10px]">BSc Computer Science</span>
          </div>
          <div className="flex gap-5 text-[8px]">
            <div>
              <img src={pen} alt="" className="mb-1" />
              <span className="text-secondary">Edit</span>
            </div>
            <div>
              <img src={bin} alt="" className="mb-1" />
              <span className="text-extra-12">Delete</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-semibold">
            <span className="text-[8px]">March 2017 - March 2021</span>
            <p className="text-lg font-semibold">Havard University</p>
            <span className="text-[10px]">BSc Computer Science</span>
          </div>
          <div className="flex gap-5 text-[8px]">
            <div>
              <img src={pen} alt="" className="mb-1" />
              <span className="text-secondary">Edit</span>
            </div>
            <div>
              <img src={bin} alt="" className="mb-1" />
              <span className="text-extra-12">Delete</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DisplayEducation;

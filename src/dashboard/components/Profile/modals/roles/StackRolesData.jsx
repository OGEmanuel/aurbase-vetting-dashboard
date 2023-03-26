import remove from '../../../../../assets/remove.svg';
import arrowb from '../../../../../assets/drop-black.svg';

const StackRolesData = ({ roles }) => {
  return roles.map(tech => (
    <div key={tech.id} className="roles-body">
      <div className="roles-body-title snap-start">
        <img src={tech.icon} alt="" className="w-[1rem] md:w-auto" />
        <p className="text-xs md:text-base">{tech.name}</p>
      </div>
      <label htmlFor="" className="flex-center gap-1 md:gap-4 snap-start">
        <div>
          <p className="text-[8px] md:hidden">Years of Exp:</p>
          <p className="text-sm hidden md:block">Years of Experience:</p>
        </div>
        <div className="relative">
          <select
            name=""
            id=""
            defaultValue="4"
            className="roles-body-select pr-4"
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
            className="absolute top-[0.8rem] md:top-[0.75rem] right-[0.2rem] md:right-[0.5rem] pointer-events-none"
          />
        </div>
      </label>
      <label htmlFor="" className="flex-center gap-1 snap-start">
        <div>
          <p className="text-[8px] md:text-sm md:hidden">Exp level:</p>
          <p className="text-sm hidden md:block">Experience level</p>
        </div>
        <div className="relative">
          <select name="" id="" defaultValue="1" className="roles-body-select">
            <option value="1">Junior</option>
            <option value="2">Intermediate</option>
            <option value="3">Senior</option>
          </select>
          <img
            src={arrowb}
            alt=""
            className="absolute top-[0.8rem] md:top-[0.75rem] right-[0.5rem] pointer-events-none"
          />
        </div>
      </label>
      <button className="roles-remove-btn snap-start">
        <img src={remove} alt="" className="" />
        <p className="hidden md:block">Remove</p>
      </button>
    </div>
  ));
};

export default StackRolesData;

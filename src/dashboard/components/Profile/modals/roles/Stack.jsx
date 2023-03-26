import bin from '../../../../../assets/bin.svg';
import arrow from '../../../../../assets/roles-drop.svg';
import StackRolesData from './StackRolesData';

const Stack = ({ icon, title, roles }) => {
  return (
    <div className="mb-5">
      <div className="roles-header">
        <div className="roles-title snap-start">
          <img src={icon} alt="" />
          <p>{title}</p>
        </div>
        <label
          htmlFor=""
          className="flex-center gap-1 md:gap-[2.7rem] snap-start"
        >
          <p className="text-[8px] md:text-sm">Seniority Level:</p>
          <div className="relative">
            <select
              name=""
              id=""
              defaultValue="4"
              className="roles-title-select"
            >
              <option value="1">1 years</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
            </select>
            <img src={arrow} alt="" className="roles-arrow" />
          </div>
        </label>
        <label htmlFor="" className="flex-center gap-1 md:gap-5 snap-start">
          <p className="text-[8px] md:text-sm">Role priority:</p>
          <div className="relative">
            <select
              name=""
              id=""
              defaultValue="1"
              className="roles-title-select"
            >
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
            </select>
            <img src={arrow} alt="" className="roles-arrow" />
          </div>
        </label>
        <button className="justify-self-end row-[1_/_span_1] col-[2_/_-1] md:col-[4_/_span_1] snap-start">
          <img src={bin} alt="" />
        </button>
      </div>
      <StackRolesData roles={roles} />
    </div>
  );
};

export default Stack;

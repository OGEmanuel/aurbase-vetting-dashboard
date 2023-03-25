import react from '../../../../../assets/react.svg';
import frontendlg from '../../../../../assets/frontend-lg.svg';
import bin from '../../../../../assets/bin.svg';
import arrow from '../../../../../assets/roles-drop.svg';
import remove from '../../../../../assets/remove.svg';
import arrowb from '../../../../../assets/drop-black.svg';
import angular from '../../../../../assets/angular.svg';

const TECH = [
  { id: 1, icon: react, name: 'React Js' },
  { id: 2, icon: angular, name: 'Angular' },
];

const FrontendRoles = () => {
  return (
    <div className="mb-5">
      <div className="roles-header">
        <div className="roles-title">
          <img src={frontendlg} alt="" />
          <p>Frontend Developer</p>
        </div>
        <label htmlFor="" className="flex-center gap-[2.7rem]">
          <p className="text-sm">Seniority Level:</p>
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
        <label htmlFor="" className="flex-center gap-5">
          <p className="text-sm">Role priority:</p>
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
        <button className="justify-self-end">
          <img src={bin} alt="" />
        </button>
      </div>
      {TECH.map(tech => (
        <div key={tech.id} className="roles-body">
          <div className="roles-body-title">
            <img src={tech.icon} alt="" />
            <p>{tech.name}</p>
          </div>
          <label htmlFor="" className="flex-center gap-4">
            <p className="text-sm">Years of Experience:</p>
            <div className="relative">
              <select
                name=""
                id=""
                defaultValue="4"
                className="roles-body-select"
              >
                <option value="1">1 years</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
              </select>
              <img src={arrowb} alt="" className="roles-arrow" />
            </div>
          </label>
          <label htmlFor="" className="flex-center gap-1">
            <p className="text-sm">Experience level</p>
            <div className="relative">
              <select
                name=""
                id=""
                defaultValue="1"
                className="roles-body-select"
              >
                <option value="1">Junior</option>
                <option value="2">Intermediate</option>
                <option value="3">Senior</option>
              </select>
              <img src={arrowb} alt="" className="roles-arrow" />
            </div>
          </label>
          <button className="roles-remove-btn">
            <img src={remove} alt="" className="" />
            <p>Remove</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FrontendRoles;

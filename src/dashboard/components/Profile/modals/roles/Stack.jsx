import { useEffect, useState } from 'react';
import bin from '../../../../../assets/bin.svg';
import arrow from '../../../../../assets/roles-drop.svg';
import StackRolesData from './StackRolesData';

const Stack = props => {
  const [formData, setFormData] = useState({
    roleYear: '4 years',
    priority: '1st',
  });

  const { icon, title, roles, onGetPrioritySeniorityData } = props;

  useEffect(() => {
    onGetPrioritySeniorityData(formData);
  }, [formData]);

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
              name="Seniority Level"
              id="Seniority Level"
              className="roles-title-select"
              value={formData.roleYear}
              onChange={e =>
                setFormData({ ...formData, roleYear: e.target.value })
              }
            >
              <option value="1 year">1 year</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
              <option value="4 years">4 years</option>
              <option value="5 years">5 years</option>
            </select>
            <img src={arrow} alt="" className="roles-arrow" />
          </div>
        </label>
        <label htmlFor="" className="flex-center gap-1 md:gap-5 snap-start">
          <p className="text-[8px] md:text-sm">Role priority:</p>
          <div className="relative">
            <select
              name="Role priority"
              id="Role Priority"
              className="roles-title-select"
              value={formData.priority}
              onChange={e =>
                setFormData({ ...formData, priority: e.target.value })
              }
            >
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
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

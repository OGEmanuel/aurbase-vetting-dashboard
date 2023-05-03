import Card from '../UI/modal-cards';
import Button from '../UI/Button';
import Header from '../UI/ModalHeader';
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../../../redux-store/features/open-overlay-body';
import { experienceModal } from '../../../../redux-store/features/experience-modal';
import { useUpdateExperienceMutation } from '../../../../redux-store/fetch/talentsSlice';
import { useState } from 'react';
import { getAuthData } from '../../../../util/RouteProtection';

const Experience = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    startDate: '',
    endDate: '',
    responsibility: '',
  });
  const getAuth = getAuthData();
  const talentId = getAuth[0].onboard.talent_id;
  const [updateExperience, data] = useUpdateExperienceMutation();
  console.log(data);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(experienceModal());
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    updateExperience({
      ipaddress: '127.0.0.1',
      company_name: formData.companyName,
      role: formData.role,
      start_date: formData.startDate,
      end_date: formData.endDate,
      status: 'Active',
      deleted: 0,
      responsibility: formData.responsibility,
      id: talentId,
    });
    dispatch(overlayMain());
    dispatch(experienceModal());
  };

  return (
    <Card className="top-1/2 h-[30rem] md:top-[80rem] md:h-auto">
      <Header onClick={closeHandler} title="Experience" />
      <form
        onSubmit={submitHandler}
        action=""
        className="modal-layout grid-rows-[repeat(3,_minmax(0,_max-content))]"
      >
        <label htmlFor="" className="label">
          <p className="label-p">COMPANY NAME</p>
          <input
            type="text"
            className="input"
            placeholder="Capriquota"
            onChange={handleChange}
            value={formData.companyName}
            name="companyName"
          />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">ROLE</p>
          <input
            type="text"
            className="input"
            placeholder="Product Design Team lead"
            onChange={handleChange}
            value={formData.role}
            name="role"
          />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">START DATE</p>
          <input
            type="text"
            className="input"
            placeholder="MAY 2019"
            onChange={handleChange}
            value={formData.startDate}
            name="startDate"
          />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">END DATE</p>
          <input
            type="text"
            className="input"
            placeholder="MAY 2021"
            onChange={handleChange}
            value={formData.endDate}
            name="endDate"
          />
        </label>
        <label htmlFor="" className="label col-[1_/_-1]">
          <p className="label-p">RESPONSIBILITY</p>
          <textarea
            name="responsibility"
            id=""
            cols="30"
            rows="4"
            onChange={handleChange}
            value={formData.responsibility}
            className="outline-none p-5 border resize-none border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 w-full"
          />
        </label>
        <Button cancelHandler={closeHandler} title="Experience" />
      </form>
    </Card>
  );
};

export default Experience;

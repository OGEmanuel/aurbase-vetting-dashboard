// import { useState } from 'react';
import * as yup from 'yup';
// import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import bin from '../../../../../assets/bin.svg';
import arrow from '../../../../../assets/roles-drop.svg';
import { useAddStacksMutation } from '../../../../../redux-store/fetch/talentsSlice';
import StackRolesData from './StackRolesData';
// import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';

const validateForm = yup.object().shape({
  roleYear: yup.string().required('Select role year'),
  priority: yup.string().required('Select role priority'),
});

const Stack = props => {
  const { icon, title, roles, passSubmit, register, validate } = props;
  const ip = useSelector(state => state.auth.ip);

  useEffect(() => {
    passSubmit(submit);
    validate(validateForm);
  }, [passSubmit, validate]);

  // const {
  //   register,
  //   handleSubmit,
  //   // reset,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(validateForm),
  // });

  const [
    addStacks,
    {
      data: addStacksData,
      isError: addStacksError,
      isLoading: addStacksLoading,
    },
  ] = useAddStacksMutation();

  const submit = async (e, data) => {
    console.log(data);
    // e.preventDefault();
    // setIsLoading(true);
    if (!addStacksError)
      await addStacks({
        role_id: 1,
        role_name: 'Front-End Design',
        role_year: 5,
        stack_id: 9,
        level: 'Senior',
        years: data.roleYear,
        priority: data.priority,
        ipaddress: ip,
      });
  };

  // {
  // role_id: 1,
  // role_name: 'Front-End Design',
  // role_year: 5,
  // stack_id: 9,
  // level: 'Senior',
  // years: 2,
  // priority: 0,
  // ipaddress: '128.0.0.1',
  // },
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
              defaultValue="4"
              className="roles-title-select"
              {...register('RoleYear')}
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
              defaultValue="1"
              className="roles-title-select"
              {...register('priority')}
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

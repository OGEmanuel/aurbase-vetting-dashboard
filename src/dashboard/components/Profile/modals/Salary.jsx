import Button from '../UI/Button';
import Card from '../UI/modal-cards';
import Header from '../UI/ModalHeader';
import arrow from '../../../../assets/arrow-down.svg';
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../../../redux-store/features/open-overlay-body';
import { salaryModal } from '../../../../redux-store/features/salary-modal';
import { useUpdateSalaryMutation } from '../../../../redux-store/fetch/talentsSlice';
import { useEffect, useState } from 'react';

const Salary = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ option: '1' });
  const [updateSalary, data] = useUpdateSalaryMutation();
  console.log(data);

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(salaryModal());
  };

  const submitHandler = async e => {
    e.preventDefault();
    await updateSalary({
      ipaddress: '127.0.0.1',
      expectation: '250000 to 1800000',
      deleted: 0,
      status: 'Active',
    });
    dispatch(overlayMain());
    dispatch(salaryModal());
  };

  // useEffect(() => {
  //   if (isLoginSuccess) {
  //     console.log('login successful');
  //     setIsLoading(false);
  //     //To store data for implementation of protected routes
  //     sessionStorage.setItem('data', JSON.stringify(loginData));
  //     navigate('/dashboard');
  //   }
  //   if (isLoginError) {
  //     console.log(loginError.data.error);
  //     setIsLoading(false);
  //     toast.error(loginError?.data.error)
  //   }
  // }, [isLoginSuccess, isLoginError]);

  return (
    <Card className="top-1/2 md:top-[50%]">
      <Header title="Salary Expectation" onClick={closeHandler} />
      <form onSubmit={submitHandler} action="">
        <label htmlFor="" className="label relative">
          <p className="label-p">SALARY</p>
          <img
            src={arrow}
            alt=""
            className="absolute right-5 top-[82%] pointer-events-none"
          />
          <select
            name=""
            id=""
            onChange={e => setFormData({ option: e.target.value })}
            value={formData.option}
            className="outline-none py-[0.9375rem] border border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 w-full xl:w-[40.5625rem] px-5 sel mb-6 md:mb-10"
          >
            <option value="1">$2,000 - $5,000</option>
          </select>
        </label>
        <Button cancelHandler={closeHandler} />
      </form>
    </Card>
  );
};

export default Salary;

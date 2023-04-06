import Button from '../UI/Button';
import Card from '../UI/modal-cards';
import Header from '../UI/ModalHeader';
import arrow from '../../../../assets/arrow-down.svg';
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../../../redux-store/features/open-overlay-body';
import { salaryModal } from '../../../../redux-store/features/salary-modal';

const Salary = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(salaryModal());
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(overlayMain());
    dispatch(salaryModal());
  };

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
            defaultValue="1"
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

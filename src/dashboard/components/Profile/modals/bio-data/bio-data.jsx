import Card from '../../UI/modal-cards';
import close from '../../../../../assets/close.svg';
import user from '../../../../../assets/assets/images/user-plain.png';
import SelectCountryCode from './country-code';
import CountryList from './CountryList';
import arrow from '../../../../../assets/arrow-down.svg';
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../../../../redux-store/features/open-overlay-body';

const Education = ({ setModal, modal }) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(overlayMain());
    setModal(!modal);
  };

  const cancelHandler = () => {
    dispatch(overlayMain());
    setModal(!modal);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(overlayMain());
    setModal(!modal);
  };

  return (
    <Card className="z-[9000] fixed top-[50%] left-[50%] xl:left-[60%] translate-x-[-50%] translate-y-[-50%] scroll overflow-auto h-[30rem]">
      <div className="flex justify-between mb-5">
        <p className="font-semibold md:text-[2.5rem]">Bio data</p>
        <button onClick={closeHandler}>
          <img src={close} alt="" className="w-[1rem] md:w-auto" />
        </button>
      </div>
      <div className="font-semibold mb-7">
        <p className="text-xs md:text-2xl mb-5">Profile Picture(Compulsory)</p>
        <div className="flex items-center gap-5">
          <img src={user} alt="user" className="w-[4rem] md:w-auto" />
          <button className="text-[0.5rem] md:text-[0.9375rem] border border-extra-6 rounded-custom-sm bg-bg-3 px-5 py-2.5">
            Change profile picture
          </button>
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        action=""
        className="grid grid-rows-[repeat(5,_minmax(0,_max-content))] xl:grid-cols-[repeat(2,_minmax(0,_max-content))] w-full xl:w-max gap-6 md:gap-10 justify-items-end"
      >
        <label htmlFor="" className="label">
          <p className="label-p">FIRST NAME</p>
          <input type="text" placeholder="Micheal" className="input" />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">LAST NAME</p>
          <input type="text" placeholder="Joseph" className="input" />
        </label>
        <label htmlFor="" className="label">
          <div className="relative">
            <p className="label-p">GENDER</p>
            <img src={arrow} alt="" className="selector-arrow" />
            <select name="" id="" className="selector">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">PHONE NUMBER</p>
          <SelectCountryCode />
        </label>
        <label htmlFor="" className="label">
          <div className="relative">
            <p className="label-p">COUNTRY OF RESIDENCE</p>
            <img src={arrow} alt="" className="selector-arrow z-10" />
            <CountryList />
          </div>
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">STATE OF RESIDENCE</p>
          <input type="text" placeholder="Texas" className="input" />
        </label>
        <label htmlFor="" className="label">
          <div className="relative">
            <p className="label-p">COUNTRY OF CITIZENSHIP</p>
            <img src={arrow} alt="" className="selector-arrow z-10" />
            <CountryList />
          </div>
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">JOB TITLE</p>
          <input type="text" placeholder="Product Designer" className="input" />
        </label>
        <div className="col-[1_/_-1] w-max ml-auto font-semibold text-xs md:text-lg flex gap-5">
          <button
            type="button"
            onClick={cancelHandler}
            className="border border-extra-7 py-3 px-10 rounded-custom-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-3 px-10 rounded-custom-lg text-white bg-black"
          >
            Update
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Education;

import Card from '../../UI/modal-cards';
import user from '../../../../../assets/images/user-plain.png';
import SelectCountryCode from './country-code';
import CountryList from './CountryList';
import arrow from '../../../../../assets/arrow-down.svg';
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../../../../redux-store/features/open-overlay-body';
import Button from '../../UI/Button';
import Header from '../../UI/ModalHeader';

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
    <Card setModal={setModal} modal={modal} className="h-[30rem]">
      <Header onClick={closeHandler} title="Bio data" />
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
        className="modal-layout grid-rows-[repeat(5,_minmax(0,_max-content))]"
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
        <Button cancelHandler={cancelHandler} title="Bio data" />
      </form>
    </Card>
  );
};

export default Education;

import Card from '../UI/modal-cards';
import Button from '../UI/Button';
import Header from '../UI/ModalHeader';
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../../../redux-store/features/open-overlay-body';
import { experienceModal } from '../../../../redux-store/features/experience-modal';

const Experience = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(experienceModal());
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(overlayMain());
    dispatch(experienceModal());
  };

  return (
    <Card className="top-[90rem] md:top-[190%]">
      <Header onClick={closeHandler} title="Experience" />
      <form
        onSubmit={submitHandler}
        action=""
        className="modal-layout grid-rows-[repeat(3,_minmax(0,_max-content))]"
      >
        <label htmlFor="" className="label">
          <p className="label-p">COMPANY NAME</p>
          <input type="text" className="input" placeholder="Capriquota" />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">ROLE</p>
          <input
            type="text"
            className="input"
            placeholder="Product Design Team lead"
          />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">START DATE</p>
          <input type="text" className="input" placeholder="MAY 2019" />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">END DATE</p>
          <input type="text" className="input" placeholder="MAY 2021" />
        </label>
        <label htmlFor="" className="label col-[1_/_-1]">
          <p className="label-p">RESPONSIBILITY</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            className="outline-none p-5 border resize-none border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 w-full"
          />
        </label>
        <Button cancelHandler={closeHandler} title="Experience" />
      </form>
    </Card>
  );
};

export default Experience;

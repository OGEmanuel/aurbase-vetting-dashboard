import { useDispatch } from 'react-redux';
import { aboutModal } from '../../../../redux-store/features/about-modal';
import { overlayMain } from '../../../../redux-store/features/open-overlay-body';
import Button from '../UI/Button';
import Card from '../UI/modal-cards';
import Header from '../UI/ModalHeader';

const About = ({ setModal, modal }) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(aboutModal());
  };

  const cancelHandler = () => {
    dispatch(overlayMain());
    dispatch(aboutModal());
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(overlayMain());
    dispatch(aboutModal());
  };
  return (
    <Card>
      <Header onClick={closeHandler} title="About" />
      <form onSubmit={submitHandler} action="" className="label">
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Let’s get to know you"
          className="outline-none p-5 border placeholder:opacity-50 resize-none border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 w-full xl:w-[46.3125rem] mb-6 md:mb-10"
        />
        <Button cancelHandler={cancelHandler} />
      </form>
    </Card>
  );
};

export default About;

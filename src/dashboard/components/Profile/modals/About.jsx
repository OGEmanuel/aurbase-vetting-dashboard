import { useDispatch, useSelector } from 'react-redux';
import { aboutModal } from '../../../../redux-store/features/about-modal';
import { overlayMain } from '../../../../redux-store/features/open-overlay-body';
import Button from '../UI/Button';
import Card from '../UI/modal-cards';
import Header from '../UI/ModalHeader';
import { useState } from 'react';
import { useAddAboutMutation } from '../../../../redux-store/fetch/talentsSlice';
import { getAuthData } from '../../../../util/RouteProtection';

const About = ({ setModal, modal }) => {
  const [formData, setFormData] = useState({ input: '' });
  const [addAbout, data] = useAddAboutMutation();
  // console.log(data);
  const dispatch = useDispatch();
  const getAuth = getAuthData();
  const talentId = getAuth[0].onboard.talent_id;
  // const ip = useSelector(state => state.auth.ip);
  // console.log(getAuth[0].onboard.talent_id);
  // console.log(ip);

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(aboutModal());
  };

  const submitHandler = async e => {
    e.preventDefault();
    await addAbout({
      talent_id: talentId,
      ipaddress: '127.0.0.1',
      about: formData.input,
      deleted: 0,
      status: 'Active',
    });
    dispatch(overlayMain());
    dispatch(aboutModal());
  };
  return (
    <Card
      setModal={setModal}
      modal={modal}
      className="top-1/2 md:top-[25.5rem]"
    >
      <Header onClick={closeHandler} title="About" />
      <form onSubmit={submitHandler} action="" className="label">
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          onChange={e => setFormData({ input: e.target.value })}
          value={formData.input}
          placeholder="Let’s get to know you"
          className="outline-none p-5 border placeholder:opacity-50 resize-none border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 w-full xl:w-[46.3125rem] mb-6 md:mb-10"
        />
        <Button cancelHandler={closeHandler} />
      </form>
    </Card>
  );
};

export default About;

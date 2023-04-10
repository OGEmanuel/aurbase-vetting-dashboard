import Button from '../UI/Button';
import Card from '../UI/modal-cards';
import Header from '../UI/ModalHeader';
import arrow from '../../../../assets/arrow-down.svg';
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../../../redux-store/features/open-overlay-body';
import { educationModal } from '../../../../redux-store/features/education-modal';

const Education = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(educationModal());
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(overlayMain());
    dispatch(educationModal());
  };

  return (
    <Card className="top-1/2 h-[30rem] md:top-[80rem] md:h-auto">
      <Header onClick={closeHandler} title="Education" />
      <form
        onSubmit={submitHandler}
        action=""
        className="modal-layout grid-rows-[repeat(3,_minmax(0,_max-content))]"
      >
        <label htmlFor="" className="col-[1_/_-1] label">
          <p className="label-p">INSTITUTION</p>
          <input
            type="text"
            placeholder="Havard"
            className="outline-none py-[0.9375rem] placeholder:opacity-50 border border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 w-full px-5"
          />
        </label>
        <label htmlFor="" className="label relative">
          <p className="label-p">DEGREE</p>
          <img src={arrow} alt="" className="selector-arrow" />
          <select name="" id="" defaultValue="Comp" className="selector">
            <option value="Comp">BSc in Computer science</option>
            <option value="">BA in English</option>
            <option value="">BSc in Microbiology</option>
            <option value="">BSc in Agric</option>
          </select>
        </label>
        <label htmlFor="" className="label relative">
          <p className="label-p">COURSE OF STUDY</p>
          <img src={arrow} alt="" className="selector-arrow" />
          <select name="" id="" defaultValue="Compt" className="selector">
            <option value="Compt">Computer science</option>
            <option value="">English</option>
            <option value="">Microbiology</option>
            <option value="">Agric</option>
          </select>
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">START DATE</p>
          <input type="text" placeholder="28 APR 2020" className="input" />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">END DATE</p>
          <input type="text" placeholder="28 APR 2020" className="input" />
        </label>
        <Button cancelHandler={closeHandler} />
      </form>
    </Card>
  );
};

export default Education;

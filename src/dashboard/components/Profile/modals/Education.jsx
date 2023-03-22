import Button from '../UI/Button';
import Card from '../UI/modal-cards';
import Header from '../UI/ModalHeader';

const Education = () => {
  return (
    <Card>
      <Header title="Education" />
      <form
        action=""
        className="modal-layout grid-rows-[repeat(3,_minmax(0,_max-content))]"
      >
        <label htmlFor="" className="col-[1_/_-1] label">
          <p className="label-p">INSTITUTION</p>
          <input
            type="text"
            placeholder="Havard"
            className="outline-none py-[0.9375rem] placeholder:opacity-50 border border-extra-6 focus:border-extra-8 rounded-custom-lg bg-bg-3 w-full px-5"
          />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">DEGREE</p>
          <input type="text" />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">COURSE OF STUDY</p>
          <input type="text" placeholder="Computer Science" className="input" />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">START DATE</p>
          <input type="text" placeholder="28 APR 2020" className="input" />
        </label>
        <label htmlFor="" className="label">
          <p className="label-p">END DATE</p>
          <input type="text" placeholder="28 APR 2020" className="input" />
        </label>
        <Button />
      </form>
    </Card>
  );
};

export default Education;

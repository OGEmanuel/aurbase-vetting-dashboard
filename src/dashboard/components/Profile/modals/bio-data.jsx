import Card from '../UI/modal-cards';
import close from '../../../../assets/close.svg';
import user from '../../../../assets/assets/images/user-plain.png';

const Education = () => {
  return (
    <div className="z-[9000] fixed top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Card>
        <div>
          <p>Bio data</p>
          <img src={close} alt="" />
        </div>
        <div>
          <p>Profile Picture(Compulsory)</p>
          <div>
            <img src={user} alt="user" />
            <button>Change profile picture</button>
          </div>
        </div>
        <form action="">
          <label htmlFor="">
            <p>FIRST NAME</p>
            <input type="text" placeholder="Micheal" />
          </label>
          <label htmlFor="">
            <p>LAST NAME</p>
            <input type="text" placeholder="Joseph" />
          </label>
          <label htmlFor="">
            <p>GENDER</p>
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
        </form>
      </Card>
    </div>
  );
};

export default Education;

import pen from '../../assets/pen.svg';
import dp from '../../assets/assets/images/user-photo.png';
import add from '../../assets/add.svg';
import Card from './UI/profile-card';

const Profile = () => {
  return (
    <>
      <p className="text-2xl mb-4">Let’s get to know you</p>
      <div className="grid grid-rows-[repeat(3,_minmax(0,_max-content))] grid-cols-2 gap-6">
        <Card>
          <div className="flex-between-center">
            <p className="p-head">BIO DATA</p>
            <button className="flex-btn">
              <img src={pen} alt="" />
              <p className="text-xs">Edit</p>
            </button>
          </div>
          <hr className="border-b border-extra-5 opacity-40 my-4" />
          <div className="flex items-center gap-5">
            <img src={dp} alt="user" />
            <div className="font-semibold">
              <p className="text-2xl text-extra-4">Firstname Lastname</p>
              <div className="text-sm flex flex-col gap-1">
                <p>Designer</p>
                <p>State, Country</p>
              </div>
            </div>
          </div>
          <hr className="border-b border-extra-5 opacity-40 my-4" />
          <div className="flex flex-col gap-4 text-lg">
            <div className="flex justify-between">
              <p>Email Address</p>
              <p className="font-semibold">Joemickey@work.com</p>
            </div>
            <div className="flex justify-between">
              <p>Phone Number</p>
              <p className="font-semibold">N/A</p>
            </div>
            <div className="flex justify-between">
              <p>Gender</p>
              <p className="font-semibold">N/A</p>
            </div>
            <div className="flex justify-between">
              <p>Country of Residence</p>
              <p className="font-semibold">N/A</p>
            </div>
            <div className="flex justify-between">
              <p>Country of citizenship</p>
              <p className="font-semibold">N/A</p>
            </div>
          </div>
        </Card>
        <div className="flex flex-col justify-between gap-4">
          <Card>
            <div className="flex-between-center">
              <p className="p-head">ABOUT/CAREER OBJECTIVE</p>
              <button className="flex-btn">
                <img src={pen} alt="" />
                <p className="text-xs">Edit</p>
              </button>
            </div>
            <hr className="border-b border-extra-5 opacity-40 my-4" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Tell us about yourself in 300 words"
              className="w-full resize-none outline-none"
            ></textarea>
          </Card>
          <Card>
            <div className="flex-between-center">
              <p className="p-head">SALARY EXPECTATION</p>
              <button className="flex-btn">
                <img src={add} alt="" />
                <p className="text-xs">Edit</p>
              </button>
            </div>
            <hr className="border-b border-extra-5 opacity-40 my-4" />
            <p className="p-body w-[65%] py-1.5">
              click on the <span className="span-body">“+”</span> button to add
              your salary expectation
            </p>
          </Card>
        </div>
        <Card className="col-[1_/_-1]">
          <div className="flex-between-center">
            <p className="p-head">ROLE & STACKS</p>
            <button className="flex-btn">
              <img src={add} alt="" />
              <p className="text-xs">Edit</p>
            </button>
          </div>
          <hr className="border-b border-extra-5 opacity-40 my-4" />
          <p className="p-body w-[35%] py-12">
            click on the <span className="span-body">“+”</span> button to add
            your Roles and Stack{' '}
          </p>
        </Card>
        <Card>
          <div className="flex-between-center">
            <p className="p-head">EXPERIENCE</p>
            <button className="flex-btn">
              <img src={add} alt="" />
              <p className="text-xs">Edit</p>
            </button>
          </div>
          <hr className="border-b border-extra-5 opacity-40 my-4" />
          <p className="p-body w-[70%] py-20">
            Click on the <span className="span-body">“+”</span> button to add
            your work experience
          </p>
        </Card>
        <Card>
          <div className="flex-between-center">
            <p className="p-head">EDUCATION</p>
            <button className="flex-btn">
              <img src={add} alt="" />
              <p className="text-xs">Edit</p>
            </button>
          </div>
          <hr className="border-b border-extra-5 opacity-40 my-4" />
          <p className="p-body w-[70%] py-20">
            click on the <span className="span-body">“+”</span> button to add
            your education experience
          </p>
        </Card>
      </div>
    </>
  );
};

export default Profile;

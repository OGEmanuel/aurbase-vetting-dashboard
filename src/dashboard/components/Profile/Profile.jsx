import pen from '../../../assets/pen.svg';
import dp from '../../../assets/images/user-photo.png';
import add from '../../../assets/add.svg';
import Card from './UI/profile-card';
import { useDispatch, useSelector } from 'react-redux';
import { overlayMain } from '../../../redux-store/features/open-overlay-body';
import Biodata from './modals/bio-data/bio-data';
import Experience from './modals/Experience';
import Education from './modals/Education';
import About from './modals/About';
import Salary from './modals/Salary';
import { bioData } from '../../../redux-store/features/bio-modal';
import { aboutModal } from '../../../redux-store/features/about-modal';
import { salaryModal } from '../../../redux-store/features/salary-modal';
import { experienceModal } from '../../../redux-store/features/experience-modal';
import { educationModal } from '../../../redux-store/features/education-modal';

const Profile = () => {
  const displayOverlay = useSelector(state => state.show.modal);
  const biodataModal = useSelector(state => state.bio.open);
  const about = useSelector(state => state.about.open);
  const salary = useSelector(state => state.salary.open);
  const experience = useSelector(state => state.experience.open);
  const education = useSelector(state => state.education.open);
  const dispatch = useDispatch();

  const bioHandler = () => {
    dispatch(overlayMain());
    dispatch(bioData());
  };

  const experienceHandler = () => {
    dispatch(overlayMain());
    dispatch(experienceModal());
  };

  const educationHandler = () => {
    dispatch(overlayMain());
    dispatch(educationModal());
  };

  const aboutHandler = () => {
    dispatch(overlayMain());
    dispatch(aboutModal());
  };

  const salaryHandler = () => {
    dispatch(overlayMain());
    dispatch(salaryModal());
  };

  return (
    <>
      {biodataModal && <Biodata />}
      {experience && <Experience />}
      {education && <Education />}
      {about && <About />}
      {salary && <Salary />}
      <div id="profile" className="max-width">
        <div className="mb-4">
          <p className="text-2xl hidden xl:block">Let’s get to know you</p>
          <div className="xl:hidden">
            <p className="text-lg font-bold">My Profile</p>
            <p className="text-sm">Let’s build your resume</p>
          </div>
        </div>
        <div className="grid grid-rows-[repeat(3,_minmax(0,_max-content))] md:grid-cols-2 gap-6">
          <Card>
            <div className="flex-between-center">
              <p className="p-head">BIO DATA</p>
              <button className="flex-btn" onClick={bioHandler}>
                <img src={pen} alt="" className="w-[1rem] md:w-auto" />
                <p className="p-small">Edit</p>
              </button>
            </div>
            <hr
              className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
                displayOverlay ? 'opacity-100' : 'opacity-40'
              } `}
            />
            <div className="flex items-center gap-5">
              <img src={dp} alt="user" className="w-[5rem] md:w-auto" />
              <div className="font-semibold">
                <p className="text-sm md:text-lg xl:text-2xl mb-1 md:mb-2 xl:mb-0 text-extra-4">
                  Firstname Lastname
                </p>
                <div className="text-[0.625rem] md:text-sm flex flex-col gap-1">
                  <p>Designer</p>
                  <p>State, Country</p>
                </div>
              </div>
            </div>
            <hr
              className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
                displayOverlay ? 'opacity-100' : 'opacity-40'
              } `}
            />
            <div className="flex flex-col gap-4 text-xs md:text-base xl:text-lg">
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
          <div className="flex flex-col justify-between gap-6 md:gap-4">
            <Card>
              <div className="flex-between-center">
                <p className="p-head">ABOUT/CAREER OBJECTIVE</p>
                <button className="flex-btn" onClick={aboutHandler}>
                  <img src={pen} alt="" className="w-[1rem] md:w-auto" />
                  <p className="p-small">Edit</p>
                </button>
              </div>
              <hr
                className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
                  displayOverlay ? 'opacity-100' : 'opacity-40'
                } `}
              />
              <p className="text-[11px] md:text-lg text-tertiary pb-32">
                Tell us about yourself in 300 words
              </p>
            </Card>
            <Card>
              <div className="flex-between-center">
                <p className="p-head">SALARY EXPECTATION</p>
                <button className="flex-btn" onClick={salaryHandler}>
                  <img src={add} alt="" className="w-[1rem] md:w-auto" />
                  <p className="p-small">Edit</p>
                </button>
              </div>
              <hr
                className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
                  displayOverlay ? 'opacity-100' : 'opacity-40'
                } `}
              />
              <p className="p-body w-[65%] py-2">
                click on the <span className="span-body">“+”</span> button to
                add your salary expectation
              </p>
            </Card>
          </div>
          <Card className="row-[2_/_span_1] md:col-[1_/_-1]">
            <div className="flex-between-center">
              <p className="p-head">ROLE & STACKS</p>
              <button className="flex-btn">
                <img src={add} alt="" className="w-[1rem] md:w-auto" />
                <p className="p-small">Edit</p>
              </button>
            </div>
            <hr
              className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
                displayOverlay ? 'opacity-100' : 'opacity-40'
              } `}
            />
            <p className="p-body w-[70%] md:w-[35%] py-12">
              click on the <span className="span-body">“+”</span> button to add
              your Roles and Stack{' '}
            </p>
          </Card>
          <Card className="row-[3_/_span_1]">
            <div className="flex-between-center">
              <p className="p-head">EXPERIENCE</p>
              <button className="flex-btn" onClick={experienceHandler}>
                <img src={add} alt="" className="w-[1rem] md:w-auto" />
                <p className="p-small">Edit</p>
              </button>
            </div>
            <hr
              className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
                displayOverlay ? 'opacity-100' : 'opacity-40'
              } `}
            />
            <p className="p-body w-[70%] py-20">
              Click on the <span className="span-body">“+”</span> button to add
              your work experience
            </p>
          </Card>
          <Card>
            <div className="flex-between-center">
              <p className="p-head">EDUCATION</p>
              <button onClick={educationHandler} className="flex-btn">
                <img src={add} alt="" className="w-[1rem] md:w-auto" />
                <p className="p-small">Edit</p>
              </button>
            </div>
            <hr
              className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
                displayOverlay ? 'opacity-100' : 'opacity-40'
              } `}
            />
            <p className="p-body w-[70%] py-20">
              click on the <span className="span-body">“+”</span> button to add
              your education experience
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Profile;

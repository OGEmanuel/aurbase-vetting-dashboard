import pen from '../../../assets/pen.svg';
import dp from '../../../assets/images/user-photo.png';
import add from '../../../assets/add.svg';
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
import { rolesModal } from '../../../redux-store/features/roles-modal';
import Roles from './modals/roles/Roles';
import DisplayBiodata from './display/DisplayBiodata';
import DisplayAbout from './display/DisplayAbout';
import DisplaySalary from './display/DisplaySalary';
import DisplayRoles from './display/DisplayRoles';
import DisplayExperience from './display/DisplayExperience';
import DisplayEducation from './display/DisplayEducation';

const Profile = () => {
  const displayOverlay = useSelector(state => state.show.modal);
  const biodataModal = useSelector(state => state.bio.open);
  const about = useSelector(state => state.about.open);
  const salary = useSelector(state => state.salary.open);
  const experience = useSelector(state => state.experience.open);
  const education = useSelector(state => state.education.open);
  const roles = useSelector(state => state.roles.open);
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

  const rolesHandler = () => {
    dispatch(overlayMain());
    dispatch(rolesModal());
  };

  return (
    <>
      {biodataModal && <Biodata />}
      {experience && <Experience />}
      {education && <Education />}
      {about && <About />}
      {salary && <Salary />}
      {roles && <Roles />}
      <div id="profile" className="max-width">
        <div className="mb-4">
          <p className="text-2xl hidden xl:block">Let’s get to know you</p>
          <div className="xl:hidden">
            <p className="text-lg font-bold">My Profile</p>
            <p className="text-sm">Let’s build your resume</p>
          </div>
        </div>
        <div className="grid grid-rows-[repeat(3,_minmax(0,_max-content))] md:grid-cols-2 gap-6">
          <DisplayBiodata
            bioHandler={bioHandler}
            pen={pen}
            dp={dp}
            displayOverlay={displayOverlay}
          />
          <div className="flex flex-col justify-between gap-6 md:gap-4">
            <DisplayAbout
              aboutHandler={aboutHandler}
              pen={pen}
              displayOverlay={displayOverlay}
            />
            <DisplaySalary
              salaryHandler={salaryHandler}
              add={add}
              displayOverlay={displayOverlay}
            />
          </div>
          <DisplayRoles
            add={add}
            rolesHandler={rolesHandler}
            displayOverlay={displayOverlay}
          />
          <DisplayExperience
            experienceHandler={experienceHandler}
            add={add}
            displayOverlay={displayOverlay}
          />
          <DisplayEducation
            educationHandler={educationHandler}
            add={add}
            displayOverlay={displayOverlay}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;

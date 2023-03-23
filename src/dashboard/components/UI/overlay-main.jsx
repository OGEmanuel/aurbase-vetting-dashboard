import { useDispatch, useSelector } from 'react-redux';
import { aboutModal } from '../../../redux-store/features/about-modal';
import { bioData } from '../../../redux-store/features/bio-modal';
import { educationModal } from '../../../redux-store/features/education-modal';
import { experienceModal } from '../../../redux-store/features/experience-modal';
import { overlayMain } from '../../../redux-store/features/open-overlay-body';
import { salaryModal } from '../../../redux-store/features/salary-modal';

const OverlayMain = () => {
  const dispatch = useDispatch();
  const openMainOverlay = useSelector(state => state.mainOverlay.open);
  const biodataModal = useSelector(state => state.bio.open);
  const about = useSelector(state => state.about.open);
  const salary = useSelector(state => state.salary.open);
  const experience = useSelector(state => state.experience.open);
  const education = useSelector(state => state.education.open);

  const handleClick = () => {
    if (openMainOverlay) {
      if (biodataModal) {
        dispatch(overlayMain());
        dispatch(bioData());
      }
      if (about) {
        dispatch(overlayMain());
        dispatch(aboutModal());
      }
      if (salary) {
        dispatch(overlayMain());
        dispatch(salaryModal());
      }
      if (experience) {
        dispatch(overlayMain());
        dispatch(experienceModal());
      }
      if (education) {
        dispatch(overlayMain());
        dispatch(educationModal());
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed top-0 left-0 w-full min-h-screen z-[8888] bg-overlay opacity-30"
    ></div>
  );
};

export default OverlayMain;

import { useDispatch } from 'react-redux';
import { display } from '../../../redux-store/features/displayNav';

const Overlay = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(display());
  };

  return (
    <div
      onClick={handleClick}
      className="fixed xl:hidden top-0 left-0 w-full h-screen z-[8888] bg-overlay"
    ></div>
  );
};

export default Overlay;

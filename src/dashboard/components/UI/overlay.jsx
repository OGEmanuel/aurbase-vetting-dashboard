import { useDispatch } from 'react-redux';
import { nav } from '../../../redux-store/features/display';

const Overlay = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(nav());
  };

  return (
    <div
      onClick={handleClick}
      className="fixed xl:hidden top-0 left-0 w-full h-screen z-[8888] bg-overlay opacity-30"
    ></div>
  );
};

export default Overlay;

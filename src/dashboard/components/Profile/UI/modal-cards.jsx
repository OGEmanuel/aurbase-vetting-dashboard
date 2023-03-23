import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { overlayMain } from '../../../../redux-store/features/open-overlay-body';

const Card = ({ children, className, setModal, modal }) => {
  const openModal = useSelector(state => state.mainOverlay.open);
  const dispatch = useDispatch();
  const ref = useRef();

  // const handler = e => {
  //   if (ref.current) {
  //     if (!e.target.closest('.CARD')) {
  //       dispatch(overlayMain());
  //       setModal(!modal);
  //     }
  //   }
  // };

  useEffect(() => {
    const handler = e => {
      if (ref.current) {
        if (!e.target.classList.contains('CARD')) {
          if (openModal) {
            dispatch(overlayMain());
            setModal(!modal);
          }
        }
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.addEventListener('click', handler);
    };
  }, [ref, dispatch, modal, openModal]);

  const classes =
    'bg-white py-6 md:py-7 px-6 md:px-12 rounded-custom w-[88.5%] max-width xl:w-auto z-[9000] fixed top-[50%] left-[50%] xl:left-[60%] translate-x-[-50%] translate-y-[-50%] scroll overflow-auto CARD ' +
    className;
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default Card;

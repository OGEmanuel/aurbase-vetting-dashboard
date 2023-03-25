import frontend from '../../../../../assets/frontend.svg';
import close from '../../../../../assets/close.svg';
import search from '../../../../../assets/search.svg';
import StackForm from './StackForm';
import FrontendRoles from './FrontendRoles';
import BackendRoles from './BackendRoles';
import ProductRoles from './ProductRoles';
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../../../../redux-store/features/open-overlay-body';
import { rolesModal } from '../../../../../redux-store/features/roles-modal';

const Roles = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(rolesModal());
  };

  const cancelHandler = () => {
    dispatch(overlayMain());
    dispatch(rolesModal());
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(overlayMain());
    dispatch(rolesModal());
  };

  return (
    <div className="bg-white px-6 md:px-12 rounded-custom-sm w-[88.5%] max-width xl:w-auto z-[9000] fixed top-[50%] left-[50%] xl:left-[60%] translate-x-[-50%] translate-y-[-50%] scroll overflow-auto h-[30rem] pb-10">
      <div className="grid grid-cols-[1fr,_max-content] border-b-2 border-extra-9 mb-5">
        <div className="py-6 md:py-7 border-r-2 border-extra-9 pr-12">
          <p className="font-semibold md:text-[2.5rem] mb-5">Add Roles</p>
          <form action="" className="relative mb-2.5">
            <input
              type="search"
              placeholder="Frontend"
              className="w-full outline-none py-[7px] border border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 xl:w-[20.07rem] pl-10 pr-5 placeholder:opacity-50"
            />
            <img
              src={search}
              alt=""
              className="absolute top-[.8rem] left-[.8rem]"
            />
          </form>
          <div className="flex bg-bg-6 py-[10px] px-5 gap-2.5 rounded-b-custom-sm w-full xl:w-[20.07rem]">
            <img src={frontend} alt="" />
            <p className="text-sm">Frontend Developer</p>
          </div>
        </div>
        <div className="py-6 md:pt-[2.7rem] md:pb-[1.5rem] flex flex-col pl-6">
          <button onClick={closeHandler} className="w-max ml-auto mb-5">
            <img src={close} alt="" className="" />
          </button>
          <div>
            <p className="text-sm mb-3">Add your prefered stack</p>
            <StackForm />
          </div>
        </div>
      </div>
      <form onSubmit={submitHandler} action="">
        <FrontendRoles />
        <BackendRoles />
        <ProductRoles />
        <div className="w-max ml-auto text-xs md:text-sm flex gap-2 md:gap-5">
          <button
            type="button"
            onClick={cancelHandler}
            className="border border-extra-7 font-semibold py-2.5 md:py-3 px-7 md:px-10 rounded-custom-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2.5 md:py-3 font-semibold px-7 md:px-10 rounded-custom-sm text-white bg-black"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Roles;

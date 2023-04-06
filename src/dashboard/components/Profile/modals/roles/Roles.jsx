import frontend from '../../../../../assets/frontend.svg';
import frontendlg from '../../../../../assets/frontend-lg.svg';
import close from '../../../../../assets/close.svg';
import search from '../../../../../assets/search.svg';
import StackForm from './StackForm';
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../../../../redux-store/features/open-overlay-body';
import { rolesModal } from '../../../../../redux-store/features/roles-modal';
import Header from '../../UI/ModalHeader';
import angular from '../../../../../assets/angular.svg';
import react from '../../../../../assets/react.svg';
import Stack from './Stack';
import dev from '../../../../../assets/dev.svg';
import node from '../../../../../assets/nodejs.svg';
import laravel from '../../../../../assets/laravel.svg';
import { useGetAllTalentsQuery } from '../../../../../redux-store/fetch/talentsSlice';

const PROD = [
  { id: 1, icon: node, name: 'Figma' },
  { id: 2, icon: laravel, name: 'Adobe Xd' },
];

const BE_TECH = [
  { id: 1, icon: node, name: 'Node.Js' },
  { id: 2, icon: laravel, name: 'Laravel' },
];

const FE_TECH = [
  { id: 1, icon: react, name: 'React Js' },
  { id: 2, icon: angular, name: 'Angular' },
];

const Roles = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllTalentsQuery('stacks');
  console.log(data);

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(rolesModal());
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(overlayMain());
    dispatch(rolesModal());
  };

  return (
    <div className="bg-white px-6 md:px-12 rounded-custom-sm w-[88.5%] max-width xl:w-auto z-[9000] fixed md:absolute top-1/2 md:top-[60rem] left-[50%] xl:left-[60%] translate-x-[-50%] translate-y-[-50%] h-[30rem] scroll overflow-auto pb-10">
      <div className="grid xl:grid-cols-[1fr,_max-content] border-b-2 border-extra-10 xl:border-extra-9 mb-5">
        <div className="xl:hidden pt-6 pb-2">
          <Header title="Add Roles" onClick={closeHandler} />
        </div>
        <div className="md:w-auto xl:py-7 xl:border-r-2 border-extra-9 xl:pr-12">
          <p className="font-semibold md:text-[2.5rem] mb-5 hidden xl:block">
            Add Roles
          </p>
          <form action="" className="relative mb-2.5">
            <input
              type="search"
              placeholder="Frontend"
              className="w-full outline-none py-2.5 md:py-[7px] border border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 xl:w-[20.07rem] pl-10 pr-5 placeholder:opacity-50 text-[10px] md:text-base"
            />
            <img
              src={search}
              alt=""
              className="absolute top-[.6rem] md:top-[.8rem] left-[.8rem]"
            />
          </form>
          <div className="flex bg-bg-6 py-[10px] px-5 gap-2.5 rounded-b-custom-sm w-full xl:w-[20.07rem]">
            <img src={frontend} alt="" />
            <p className="text-xs md:text-sm">Frontend Developer</p>
          </div>
        </div>
        <div className="py-3 md:pt-[2.7rem] md:pb-[1.5rem] flex flex-col xl:pl-6">
          <button
            onClick={closeHandler}
            className="w-max ml-auto mb-5 hidden xl:block"
          >
            <img src={close} alt="" className="" />
          </button>
          <div>
            <p className="text-xs md:text-sm mb-3">Add your prefered stack</p>
            <StackForm />
          </div>
        </div>
      </div>
      <form onSubmit={submitHandler} action="">
        <Stack icon={frontendlg} title={'Frontend Developer'} roles={FE_TECH} />
        <Stack icon={dev} title={'Backend Developer'} roles={BE_TECH} />
        <Stack icon={dev} title={'Product Designer'} roles={PROD} />
        <div className="w-max ml-auto text-xs md:text-sm flex gap-2 md:gap-5">
          <button
            type="button"
            onClick={closeHandler}
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

const loadStacks = async () => {};

import frontend from '../../../../../assets/frontend.svg';
import frontendlg from '../../../../../assets/frontend-lg.svg';
import close from '../../../../../assets/close.svg';
import Search from '../../../../../assets/search.svg';
import StackForm from './StackForm';
import { overlayMain } from '../../../../../redux-store/features/open-overlay-body';
import { rolesModal } from '../../../../../redux-store/features/roles-modal';
import Header from '../../UI/ModalHeader';
import angular from '../../../../../assets/angular.svg';
import react from '../../../../../assets/react.svg';
import Stack from './Stack';
import dev from '../../../../../assets/dev.svg';
import node from '../../../../../assets/nodejs.svg';
import laravel from '../../../../../assets/laravel.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  useAddStacksMutation,
  useGetAllStacksQuery,
} from '../../../../../redux-store/fetch/talentsSlice';
import { useState } from 'react';

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
  const [search, setSearch] = useState({ input: '' });
  const [addStacks, addStacksData] = useAddStacksMutation();
  // console.log(addStacksData);
  const [prioritySeniorityData, setPrioritySeniorityData] = useState({});
  const [stacks, setStacks] = useState(0);
  const dispatch = useDispatch();
  const ip = useSelector(state => state.auth.ip);

  // console.log(ip);

  const handleSearch = e => {
    setSearch({ input: e.target.value });
  };

  const { data, isError, isLoading } = useGetAllStacksQuery();

  const DATA = [
    {
      id: 1,
      icon: frontend,
      title: 'frontend developer',
      roles: [
        data?.stacks[1],
        data?.stacks[2],
        data?.stacks[3],
        data?.stacks[4],
        data?.stacks[7],
      ],
    },
    {
      id: 2,
      icon: dev,
      title: 'backend developer',
      roles: [data?.stacks[0], data?.stacks[5], data?.stacks[6]],
    },
    {
      id: 3,
      icon: dev,
      title: 'product designer',
      roles: [],
    },
  ];

  const FE_TECH = [
    { id: 1, icon: react, name: 'React Js' },
    { id: 2, icon: angular, name: 'Angular' },
  ];

  let visibleData = DATA;
  if (search.input && search.input !== '') {
    visibleData = DATA.map(data => data).filter(data =>
      data.title.includes(search.input.toLowerCase())
    );
  } else {
    visibleData = [];
  }

  const getPrioritySeniorityData = data => {
    setPrioritySeniorityData(data);
    // console.log(data);
  };
  // console.log(addStacksData);

  const closeHandler = () => {
    dispatch(overlayMain());
    dispatch(rolesModal());
  };

  const selectHandler = id => {
    setStacks(id);
    setSearch({ input: '' });
  };

  // console.log(prioritySeniorityData);

  const submitHandler = async e => {
    e.preventDefault();
    await addStacks([
      {
        role_id: 1,
        role_name: 'Front-End Design',
        role_year: prioritySeniorityData.roleYear,
        stack_id: 12,
        level: 'Senior',
        years: 2,
        priority: prioritySeniorityData.priority,
        ipaddress: '128.0.0.1',
      },
    ]);
    // console.log(addStacksData);
    dispatch(overlayMain());
    dispatch(rolesModal());
  };

  return (
    <div className="bg-white px-6 md:px-12 rounded-custom-sm w-[88.5%] max-width xl:w-auto z-[9000] fixed md:absolute top-1/2 md:top-[40rem] left-[50%] xl:left-[60%] translate-x-[-50%] translate-y-[-50%] h-[30rem] scroll overflow-auto pb-10 md:h-auto">
      <div className="grid xl:grid-cols-[1fr,_max-content] border-b-2 border-extra-10 xl:border-extra-9 mb-5">
        <div className="xl:hidden pt-6 pb-2">
          <Header title="Add Roles" onClick={closeHandler} />
        </div>
        <div className="border-extra-9 min-h-[11.278125rem] md:w-auto md:min-h-[12.153125rem] xl:py-7 xl:border-r-2 xl:pr-12 xl:min-h-[20.651875rem]">
          <p className="font-semibold md:text-[2.5rem] mb-5 hidden xl:block">
            Add Roles
          </p>
          <form action="" className="relative mb-2.5">
            <input
              type="search"
              placeholder="Frontend"
              className="w-full outline-none py-2.5 md:py-[7px] border border-extra-6 focus:border-extra-8 rounded-custom-sm bg-bg-3 xl:w-[20.07rem] pl-10 pr-5 placeholder:opacity-50 text-[10px] md:text-base"
              onChange={handleSearch}
              value={search.input}
            />
            <img
              src={Search}
              alt=""
              className="absolute top-[.6rem] md:top-[.8rem] left-[.8rem]"
            />
          </form>
          <div className="flex flex-col gap-3">
            {visibleData.map(data => (
              <div
                key={data.id}
                onClick={() => selectHandler(data.id)}
                className="flex bg-bg-6 py-[10px] px-5 gap-2.5 rounded-b-custom-sm w-full xl:w-[20.07rem] cursor-pointer"
              >
                <img src={data.icon} alt="" className="" />
                <p className="text-xs md:text-sm capitalize">{data.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-3 md:pt-[2.7rem] md:pb-[1.5rem] flex flex-col xl:pl-6">
          <button
            onClick={closeHandler}
            className="w-max ml-auto mb-5 hidden xl:block"
          >
            <img src={close} alt="" className="" />
          </button>
          <div className="h-[14.33375rem] overflow-auto scroll md:min-w-[23.9rem] md:h-[13.49625rem] xl:h-fit">
            <p className="text-xs md:text-sm mb-3">Add your prefered stack</p>
            {DATA.map(
              data =>
                data.id === stacks && (
                  <StackForm
                    data={data.roles}
                    key={data.id}
                    isLoading={isLoading}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <form onSubmit={submitHandler} action="">
        <Stack
          icon={frontendlg}
          title={'Frontend Developer'}
          roles={FE_TECH}
          onGetPrioritySeniorityData={getPrioritySeniorityData}
        />
        <Stack
          icon={dev}
          title={'Backend Developer'}
          roles={BE_TECH}
          onGetPrioritySeniorityData={getPrioritySeniorityData}
        />
        <Stack
          icon={dev}
          title={'Product Designer'}
          roles={PROD}
          onGetPrioritySeniorityData={getPrioritySeniorityData}
        />
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

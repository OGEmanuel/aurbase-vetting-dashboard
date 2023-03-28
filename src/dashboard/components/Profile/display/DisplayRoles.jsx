import Card from '../UI/profile-card';
import pen from '../../../../assets/pen-2.svg';
import bin from '../../../../assets/delete.svg';
import react from '../../../../assets/react.svg';
import angular from '../../../../assets/angular.svg';
import jQuery from '../../../../assets/jQuery.svg';
import vue from '../../../../assets/vue.svg';
import php from '../../../../assets/php.svg';
import python from '../../../../assets/python.svg';
import laravel from '../../../../assets/laravel.svg';
import node from '../../../../assets/nodejs.svg';
import figma from '../../../../assets/figma.svg';
import adobe from '../../../../assets/adobe.svg';
import corel from '../../../../assets/corel.svg';
import proto from '../../../../assets/proto.svg';

const STACK = [
  { id: 1, icon: react, tech: 'React' },
  { id: 4, icon: jQuery, tech: 'JQuery' },
  { id: 2, icon: angular, tech: 'Angular' },
  { id: 6, icon: vue, tech: 'Vue' },
];

const BE_STACK = [
  { id: 1, icon: php, tech: 'PHP' },
  { id: 4, icon: laravel, tech: 'Laravel' },
  { id: 2, icon: node, tech: 'Node.Js' },
  { id: 6, icon: python, tech: 'Python' },
];

const PD_STACK = [
  { id: 1, icon: figma, tech: 'Figma' },
  { id: 4, icon: adobe, tech: 'Adobe Xd' },
  { id: 2, icon: corel, tech: 'Corel Draw' },
  { id: 6, icon: proto, tech: 'Proto.io' },
];

const DisplayRoles = ({ add, rolesHandler, displayOverlay }) => {
  return (
    <Card className="row-[2_/_span_1] md:col-[1_/_-1]">
      <div className="flex-between-center">
        <p className="p-head">ROLE & STACKS</p>
        <button className="flex-btn" onClick={rolesHandler}>
          <img src={add} alt="" className="w-[1rem] md:w-auto" />
          <p className="p-small">Edit</p>
        </button>
      </div>
      <hr
        className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
          displayOverlay ? 'opacity-100' : 'opacity-40'
        } `}
      />
      {/* <p className="p-body w-[70%] md:w-[35%] py-12">
        click on the <span className="span-body">“+”</span> button to add your
        Roles and Stack{' '}
      </p> */}
      <div className="mb-4">
        <div className="flex justify-between mb-2.5">
          <p className="text-[0.875rem] md:text-lg font-semibold">
            Frontend developer : Senior Level
          </p>
          <div className="flex gap-2.5 md:gap-5 text-[8px]">
            <button>
              <img src={pen} alt="" className="mb-1" />
              <span className="text-secondary hidden md:block">Edit</span>
            </button>
            <button>
              <img src={bin} alt="" className="mb-1" />
              <span className="text-extra-12 hidden md:block">Delete</span>
            </button>
          </div>
        </div>
        <div
          className={`flex flex-wrap gap-4 border-b border-extra-5 xl:border-opacity-40 pb-6 xl:overflow-visible ${
            displayOverlay ? 'border-opacity-100' : 'border-opacity-40'
          }`}
        >
          {STACK.map(stack => (
            <div
              key={stack.id}
              className={`flex gap-1 items-center bg-bg-7 py-3 px-1 md:p-3 rounded-custom-sm w-[6.9rem]`}
            >
              <img
                src={stack.icon}
                alt=""
                className={`w-[1rem] md:w-auto ${
                  stack.icon === angular ? 'w-[1.2rem]' : ''
                }`}
              />
              <p className="text-xs md:text-sm">{stack.tech}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between mb-2.5">
          <p className="text-[0.875rem] md:text-lg font-semibold">
            Backend developer : Senior Level
          </p>
          <div className="flex gap-2.5 md:gap-5 text-[8px]">
            <button>
              <img src={pen} alt="" className="mb-1" />
              <span className="text-secondary hidden md:block">Edit</span>
            </button>
            <button>
              <img src={bin} alt="" className="mb-1" />
              <span className="text-extra-12 hidden md:block">Delete</span>
            </button>
          </div>
        </div>
        <div
          className={`flex flex-wrap gap-4 border-b border-extra-5 xl:border-opacity-40 pb-6 xl:overflow-visible ${
            displayOverlay ? 'border-opacity-100' : 'border-opacity-40'
          }`}
        >
          {BE_STACK.map(stack => (
            <div
              key={stack.id}
              className={`flex gap-1 items-center bg-bg-7 py-3 px-1 md:p-3 rounded-custom-sm w-[6.9rem]`}
            >
              <img
                src={stack.icon}
                alt=""
                className={`w-[1rem] md:w-auto ${
                  stack.icon === angular ? 'w-[1.2rem]' : ''
                }`}
              />
              <p className="text-xs md:text-sm">{stack.tech}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2.5">
          <p className="text-[0.875rem] md:text-lg font-semibold">
            Product designer : Senior Level
          </p>
          <div className="flex gap-2.5 md:gap-5 text-[8px]">
            <button>
              <img src={pen} alt="" className="mb-1" />
              <span className="text-secondary hidden md:block">Edit</span>
            </button>
            <button>
              <img src={bin} alt="" className="mb-1" />
              <span className="text-extra-12 hidden md:block">Delete</span>
            </button>
          </div>
        </div>
        <div className={`flex flex-wrap gap-4`}>
          {PD_STACK.map(stack => (
            <div
              key={stack.id}
              className={`flex gap-1 items-center bg-bg-7 py-3 px-1 md:p-3 rounded-custom-sm w-[6.9rem]`}
            >
              <img
                src={stack.icon}
                alt=""
                className={`w-[1rem] md:w-auto ${
                  stack.icon === angular ? 'w-[1.2rem]' : ''
                }`}
              />
              <p className="text-xs md:text-sm">{stack.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default DisplayRoles;

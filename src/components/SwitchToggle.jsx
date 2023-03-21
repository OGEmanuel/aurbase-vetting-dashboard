
const SwitchToggle = () => {

  return (
    <>
  <div className='flex gap-2 items-center '>
  <p className='hidden md:block font-semibold'>Ready to work</p>
      <label className="relative inline-flex items-center  cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className=" w-11 h-6 bg-[#bbb] peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white   after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#07765A]"></div>
      </label>
      
    </div>
    </>
  );
};
export default SwitchToggle


// const ForgetPassword = () => {
//   return (
//     <div className='bg-[rgba(255, 255, 255, 0.95)] overflow-hidden '>
      
//        <div className='lg:w-1/2 mx-auto lg:mt-40 '>
//         <ForgetCard/>
//         </div> 
//       <section className='hidden lg:flex justify-between  absolute top-0 -z-10 w-full   bg-bg-2 overflow-hidden h-full '>
//         {/* left side */}
//         <div>
//       <span><img src={TopPattern} alt="top-pattern" /></span>
//        <aside className='flex flex-col items-center top-10 absolute'>
//        <span><img src={Emoji1} alt="" /></span>
//       <span className='block mt-28'><img src={Larrow} alt="" /></span>
//       <span><img src={Emoji4} alt="" /></span>
//         </aside>  
     
//         </div>
//         {/* right side */}
//         <div >
      
//       <aside className='flex flex-col gap-14 items-center absolute top-14 left-[60rem] right-[-5rem] 2xl:right-[-20rem]'>
//       <span><img src={Emoji2} alt="" /></span>
//       <span className='block w-[300px]'><img src={Rarrow} alt="" /></span>
//       <span><img src={Emoji3} alt="" /></span>
//       </aside>
//       <span className='block mt-[32rem]'><img src={DownPattern} alt="top-pattern" /></span>  
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ForgetPassword

// new thing


import React from 'react';
import ForgetCard from '../components/ForgetCard'
import curlyArrowDown from "../assets/curlyArrowDown.svg";
import curlyArrowUp from "../assets/curlyArrowUp.svg";
import wavyLeft from "../assets/wavyLeft.svg";
import wavyRight from "../assets/wavyRight.svg";
import blackGirl from "../assets/blackGirl.svg";
import blackBoy from "../assets/blackBoy.svg";
import baldBoy from "../assets/baldBoy.svg";
import whiteBoy from "../assets/whiteBoy.svg";

const ForgetPassword = () => {
  return (
    <section className="relative lg:pt-[147px] lg:pb-[191px] bg-white lg:bg-bg-2 h-full overflow-y-auto flex items-center justify-center ">
      <img
        src={blackGirl}
        alt="black girl"
        className="hidden lg:block z-[10] absolute top-[110px] left-[65px]"
      />
      <img
        src={whiteBoy}
        alt="white boy"
        className="hidden lg:block z-[10] absolute top-[102px] right-[119px]"
      />
      <img
        src={baldBoy}
        alt="bald boy"
        className="hidden lg:block z-[10] absolute bottom-[74px] left-[137px]"
      />
      <img
        src={blackBoy}
        alt="black boy"
        className="hidden lg:block z-[10] absolute bottom-[99px] right-[114px]"
      />
      <img
        src={curlyArrowDown}
        alt="arrow down"
        className="hidden lg:block z-[5] absolute bottom-[258px] left-[0px]"
      />
      <img
        src={curlyArrowUp}
        alt="arrow up"
        className="hidden lg:block z-[5] absolute bottom-[340px] right-[0px]"
      />
      <img src={wavyLeft} alt="" className="hidden lg:block z-[5] absolute top-0 left-0" />
      <img src={wavyRight} alt="" className="hidden lg:block z-[5] absolute bottom-0 right-0" />
      <div className="rounded-[10px] z-10 pt-[67px] pb-[73px] ">
     <ForgetCard/>
     </div>
    </section>
  );
};

export default ForgetPassword;

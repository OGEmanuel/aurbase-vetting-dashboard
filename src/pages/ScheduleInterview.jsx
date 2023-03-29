import Header from '../dashboard/header'
import User from '../assets/images/user.png'
import BCheck from '../assets/blackcheck.png'
import GCheck from '../assets/greencheck.png'

const ScheduleInterview = () => {
  return (
    <div>
    <Header title='Progress'/>
    <p className='font-semibold mb-[12px] md:mb-[37px] text-2xl'>Schedule a Live Interview</p>
    <section className='bg-white p-8 md:px-10 flex flex-col md:flex-row  md:justify-between '>
     <div className='md:w-1/2'>
        <header className='flex md:justify-between items-center gap-4'>
        <span><img src={User} alt="user picture" /></span>
        <span className='font-semibold md:text-right'>
            <p className='text-base md:text-[36px] leading-8'>Joseph Micheal</p>
            <p className='text-[10px] md:text-lg'>Product Designer</p>
            <p className='text-[10px] md:text-sm text-[#FFCA14]'>Ready to work</p>
        </span>
        </header>
        <article className='flex flex-col gap-4 mt-10 text-[12px] md:text-lg'>
          <span className='flex justify-between'>
            <p>Email Address</p>
            <p className='font-semibold'>Joemickey@work.com</p>
            </span>
            <span className='flex justify-between'>
            <p>Phone Number</p>
            <p className='font-semibold'>+234 7807 6728 089</p>
            </span>
            <span className='flex justify-between'>
            <p>Country of Residence</p>
            <p className='font-semibold'>Nigeria</p>
            </span>
            <span className='flex justify-between'>
            <p>Country of citizenship</p>
            <p className='font-semibold'>Nigeria</p>
            </span>
            <span className='flex justify-between'>
            <p>Payment Expectations</p>
            <p className='font-semibold'>$800:00</p>
            </span>
            </article>
     </div>
     <div className='md:w-[40%] text-[14px] md:text-2xl '>
      <header className='flex justify-between mt-[21px] '>
        <p >Matching Status</p>
        <span className='bg-[#00C66733] flex justify-center items-center w-[92px] md:w-[139px] h-[24px] md:h-[36px] rounded-[15px] text-[12px] md:text-lg'>Incoming </span>
      </header>
      <p className='mt-[27px] md:mt-[55px]'>Matching Stages</p>
      <section className='w-[75%] mt-4'>
        <div className='flex justify-between'>
            <span><img src={BCheck} alt="black-check" /></span>
            <span><img src={GCheck} alt="green-check" /></span>
        </div>
        <div className='flex justify-between gap-1 mt-1'>
            <span className='bg-black w-[86px] h-[18px] rounded-[2px]'></span>
            <span className='bg-black w-[86px] h-[18px] rounded-[2px]'></span>
            <span className='bg-black w-[86px] h-[18px] rounded-[2px]'></span>
            <span className='border border-black w-[86px] h-[18px] rounded-[2px]'></span>

            

        </div>
      </section>
      <p className='mt-[32px] font-semibold'>Schedule Interview Date: <button className='p-0.5 text-[14px] block mt-[10px] text-white bg-black rounded px-8'> Schedule</button> </p>
      <p className='mt-[21px] md:mt-[40px] font-semibold'> Schedule Interview Link:</p>
      <p className='text-[12px] md:text-lg text-[#FFCA144D]'>https://www.figma.com/file/SzMGvwwGrFUnekP7MEljEx/AurBase-Tech?node-id=140%3A1790
</p>
     </div>

    </section>
    </div>
  )
}

export default ScheduleInterview
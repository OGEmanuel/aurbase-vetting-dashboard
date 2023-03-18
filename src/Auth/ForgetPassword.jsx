import TopPattern from '../assets/images/pattern-top.png'
import DownPattern from '../assets/images/pattern-down.png'
import Emoji1 from '../assets/head1.png'
import Emoji2 from '../assets/head2.png'
import Emoji3 from '../assets/head3.png'
import Emoji4 from '../assets/head4.png'
import Larrow from '../assets/left-arrow.png'
import Rarrow from '../assets/right-arrow.png'
import ForgetCard from '../components/ForgetCard'
const ForgetPassword = () => {
  return (
    <div className='bg-[rgba(255, 255, 255, 0.95)] overflow-hidden'>
      
       <div className='w-1/2 mx-auto mt-40 '>
        <ForgetCard/>
        </div> 
      <section className='flex justify-between  absolute top-0 -z-10 w-full'>
        {/* left side */}
        <div>
      <span><img src={TopPattern} alt="top-pattern" /></span>
       <aside className='flex flex-col items-center top-10 absolute'>
       <span><img src={Emoji1} alt="" /></span>
      <span className='block mt-28'><img src={Larrow} alt="" /></span>
      <span><img src={Emoji4} alt="" /></span>
        </aside>  
     
        </div>
        {/* right side */}
        <div >
      
      <aside className='flex flex-col gap-14 items-center absolute top-14 left-[60rem] 2xl:right-[-20rem]'>
      <span><img src={Emoji2} alt="" /></span>
      <span><img src={Rarrow} alt="" /></span>
      <span><img src={Emoji3} alt="" /></span>
      </aside>
      <span className='block mt-[32rem]'><img src={DownPattern} alt="top-pattern" /></span>  
        </div>
      </section>
    </div>
  )
}

export default ForgetPassword
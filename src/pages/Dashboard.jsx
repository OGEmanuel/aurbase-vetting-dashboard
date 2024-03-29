import Header from "../dashboard/header"
import Footer from "../components/Footer"
import Faq from "../components/Faq"
import Dev from '../assets/images/dev.png'
import Prog from '../assets/images/progress.svg'
import Mprog from '../assets/images/mobile-progress.png'
import Peace from '../assets/images/peace.png'
const Dashboard = () => {
  return (
    <div >
        <Header title='Dashboard'/>
        <section className="bg-dp bg-[#121212] flex justify-between items-end md:items-center px-4 p-5 rounded-lg mt-5 text-white ">
            <div className="place-self-start">
             <div className="flex items-center"><p className="font-bold lg:text-[30px]">Hi, Joseph </p><span className="w-[15px] md:w-[40px]"><img src={Peace} alt="peace sign" /></span></div>   
                  <p className="text-sm md:text-2xl">“We cannot solve problems with the kind of thinking we employed when we came up with them.
”</p>
<p className="text-sm md:text-2xl font-semibold mt-2 md:mt-6">-Albert Einstein</p>
            </div>
            <div>
                <img src={Dev} alt="illustration of developer" />
            </div>

        </section>
        <section className="mt-8 border ">
            <p className="hidden font-semibold text-3xl">Progress</p>
           <span className="hidden md:block rounded-[10px] bg-white px-12 py-4 shadow-2xl " ><img src={Prog} alt="progress image" className="w-full"/></span>

           <span className="bg-white  flex justify-center md:hidden"><img src={Mprog} alt="steps" /></span>
        </section>
        <section className="shadow-xl p-10 mt-[47px] bg-white">
            <div className="flex items-center justify-between">
                <p className="md:text-[40px] font-semibold">Frequently Asked Questions</p>
                <button className="hidden md:block bg-black text-white p-2 px-4 rounded-[10px]">Read More</button>
            </div>
            <div>
            <Faq/>
            </div>
            
        </section>
     
    </div>
  )
}

export default Dashboard
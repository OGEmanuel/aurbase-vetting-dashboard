import React from 'react'
import Header from '../dashboard/header'
import { EarningCardOne,EarningCardTwo } from '../components/Earning/EarningCard'
import Transaction from '../components/Earning/Transaction'
import Modal from '../components/Earning/Modal'
import { useSelector } from 'react-redux'

const Earnings = () => {
const earning = useSelector(state => state.earning.open);

   console.log(earning)
  return (
    <div>
      <Header title='Earnings'/>
      <main >
      {/* fixed top-[10rem] right-[0rem]  md:right-[6rem] lg:right-[11rem] */}
        {earning && <div className='relative z-[9999]  w-full flex justify-center '><Modal/> </div>}
        <section className='flex flex-col lg:flex-row gap-4 justify-between'>
            <EarningCardOne/>
            <EarningCardTwo/>
        </section>
        <section>
            <Transaction/>
        </section>
      </main>
        </div>
  )
}

export default Earnings
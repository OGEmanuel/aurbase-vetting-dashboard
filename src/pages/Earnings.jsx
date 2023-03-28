import React from 'react'
import Header from '../dashboard/header'
import { EarningCardOne,EarningCardTwo } from '../components/Earning/EarningCard'
import Transaction from '../components/Earning/Transaction'
import Modal from '../components/Earning/Modal'
import { useSelector } from 'react-redux'
const Earnings = () => {
   const state=useSelector((state)=>state.earning.open)
   console.log(state)
  return (
    <div>
        <Header title='Earnings'/>
      <main>
        {state && <div className='fixed top-[10rem] right-[10rem]'><Modal/> </div>}
        <section className='flex justify-between'>
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
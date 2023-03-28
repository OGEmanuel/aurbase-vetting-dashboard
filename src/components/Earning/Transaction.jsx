import React, { useState } from 'react'
import Funnel from '../../assets/funnel.png'
import Search from '../../assets/search-1.png'
import Back from '../../assets/back.png'
import A from '../../assets/A.png'
import { useDispatch } from 'react-redux';
import { overlayMain } from '../../redux-store/features/open-overlay-body'
const Btns=[1,2,3]

const Modal=({data})=>{
       const {Name,Status,Transaction,Amount,Balance,Date}=data
    return(
        <div className='bg-white fixed top-[5rem] right-60  mx-auto w-[551px] z-[10000] py-8 rounded-[10px]'>
           <div className='flex px-10'><span><img src={Back} alt="back" /> </span></div>
           <span className='flex justify-center'><img src={A} alt="aurbase logo" /></span>
          <h1 className='text-center'>Generated by <span className='text-[#FFCA14]'>{Name} </span> on {Date}</h1>
          <section className='mt-5  flex flex-col gap-2 items-center justify-center  w-[310px] mx-auto' >
            <div className='flex justify-between max-w-[310px] w-full'>
                <p>AMOUNT (USD)</p>
                <p>{Amount}</p>
            </div>
            <div className='flex justify-between max-w-[310px] w-full'>
                <p>STATUS</p>
                <p className={`${Status=='success'?'text-[#00C667]':'text-[#FFCA14]'}`}>{Status}</p>
            </div>
            <div className='flex justify-between max-w-[310px] w-full'>
                <p>TIME</p>
                <p>8:32:33 AM</p>
            </div>
            <div className='flex justify-between max-w-[310px] w-full'>
                <p>TYPE</p>
                <p>Withdrawals</p>
            </div>
            <div className='flex justify-between max-w-[310px] w-full'>
                <p>WITHDRAW TO</p>
                 <p>Perfect Money</p>
            </div>
            <div className='flex justify-between max-w-[310px] w-full'>
                <p>ACCOUNT</p>
                <p>U85634556</p>
            </div>
            <div className='flex justify-between max-w-[310px] w-full'>
             <p>TRANSACTION ID</p>
             <p>{Transaction}</p>
            </div>
            <div className='flex justify-between max-w-[310px] w-full'>
                <p>BALANCE</p>
                <p>{Balance}</p>
            </div>
            <div className=' max-w-[310px] w-full'>
                <button className='bg-black text-white w-full p-2 rounded'>Share Receipt</button>
            </div>
          </section>
        </div>
    )
}
import {data} from '../../../Data/Transaction'
const Transaction = () => {
    const dispatch=useDispatch()
    const [modal,setModal]=useState(null)
    const [state,setState]=useState(1)
   const handleModal=(id)=>{
    dispatch(overlayMain());
       if(modal===id){
        setModal(null)
       }else{
        setModal(id)
       }
    // console.log(id)
   }
    const handleNext=()=>{
      if(state<3){
        setState(state+1)
      }
    }
    const handlePrev=()=>{
        if(state>1){
            setState(state-1)
          }
    }
  return (
    <section>
      <p className='text-2xl font-semibold mt-8 mb-[10px]'>Transaction History</p>
      <main className='border bg-white p-5 rounded'>
        <div className='flex justify-between items-center mb-10'>
            {/* left side */}
         <span className='border flex items-center bg-[white] p-2 h-[45px] gap-2 rounded'>
            <span><img src={Search} alt="search" /></span>
           <input type="text" placeholder='Type something....' className='outline-none bg-[white] border-none' />
         </span>
         {/*right side */}
         <span className='flex '>
            <span className='bg-black flex justify-center items-center text-white px-2 gap-2  rounded'> <span><img src={Funnel} alt="funnel" /> </span> Filter</span>
            <p>:sort by Date</p>
         </span>
        </div>
         <div className='font-bold grid grid-cols-7 text-[18px] place-items-center'>
            <p>TransactionID</p>
             <p>Name</p>
             <p>Amount</p>
             <p>Status</p>
             <p>Balance</p>
             <p>Date</p>
              <p>Action</p>
         </div>
         {
            data.map(item=>{
                return(
                    <div key={item.id}>
                    {modal===item.id && <Modal data={item}/>}
                    <div className={`grid grid-cols-7 place-items-center  py-3 ${item.id%2==0?'bg-white':'bg-[#4747470F]'} `} key={item.id} >
                    <p>{item.Transaction}</p>
                         <span className='flex items-center place-self-start gap-2 '><span><img src={item.image} alt="company-logo" /></span><p>{item.Name}</p></span>
                        <p>{item.Amount}</p>
                        <p className={`${item.Status=='success'?'text-[#00C667]':'text-[#FFCA14]'}`}>{item.Status}</p>
                        <p>{item.Balance}</p>
                        <p>{item.Date}</p>
                         <button onClick={()=>{handleModal(item.id)}} className='bg-white rounded border border-[ rgba(0, 0, 0, 0.5)] px-5 p-1'>View</button>
                    </div>
                    </div>
                )
            })
         }
     
      </main>
      <div className='flex mt-10 justify-center text-#121212 gap-2'>
      <p onClick={handlePrev} className='text-[#121212]'>Previous</p>
        {Btns.map((item,index)=>{
            return(
                <button key={index}  onClick={()=>{setState(item)}} className={`${state===item?'bg-[#121212] text-white':'bg-[#E0E0E0] '} px-2 rounded`}>{item}</button>
            )
        })}  
        <p onClick={handleNext} className='text-[#121212]'>Next</p>

      
      </div>
    </section>
  )
}

export default Transaction

import React from 'react'
import Cancel from '../../assets/cancel.png'
import Perfect from '../../assets/big-perfectmoney.png'
import Sperfect from '../../assets/small-perfectmoney.png'
import Info from '../../assets/info.png'
import { useDispatch } from 'react-redux'
import { earningModal } from '../../redux-store/features/earning-modal'
// import OverlayMain from '../../dashboard/components/UI/overlay-main'
import { overlayMain } from '../../redux-store/features/open-overlay-body'
const Modal = () => {
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(earningModal())
        dispatch(overlayMain())
    }
    const handleClose=()=>{
        dispatch(earningModal())
        dispatch(overlayMain())
    }
  return (

    <main className='bg-white p-5 fixed top-[8rem] w-[90%] md:w-[750px] rounded-[10px] '>
    <div className='flex justify-between border-b-2 border-[#3A3A3A1A] '><p className='font-semibold md:text-2xl'>Select withdrawal Method</p><span onClick={handleClose}><img src={Cancel} alt="" /></span></div>
    <section className='flex flex-col md:flex-row justify-center md:border-b-2 border-[#3A3A3A1A] md:pb-7'>
        <div>
            <p className='mt-[16px] md:mt-[30px]'>International Payment</p>
            <span className='mt-[16px] block'><img src={Perfect} alt="perfect-logo" /></span>
            <p className='mt-[20px] font-semibold'>Local Bank  payment</p>
            <p className='mt-[16px]'>N:B Local Bank payments are not supported Yet.</p>
        </div>
        <div className='border-t-2 md:border-l-2 border-[#3A3A3A1A] pl-4 max-w-[375px]'>
            <span className='mt-[16px] block'><img src={Sperfect} alt="perfect-logo" /></span>
            <span>
                <label htmlFor="Enter Account" className='block mt-[18px]'>Enter Account</label>
                <input type="text" placeholder='01325567893855' className='bg-[#F2F2F2] outline-none w-full p-2' />
            </span>
            <span>
                <label htmlFor="Enter Amount" className='block mt-[18px]'>Enter Amount</label>
                <input type="text" placeholder='$12,000.00' className='bg-[#F2F2F2] outline-none w-full p-2'/>
            </span>
            <span className='block mt-[25px]'><button className='bg-black text-white w-full p-2'>Withdraw Now </button></span>
            <div className='hidden md:flex items-center gap-2 mt-[21px]'><span><img src={Info} alt="info" /></span> <p className='text-[12px]'>Your Account name must match the name___ on your account.</p></div>
            <div className='flex items-center gap-2 mt-2'><span><img src={Info} alt="info" /></span><p className='text-[12px]'>Withdrawal can take 3-7 working days.</p></div>
        </div>
    </section>
    </main>
  )
}

export default Modal
import {useState} from 'react'
import Header from '../dashboard/header'
import { Personality1,Personality2,Personality3,Personality4 } from '../components/Personality'
const Personality = () => {
  const [state,setState]=useState(1)
  const handleClick=()=>{
     setState(state+1)
    console.log(state)
  }
  return (
    <div>
    <Header title='Progress'/>
    <section className='mt-5'>
       {state===1 && <Personality1 onClick={handleClick}/>} 
       {state===2 && <Personality2 onClick={handleClick}/>} 
       {state===3 && <Personality3 onClick={handleClick}/>} 
       {state===4 && <Personality4 onClick={handleClick}/>} 
    </section>
    </div>
  )
}

export default Personality
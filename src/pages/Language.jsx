import {useState} from 'react'
import {Language1,Language2,Language3} from '../components/Language'
import Header from '../components/Header'
const Language = () => {
  const [state,setState]=useState(1)

  const handleClick=()=>{
     setState(state+1)
  }
  return (
    <div className="px-14 ">
    <Header title='Progress'/>
    {state===1 && <Language1 onClick={handleClick}/>}
    {state===2 && <Language2 onClick={handleClick}/>}
     {state===3 && <Language3 onClick={handleClick}/>}
        
    </div>
  )
}

export default Language
import {useState} from 'react'
import Plus from '../assets/plus.png'
import Minus from '../assets/minus.png'

const data=[
  {
    id:1,
    title:'What’s Aurbase about ?',
    text:'Aurbase is a data driven hiring platform that helps the productivity on a company by focusing less on hiring and doing the important things'
    
}, {
    id:2,
    title:'What’s Aurbase about ?',
    text:'Aurbase is a data driven hiring platform that helps the productivity on a company by focusing less on hiring and doing the important things'
    
},
{
    id:3,
    title:'What’s Aurbase about ?',
    text:'Aurbase is a data driven hiring platform that helps the productivity on a company by focusing less on hiring and doing the important things'
    
},
{
    id:4,
    title:'What’s Aurbase about ?',
    text:'Aurbase is a data driven hiring platform that helps the productivity on a company by focusing less on hiring and doing the important things'
    
}
,
{
    id:5,
    title:'What’s Aurbase about ?',
    text:'Aurbase is a data driven hiring platform that helps the productivity on a company by focusing less on hiring and doing the important things'
    
}


]
const FaqBox=({item})=>{
    const [state,setState]=useState(null)
    const handleClick=(i)=>{
       if(state==i){
        setState(null)
       }else{
        setState(i)
       }
    }
   return(
    <div  className='rounded border border-[#3A3A3A99] px-4 py-3 cursor-pointer'>
        <span onClick={()=>handleClick(item.id)} className='flex justify-between items-center'><h3 className='font-semibold md:text-2xl '>{item.title}</h3> <span>{state==item.id?<img src={Minus} alt="plus" />:<img src={Plus} alt="plus" />}</span></span>
        {state==item.id && <p className='md:text-lg md:w-[80%] mt-2'>{item.text}</p>}
    </div>
   )
}
const Faq = () => {
  return (
    <div>
        {data.map(item=>{
            return(
                <div key={item.id} className='mt-4 '>
                    <FaqBox item={item}/>
                </div>
                
            )
        })}
    </div>
  )
}

export default Faq
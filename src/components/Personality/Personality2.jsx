import {useState} from 'react'
import Search from '../../assets/search.png'
const skills=[
    {
        id:1,
        title:'Teamwork',
    },
    {
        id:2,
        title:'Communication',
    },   {
        id:3,
        title:'Collaboration',
    } ,  {
        id:4,
        title:'Time Management',
    },   {
        id:5,
        title:'Work Ethics',
    },
    ,   {
        id:6,
        title:'Problem Solving',
    }
    ,   {
        id:7,
        title:'Critical Thinking',
    }
    ,   {
        id:8,
        title:'Decision-Making',
    }
]
const SkillButton=({item})=>{
  const [colored,setColored]=useState(false)
        const handleClick=()=>{
            setColored(!colored)
        }
     return(
    <>
      <button onClick={handleClick} className={`${colored?'bg-black text-white':'bg-[#F1F1F1] text-black'} rounded-xl p-4 px-[30px] border border-[#000000]`}>{item.title}</button>
       </>
     )
}

const Personality2 = ({onClick}) => {
  return (
    <section className='bg-white p-5'>
     <div className='flex justify-between'>
        <p className='text-2xl font-semibold'>Please select your soft skills</p>
        <span className='rounded-lg bg-[#F1F1F1] flex p-2.5 items-center gap-3'>
            <img src={Search} alt="search" />
            <input type="text"  className='bg-[#F1F1F1] outline-none' placeholder='Search skill'/>
        </span>
     </div>
     <div className='flex gap-3 flex-wrap mt-5'>
      {skills.map(item=>{
        return(
            <SkillButton item={item}/>
        )
      })}
     </div>
     <div className='flex justify-end mt-20 '>
        <button onClick={onClick} className='bg-[#121212] px-10 p-2 text-white rounded'>Next</button>
     </div>
    </section>
  )
}

export default Personality2
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circle = () => {
  const value = 3;
  const maxValue=15
  const style={
    path:{
      stroke:'#FFCA14',
      strokeLinecap: 'butt',
    },
    trail:{
   stroke:'#EBEBEB'
    },
    text:{
      fill:'#000000'
    }
  }
  return (
    //  Circle 
    <div className='w-[65%]'>
    <CircularProgressbar value={value} maxValue={maxValue} text={`${value}/${maxValue}`} strokeWidth="12" styles={style} />
    </div>
  )
}

export default Circle
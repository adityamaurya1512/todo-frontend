import '../css/date.css'
import useTaskStore from '../store/useTaskStore';
type Props={
 weekday:string,
  weekdate:string,
  isoDate:string
}
function DateComponent({weekday,weekdate,isoDate}:Props)
{   const { setSelectedDate } = useTaskStore();
const handleClick = () => {
    console.log('clicked')
    setSelectedDate(isoDate);
  };
    return (
        <div className='date'>
         <button onClick={handleClick} className='btn'><p>{weekday}</p>{weekdate} </button>
        </div>
    )
}

export default DateComponent
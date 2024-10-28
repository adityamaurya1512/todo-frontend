import '../css/tasklist.css'
import { FaEdit, FaTrash } from 'react-icons/fa';
type Props={
    title:string
}
function ListItem({title}:Props)
{
    return (
        <div className='list-item'>
         <input type="checkbox" />
         <h4>{title}</h4>
          <button><FaEdit/></button>
          <button><FaTrash/></button>

        </div>
    )
}

export default ListItem
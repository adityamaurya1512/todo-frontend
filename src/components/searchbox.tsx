
import '../css/searchbox.css'
import { FaSearch } from 'react-icons/fa'
function SearchBox(){
    return(
        <div className="searchbox">
        <input type="text"  />
        <button>
        <FaSearch/>
        </button>
        </div>
    )
}

export default SearchBox


import './App.css'
import SearchBox from './components/searchbox'
import Calender from './components/calender'
import WeekCard from './components/weekcard'
import TaskList from './components/taskList'
import AddItem from './components/add-item'
function App() {

  return (
    <>
    <div className='main-container'>
      <div className='app-card'>
       <SearchBox/>
       <Calender/>
       <WeekCard/>
       <TaskList/>
       <AddItem/>
      </div>
    </div>
    </>
  )
}

export default App

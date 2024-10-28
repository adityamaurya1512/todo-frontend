// src/components/TaskList.tsx
import React, { useEffect } from 'react';
import useTaskStore from '../store/useTaskStore';
import '../css/tasklist.css'
import ListItem from './list-item';
const TaskList = () => {
  const { selectedDate, setTasks, tasks } = useTaskStore();

  // Fetch tasks for the selected date when the component mounts or when selectedDate changes
  useEffect(() => { 
    console.log('running..')
    const fetchTasks = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/get-task?date=${selectedDate}`);
     
      const data = await response.json();
      console.log(data)
      setTasks(data);
    };

    fetchTasks();
  }, [selectedDate, setTasks]); // Re-fetch when selectedDate changes

  return (
    <div className='list'>
     
        {tasks.map((task) => (
          <ListItem/>
        ))}
      
    </div>
  );
};

export default TaskList;

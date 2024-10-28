import React, { useState } from 'react';
import axios from 'axios';
import '../css/add-item.css';
import { AiOutlinePlus } from 'react-icons/ai';

const TaskForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [status, setStatus] = useState('Open');
  const [priority, setPriority] = useState('High');

  // Toggle form visibility
  const toggleForm = () => setIsOpen(!isOpen);
  const apiUrl = import.meta.env.VITE_API_URL;
  // Handle form submission
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskData = { title, description, date, startTime, endTime, status, priority };

    try {
      await axios.post(`${apiUrl}/add`, taskData);
      console.log(taskData);
      console.log('Task saved successfully');
      toggleForm(); // Close the form on successful save
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <div>
      <button onClick={toggleForm} className="add-task-button">
        <AiOutlinePlus size={40} className="custom-icon" />
      </button>

      {isOpen && (
        <div className="task-form-overlay">
          <div className="task-form">
            <h2>Add New Task</h2>
            <form onSubmit={handleSave}>
              <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
              </div>
              <div>
                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
              <div>
                <label>Start Time:</label>
                <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
              </div>
              <div>
                <label>End Time:</label>
                <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
              </div>
              <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <div>
                <label>Priority:</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <button type="submit" className="button-primary">Save</button>
            </form>
            <button onClick={toggleForm} className="button-primary">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskForm;

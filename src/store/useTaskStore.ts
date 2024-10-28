// src/store/useTaskStore.ts
import {create} from 'zustand';

interface Task {
  title: string;
  description: string;
  date: string; // date in ISO format
  startTime: string;
  endTime: string;
  status: string;
  priority: string;
}

interface TaskStore {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  selectedDate: new Date().toISOString().split('T')[0], // Sets initial date to today in YYYY-MM-DD format
  setSelectedDate: (date) => set({ selectedDate: date }),
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}));

export default useTaskStore;

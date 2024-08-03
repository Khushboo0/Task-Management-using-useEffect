
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useState,useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the API
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); // Empty dependencies array means this effect runs once after initial render

  const addTask = (task)=>{
    setTasks([...tasks,task])
  }



  return (
    <>
    <h1> Task Management</h1>
    <TaskForm addTask={addTask}/>
    <TaskList tasks={tasks}/>
    </>
  );
}

export default App;

import { useState } from 'react'
import Header from '../src/components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learning React',
      day: ' Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at work',
      day: ' Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: ' Feb 7th at 3:30pm',
      reminder: false,
    },
  ])
  // addTask
  const addTask = (task) => {
    console.log(task)
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  return (
    <div className="container">
      <Header />
      <AddTasks onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to show'
      )}
    </div>
  )
}

export default App

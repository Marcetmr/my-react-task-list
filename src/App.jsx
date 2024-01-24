// Importaciones y set-up inicial

import TaskList from "./components/TaskList";

import Header from "./components/Header";

import AddTaskForm from "./components/AddTaskForm";

import { useToDoList } from "./hooks/useToDoList";

// Array con listado de las tareas

const list = [
  {
    description: "Buy a new gaming laptop",
    isCompleted: false,
  },
  {
    description: "Complete a previous task",
    isCompleted: false,
  },
  {
    description: "Create video for YouTube",
    isCompleted: true,
  },
  {
    description: "Create a new portfolio site",
    isCompleted: true,
  },
];

function App() {
  const [toDoList, handleNewTask, handleDeleteTask, handleEditTask] = useToDoList();

  return (
    <div>
      <Header />
      <AddTaskForm onNewTask={handleNewTask} />
      <TaskList list={toDoList} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
    </div>
  );
}



// Exportaciones

export default App;

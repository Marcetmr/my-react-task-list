// Importaciones y set-up inicial

import "./App.css"

import TaskList from "./components/TaskList";

import Header from "./components/Header";

import AddTaskForm from "./components/AddTaskForm";

import { useToDoList } from "./hooks/useToDoList";

// Array con listado de las tareas

const list = [
  {
    name: "Purchases",
    description: "Buy a new gaming laptop",
    isCompleted: false,
  },
  {
    name: "Task Manager",
    description: "Complete a previous task",
    isCompleted: false,
  },
  {
    name: "Content Creation",
    description: "Create video for YouTube",
    isCompleted: true,
  },
  {
    name: "Web Dev Homework",
    description: "Create a new portfolio site",
    isCompleted: true,
  },
];

function App() {
  const [toDoList, handleNewTask, handleDeleteTask, handleEditTask, handleCompleteTask] = useToDoList();

  return (
    <div>
      <Header />
      <AddTaskForm onNewTask={handleNewTask} />
      <TaskList list={toDoList} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} onCompleteTask={handleCompleteTask} />
    </div>
  );
}



// Exportaciones

export default App;

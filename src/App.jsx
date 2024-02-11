// Importaciones y set-up inicial

import "./App.css"

import TaskList from "./components/TaskList";

import Header from "./components/Header";

import AddTaskForm from "./components/AddTaskForm";

import { useToDoList } from "./hooks/useToDoList";

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

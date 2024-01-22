// Importaciones y set-up inicial

import TaskList from "./components/TaskList";

import Header from "./components/Header";

import AddTaskForm from "./components/AddTaskForm";

import { useState, useEffect } from "react";

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
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const initialList = localStorage.getItem("toDoList");
    setToDoList(JSON.parse(initialList));
  }, [])

  const handleNewTask = (description) => {
    const newTask ={
      description: description,
      isCompleted: false
    };

    const newArray = [...toDoList, newTask];
    
    setToDoList(newArray);

    localStorage.setItem('toDoList', JSON.stringify(newArray));

  }

  const handleDeleteTask = (description) => {
    const newArray = toDoList.filter(i => i.description !== description);

    setToDoList(newArray);

    localStorage.setItem('toDoList', JSON.stringify(newArray));

  }

  const handleEditTask = (description) => {
    const newDescription = prompt('Input new description');

    const index = toDoList.findIndex(i => i.description === description);

    toDoList[index].description = newDescription;

    setToDoList([...toDoList]);

    localStorage.setItem('toDoList', JSON.stringify(toDoList));

  }

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

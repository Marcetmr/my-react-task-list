

import { useState, useEffect } from "react";

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

export function useToDoList () {
    const [toDoList, setToDoList] = useState(list);

    useEffect(() => {
      const initialList = localStorage.getItem("toDoList");

      if (initialList)
        setToDoList(JSON.parse(initialList));
    }, [])
  
    const handleNewTask = (item) => {
      const newTask ={
        name: item.name,
        description: item.description,
        isCompleted: false
      };
  
      const newArray = [...toDoList, newTask];
      
      setToDoList(newArray);
  
      localStorage.setItem('toDoList', JSON.stringify(newArray));
  
    }
  
    const handleDeleteTask = (name) => {
      const newArray = toDoList.filter(i => i.name !== name);
  
      setToDoList(newArray);
  
      localStorage.setItem('toDoList', JSON.stringify(newArray));
  
    }
  
    const handleEditTask = (name, description) => {
      
      const newName = prompt('Input new name', name);

      if (!newName) return;
      
      const newDescription = prompt('Input new description', description);

      if (!newDescription) return;
  
      const index = toDoList.findIndex(i => i.name === name);

      toDoList[index].name = newName;
  
      toDoList[index].description = newDescription;
  
      setToDoList([...toDoList]);
  
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
  
    }

    const handleCompleteTask = (name) => {

      const index = toDoList.findIndex(i => i.name === name);
    
      toDoList[index].isCompleted = true;
    
      setToDoList([...toDoList]);
      
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
    
    }

    return [toDoList, handleNewTask, handleDeleteTask, handleEditTask, handleCompleteTask];
}


import { useState, useEffect } from "react";

export function useToDoList () {
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
    return [toDoList, handleNewTask, handleDeleteTask, handleEditTask];
}
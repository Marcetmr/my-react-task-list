import { useState } from "react";

function AddTaskForm( props) {

    const onNewTask = props.onNewTask;
    const [taskDescription, setTaskDescription] = useState('');

    return (
    <div>
        <input type='text' value={taskDescription} 
        onChange={e => setTaskDescription(e.target.value)} placeholder='Add a new task' />
        <button onClick={e => onNewTask(taskDescription)}>Add Task</button>
    </div>);
}

// Exportaciones

export default AddTaskForm;


// Importaciones y set-up inicial

import { useState } from "react";

// Componente AddTaskForm

function AddTaskForm(props) {

    const { onNewTask } = props;
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [formValidation, setFormValidation] = useState({
        taskName: undefined,
    });

// Handler para onSubmit

    const onSubmit = (e) => {
        e.preventDefault();
        onNewTask({ name: taskName, description: taskDescription });
        setTaskName('');
        setTaskDescription('');
        setFormValidation({
            ...formValidation,
            taskName: undefined,
        });
    };

// Event handler para validar task name

    const handleTaskNameChange = (e) => {
        const value = e.target.value;

        const isTaskNameValid = value.length >= 3;

        let taskNameErrorMessage = "";
        if (!isTaskNameValid) {
            taskNameErrorMessage = "task name must be at least 3 characters long"
        };

        setFormValidation({
            ...formValidation,
            taskName: taskNameErrorMessage,
        });

        setTaskName(value);

    };

// Validación del formulario

    const isFormValid = Object.keys(formValidation).every(
        (key) => formValidation[key] === ""
    );

// Formulario

    return (
    <div>
        <div className="error">
            {formValidation.taskName}
        </div>
        <form onSubmit={onSubmit}>
            <input type="text" value={taskName} onChange={handleTaskNameChange}
            placeholder='Add new task name' />
            <input type="text" value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)} placeholder="Add new task description" />
            <button type="submit" disabled={!isFormValid}>Add</button>
        </form>
    </div>);
}

// Exportaciones

export default AddTaskForm;
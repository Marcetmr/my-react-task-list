

import './task.css'

function Task (prop) {

    const { description, isCompleted } = prop;

    return (
        <li className={`${isCompleted ? 'completed' : ''}`} style={{display: "inline"}}>
            {description}
            <input type="checkbox" checked={isCompleted} readOnly />
        </li>
    );
}

// exportaciones

export default Task;
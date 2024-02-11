

import './task.css'

function Task (prop) {

    const { name, description, isCompleted } = prop;

    return (
        <li className={`${isCompleted ? 'completed' : ''}`} style={{display: "inline"}}>
            <div style= {{display: "inline"}}>
                <span>
                    {name}
                </span>
                <span>
                    {description}
                </span> 
            </div>
            <input type="checkbox" checked={isCompleted} readOnly />
        </li>
    );
}

// exportaciones

export default Task;
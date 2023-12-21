

function Task (prop) {

    const { description, isCompleted } = prop;

    return (
        <li className={`task ${isCompleted ? 'completed' : ''}`}>
            {description}
            <input type="checkbox" checked={isCompleted} readOnly />
        </li>
    );
}

// exportaciones

export default Task;
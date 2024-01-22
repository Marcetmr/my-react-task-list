

import Task from './Task';

function TaskList (prop) {

    const { list, onDeleteTask, onEditTask } = prop;

    return (
        <div className='list-container'>
            {
                list.map((item) => {
                    return (
                    <>
                    <Task key={item.description} description={item.description} isCompleted={item.isCompleted} />
                   <button onClick={(e) => onDeleteTask(item.description)}>🗑️</button>
                   <button onClick={(e) => onEditTask(item.description)}>✏️</button>
                   <br></br>
                    </>) 
                })
            }
        </div>
    );
}

// Exportaciones

export default TaskList;
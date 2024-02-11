

import Task from './Task';

function TaskList (prop) {

    const { list, onDeleteTask, onEditTask } = prop;

    return (
        <div className='list-container'>
            {
                list.map((item) => {
                    return (
                    <>
                    <Task key={item.name} name={item.name} description={item.description} isCompleted={item.isCompleted} />
                   <button onClick={(e) => onDeleteTask(item.name)}>🗑️</button>
                   <button onClick={(e) => onEditTask(item.name, item.description)}>✏️</button>
                   <br></br>
                    </>) 
                })
            }
        </div>
    );
}

// Exportaciones

export default TaskList;
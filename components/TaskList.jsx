

import Task from './Task';

function TaskList (prop) {

    const { list } = prop;

    return (
        <div className='list-container'>
            {
                list.map((item) => {
                    return (
                    <Task description={item.description} isCompleted={item.isCompleted} />)
                })
            }
        </div>
    );
}

// Exportaciones

export default TaskList;
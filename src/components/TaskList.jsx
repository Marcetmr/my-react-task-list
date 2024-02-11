

import Task from './Task';

function TaskList (prop) {

    const { list, onDeleteTask, onEditTask, onCompleteTask } = prop;

    return (
        <div className='list-container'>
            <table className='task-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.isCompleted ? "Completed" : "Incomplete"}</td>
                            <td>
                                <div className='list-buttons'>
                                    <button onClick={(e) => onDeleteTask(item.name)}>🗑️</button>
                                    <button onClick={(e) => onEditTask(item.name, item.description)}>✏️</button>
                                    <button onClick={(e) => onCompleteTask(item.name)}>✅</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Exportaciones

export default TaskList;
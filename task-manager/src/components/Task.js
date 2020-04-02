import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'
import { TaskListContext } from '../context/TaskListContext'
const Task = ({ task }) => {

    const { removeTask,findItem } = useContext(TaskListContext);

    return (
        <li className='list-item'>
            <span>{task.title}</span>
            <div>
                <button
                    onClick={() => removeTask(task.id)}
                    className="btn-delete task-btn">
                    <FontAwesomeIcon icon={faTrashAlt} color='white' />
                </button>{' '}
                <button className="btn-edit task-btn">
                    <FontAwesomeIcon icon={faPen} color='white' onClick={() => findItem(task.id)}  />
                </button>
            </div>
        </li>
    )
}

export default Task

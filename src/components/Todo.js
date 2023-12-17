import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const Todo = ({task , toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div>
            <EditIcon onClick={() => editTodo(task.id)} />
            <DeleteIcon className='delete' onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

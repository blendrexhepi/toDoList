import React,{useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [input, setInput] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()

        editTodo(input, task.id)

        setInput("")
    }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' value={input} placeholder='Update task' name='text' className='todoInput' 
        onChange={(e) => setInput(e.target.value)} style={{ marginTop: "10px"}} />
        <button type='submit' className='todoButton'>Update</button>
    </form>
  )
}

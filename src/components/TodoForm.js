import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        addTodo(input)

        setInput("")
    }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' value={input} placeholder='Add a Todo' name='text' className='todoInput' 
        onChange={(e) => setInput(e.target.value)} />
        <button type='submit' className='todoButton'>Add Todo</button>
    </form>
  )
}

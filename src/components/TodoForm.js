import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {

    const [value,setvalue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
       // console.log(value)
        addTodo(value);

        setvalue("")
    }

  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Whats is the task today?'
        onChange={(e) => setvalue(e.target.value)}/>
        <button type='Submit' className='todo-btn'> Add task </button>
    </form>
  )
}

export default TodoForm

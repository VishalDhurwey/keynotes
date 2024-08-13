import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {

    const [value,setvalue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
       // console.log(value)
        editTodo(value, task.id);

        setvalue("")
    }

  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update Task'
        onChange={(e) => setvalue(e.target.value)}/>
        <button type='Submit' className='todo-btn'> Update Task </button>
    </form>
  )
}

export default EditTodoForm

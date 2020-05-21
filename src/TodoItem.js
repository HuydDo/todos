import React from 'react'

const TodoItem = (props) => {
  const handleChange = () => {
    console.log("Changed")
  }
  return(
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} 
      onChange={handleChange}/>
      <p>{props.item.text}</p>
    </div>
  )

}

export default TodoItem
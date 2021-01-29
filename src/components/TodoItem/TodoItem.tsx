import React from 'react'
import styles from "./TodoItem.module.css"
import Checkbox from "../Checkbox/Checkbox"
import DeleteButton from "../DeleteButton/DeleteButton"
// import { ITodoItemProps } from './TodoItem.model'

const TodoItem = (props:any) => {
 
  // console.log(props)

  return (
    <li className={styles.todoItem}>
              <Checkbox {...props} />
              <span className={props.todo.completed? styles.done : styles.notDone}>{props.todo.title}</span>
              <DeleteButton {...props} />
     </li>
  )
}

export default TodoItem
import React from 'react'
import styles from "./Checkbox.module.css"



const Checkbox: React.FC = (props: any) => {

  // console.log(props)

  return (
    <label className={styles.todoItemCheckbox}>
    <input type="checkbox" onChange={props.onToggle} checked={props.todo.completed}/>
    <span className={styles.checkmark}></span>
  </label>
  )
}


export default Checkbox

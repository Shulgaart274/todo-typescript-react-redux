import React from 'react'
import styles from "./ToggleAll.module.css"
import { useDispatch } from "react-redux"
import {checkAll, uncheckAll} from "../../redux/action/todosAction"
import { useTypedSelector } from '../../redux/reducer/todosReducer'

const ToggleAll: React.FC = () => {

  const todos = useTypedSelector(state => state.todosReducer.todos)
  const dispatch = useDispatch()

  const checkTodo = todos.some((todo: { completed: boolean }) => todo.completed === false)

  const check = () => {
    if (checkTodo === true) {
      const action = checkAll();
      dispatch(action)
    } else {
      const action = uncheckAll();
      dispatch(action)
    }
  }


  return (
    <label className={styles.toggleAll}>
    <input type="checkbox" className={styles.toggleAllCheckbox} onChange={check} />
    <span className={checkTodo? styles.toggleAllSpan : `${styles.toggleAllSpan} ${styles.toggleAllChecked}`}></span>
  </label>
  )
}

export default ToggleAll
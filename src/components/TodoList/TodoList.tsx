import React from 'react'
import styles from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem"
import {useDispatch} from "react-redux"
import {useTypedSelector} from "../../redux/reducer/todosReducer"
import {deleteTodo, completedTodo} from "../../redux/action/todosAction"

const TodoList: React.FC = () => {

  const dispatch = useDispatch()

  const todos = useTypedSelector(state => state.todosReducer.todos)
  const status = useTypedSelector(state => state.todosReducer.status)

  const onDelete = (id: number) => {
   const action = deleteTodo(id)
   dispatch(action)
  }

  const onToggle = (id: number) => {
   const action = completedTodo(id)
   dispatch(action)
  }

 const checkStatus = () => {

   switch(status) {
     case 'completed':
     return todos.filter((todo: { completed: boolean }) => todo.completed === true).map((todo: { id: number }) => {
      return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
    })
     case 'active':
     return todos.filter((todo: { completed: boolean }) => todo.completed === false).map((todo: { id: number }) => {
      return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
    })
     default:
     return todos.map((todo: { id: number }) => {
      return <TodoItem todo={todo} key={todo.id} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)}  />
    })
   }

}

  return (
    <ul className={styles.todoList}>
        {checkStatus()}
    </ul>
  )
}

export default TodoList
import React, {useState} from 'react'
import styles from './TextInput.module.css'
import {ITodo} from './TextInput.model'
import {useDispatch} from 'react-redux'
import {createTodo} from '../../redux/action/todosAction'
 

const TextInput: React.FC = () => {
   const [value, setValue] = useState("")
   const dispatch = useDispatch()
 
   const addTodo = () => {
      const title = value;

      const todo: ITodo = {
        id: Date.now(),
        title: title,
        completed: false,
      }

      const action = createTodo(todo)
      dispatch(action)
   }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

   const submitHandler = (event: React.KeyboardEvent<HTMLFormElement>) => {
     event.preventDefault();

     addTodo();
     setValue('');
   }

  return (
    <form className={styles.form} id="form" onSubmit={submitHandler}>
          <input
            type="text"
            className={styles.input}
            name="title"
            form="form"
            value={value}
            onChange={handleChange}
            placeholder="What needs to be done?"
            required
          />
        </form>
  )
}

export default TextInput
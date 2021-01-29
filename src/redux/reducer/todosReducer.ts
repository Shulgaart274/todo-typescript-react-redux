import { ITodo } from "../../components/TextInput/TextInput.model"
import { CHECK_ALL, COMPLETED_TODO, CREATE_TODO, DELETE_TODO, UNCHECK_ALL, COMPLETED_TODOS, ACTIVE_TODOS, ALL_TODOS, DELETE_COMPLETED_TODOS } from "../types"
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { IActionCreators } from "../action/todosAction"

interface RootState {
  todosReducer: ITodos
}


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

interface ITodos {
  todos: ITodo[],
  status: string | null
}

let initialState: ITodos = {
  todos: [],
  status: null
}


const todosReducer = (state = initialState, action: IActionCreators) => {
  switch(action.type) {
    case CREATE_TODO:
      return { ...state, todos: state.todos.concat(action.todo) }

    case COMPLETED_TODO:
      return {...state, todos: state.todos.map(todo => {
        const el = { ...todo};
        if (todo.id === action.id) {
           el.completed = !el.completed
        }
        return el;
      })}

    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }

    case CHECK_ALL:
      return {...state, todos: state.todos.map(todo => {
          const el = {...todo}
         
            el.completed = true;
          
          return el
        })}
    case UNCHECK_ALL:
      return {...state, todos: state.todos.map(todo => {
          const el = {...todo}
         
            el.completed = false;
          
          return el
        })}
      
    case COMPLETED_TODOS:
      return {...state, status: 'completed'}

    case ACTIVE_TODOS:
      return {...state, status: 'active'}

    case ALL_TODOS:
      return {...state, status: null}

    case DELETE_COMPLETED_TODOS:
      return {...state, todos: state.todos.filter(todo => todo.completed === false)}
    
    default:
      return state
  }
}

export default todosReducer





import { useState } from 'react'
// import componentes
import { Todos } from './components/Todos'
import { AddTodo } from './components/AddTodo'
import { Footer } from './components/Footer'

// import types
import { type Todo as TodoType } from './types/types'


// import styles 
import './App.css'

const mockTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: true
  },
  {
    id: "2",
    title: "todo 2",
    completed: false
  },
  {
    id: "3",
    title: "todo 3",
    completed: false
  }
]

const App = (): JSX.Element => {
  /*
    We can specify the types returned by this component:
        JSX.Element: If the component does not have props, we can use this type.
        React.FC: If the component has props, it’s better to use this type. Initially, it provides us with an implicit typing for the props.We have an error: Type 'element' is not assignable to type 'FC<{}>' Type ReactElement<any,any> provides no match for the signature '(props: {}, deprecatedLegacyContext?: any):ReactNode'
  */

  // state variables

  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  /*
  const handleCompleted = (id: string): void => {
    const task = todos.filter(todo => todo.id === id)
    // task[0].completed = true
    task[0].completed ? task[0].completed = false : task[0].completed = true
    console.log(task[0].completed)
  } */


  // This is midudev solutions
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <>
      <h1 className='text-center'>todo mvc</h1>
      <AddTodo />
      <Todos
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
        todos={todos}
      />
      <Footer todos={todos} />
    </>
  )
}
export default App

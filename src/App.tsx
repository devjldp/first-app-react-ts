import { useState } from 'react'
// import componentes
import { Todos } from './components/Todos'

import './App.css'

const mockTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: false
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

  return (
    <>
      <h1>todo mvc</h1>
      <Todos todos={todos} />
    </>
  )
}
export default App

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
    Podemos anadir los tipos que nos devuelve este componente:
        * JSX.Element si no tenemos props podemos usar este.
        * React.FC si tenemos props es mejor este. Al principio nos da un error: Type 'element' is not assignable to type 'FC<{}>' Type ReactElement<any,any> provides no match for the signature '(props: {}, deprecatedLegacyContext?: any):ReactNode'
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

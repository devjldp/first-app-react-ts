import { type ListOfTodos } from "../types"


// Define the Props interface for the Todos component
interface Props {
    todos: ListOfTodos // The component expects a prop 'todos', which is a list of Todo items
}
// type is used to define a type and can't be easily extended.

// Define the Todos functional component, which accepts Props
export const Todos: React.FC<Props> = ({ todos }) => {
    // FC es un component, <Props> es de tipo generico cada persona puede pasar unsas props diferentes.
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                )
            })}
        </ul>
    )
}

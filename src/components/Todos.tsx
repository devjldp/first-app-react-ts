// import Todo component.
import { Todo } from "./Todo"


// import types
import { type ListOfTodos } from "../types/types"
import { type Todo as TodoType } from "../types/types"


// Define the Props interface for the Todos component
interface Props {
    todos: ListOfTodos, // The component expects a prop 'todos', which is a list of Todo items
    onRemoveTodo: (id: string) => void // The component expects a prop 'onRemoveTodo', which is a function that takes an id and removes the corresponding Todo item
    onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}
// type is used to define a type and can't be easily extended.

// Define the Todos functional component, which accepts Props
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
    // FC es un component, <Props> es de tipo generico cada persona puede pasar unsas props diferentes.
    return (
        <ul className="list-container">
            {todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompleted={onToggleCompleted}
                    />
                )
            })}
        </ul>
    )
}

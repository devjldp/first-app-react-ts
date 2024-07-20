import { Filter } from "./Filter"


import { type ListOfTodos } from "../types/types"
interface Props {
    todos: ListOfTodos, // The component expects a prop 'todos', which is a list of Todo items
}

export const Footer: React.FC<Props> = ({ todos }) => {
    return (
        <footer className="text-center">
            <span >
                <strong >{todos.length} pending tasks</strong>
            </span>
            <Filter
                filterSelected={''}
                onFilterChange={() => { }}
            />
        </footer>

    )
}

export const Todos: React.FC = ({ todos }) => {
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

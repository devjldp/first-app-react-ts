import { type Todo as TodoType } from "../types"


interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
    onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}


export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
    // console.log(completed)

    return (
        <div className="list-element">
            <li className={`${completed ? 'completed' : ''}`}>{title}</li>
            <div>
                <input type="checkbox" name="" id="" onChange={(event) => { onToggleCompleted({ id, completed: event.target.checked }) }} />
                <button onClick={() => { onRemoveTodo(id) }}>Delete</button>
            </div>
        </div>
    )
}

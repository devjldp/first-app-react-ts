import { type Todo as TodoType } from "../types"


interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
    onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}


export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
    // console.log(completed)

    /* Diferent way to manage the checkbox
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleted({
            id, completed: event.target.checked
        })
    }
        And then in onChange we can use handleChangeCheckbox directly.

        * 'event' is a parameter of the 'handleChangeCheckbox' function.
        * Its type is 'React.ChangeEvent<HTMLInputElement>' which means:
        * 'React.ChangeEvent' is a type that represents a change event in React.
        * 'HTMLInputElement' specifies that the event is coming from an input element of type checkbox (or any input element).
        * The ': void' after the arrow function indicates that 'handleChangeCheckbox' does not return any value.
    */

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

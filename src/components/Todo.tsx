import { type Todo as TodoType } from "../types"
type Props = TodoType

/* Option 2: Create an interface 
        interface Props{
            id: string,
            title: string,
            completed: boolean
        }
    It is better option the previous one, because we created the types inside types.d.ts file
*/
export const Todo: React.FC<Props> = ({ id, title, completed }) => {
    return (
        <div>
            <input type="checkbox" name="" id="" onChange={() => { }} />
            <li>{title}</li>
            <button onClick={() => { }}>Delete</button>

        </div>
    )
}

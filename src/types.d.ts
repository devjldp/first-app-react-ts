type TodoId = string
type TodoTitle = string
type TodoCompleted = boolean

// Define an interface for a Todo object, with specific properties
export interface Todo {
    id: TodoId,
    title: TodoTitle,
    completed: TodoCompleted
}

// Define a type alias for a list of Todo objects, represented as an array of Todo
export type ListOfTodos = Todo[]
export const initialState = {

    todos: [

        {
            todo: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}


export function simpleReducer(state = initialState, action) {
    switch (action.type) {
        case "add":
            return {
                todos: [...state.todos, { todo: action.todo, completed: false, id: Date.now()}]
            }

        case "toggle":
            return {
                todos: state.todos.map((t, idx) => idx === action.idx ? {...t, completed: !t.completed} : t)
            }

        case "delete":
            return {
                todos: state.todos.filter((t, idx) => 
                   
                    idx === action.idx ? {...t, completed: t.completed} : !t.completed
                )
                
            }
        default:
            return state;
    }
}
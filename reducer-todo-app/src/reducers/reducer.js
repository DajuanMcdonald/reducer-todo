export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const simpleReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state, 
                item: action.payload,
                completed: state.completed = false,
                id: Date.now()
            };

        case "CLEAR_COMPLETE":
            return {
                ...state, 
                item: action.payload,
                completed: state.completed = true
                
            };

        case "TOGGLE_COMPLETE":
            return {
                ...state,
                completed: state.completed = true

            }

        default:
            return state;
    };
}
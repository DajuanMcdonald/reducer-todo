export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const simpleReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, item: action.payload};

        case "CLEAR_COMPLETE":
            return {...state, item: action.completed}

        default:
            return state;
    };
}
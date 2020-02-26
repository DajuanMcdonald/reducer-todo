export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const simpleReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, todo: action.payload};

        default:
            return state;
    };
}
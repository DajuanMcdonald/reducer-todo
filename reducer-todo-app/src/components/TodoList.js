import React, { useState, useReducer } from 'react';
import { Input, Button } from 'reactstrap';
import '../components/TodoList.css'

// Set up state in this component
import { initialState, simpleReducer } from '../reducers/reducer';

const TodoList = () => {

    const [todoItem, setTodoItem] = useState('');

    const [state, dispatch] = useReducer(simpleReducer, initialState)

    console.log(state)

    const handleChanges = ev => {
        setTodoItem(ev.target.value);
        ev.preventDefault();

    }

    // Step 3 - Adding todos
    const addTodoItem = (e) => {
        e.preventDefault();

        dispatch({ type: "ADD_TODO", payload: todoItem });
    }

    // Step 5 - Clearing completed todos
    const clearTodoItem = () => {
        dispatch({ type: "CLEAR_COMPLETE", payload: state.item = '' })
    }

    // Step 4 - Toggle the completed field
    const toggleComplete = () => {
        dispatch({
            type: "TOGGLE_COMPLETE",
            payload: console.log('completed'),

        })
    }

    return (
        <React.Fragment>
            <div className="container-form">
                <Input
                    type="text"
                    onChange={handleChanges}
                    name="todoList"
                    value={todoItem}

                >
                </Input>

                <Button onClick={addTodoItem}>Add Todo</Button>

                <Button onClick={clearTodoItem}>Clear completed</Button>

            </div>

            <h3 onClick={toggleComplete} key={state.id}>
                {state.item}
            </h3>
        </React.Fragment>



    )
}

export default TodoList;
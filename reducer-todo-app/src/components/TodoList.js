import React, { useState, useReducer } from 'react';
import { Input, Button } from 'reactstrap';
import '../components/TodoList.css'

import { initialState, simpleReducer } from '../reducers/reducer';

const TodoList = () => {

    const [todoItem, setTodoItem] = useState('');

    const [state, dispatch] = useReducer(simpleReducer, initialState)

    console.log(state)

    const handleChanges = ev => {
        setTodoItem(ev.target.value);
        
    }

    const addTodoItem = () => {
        dispatch({ type: "ADD_TODO", payload: todoItem });
    }

    const clearTodoItem = () => {
        dispatch({ type: "CLEAR_COMPLETE", payload: '' })
    }

    const toggleComplete = e => {
        dispatch({ 
            type: "TOGGLE_COMPLETE", 
            payload: console.log('completed')
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
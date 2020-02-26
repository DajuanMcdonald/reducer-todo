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

    const addTodoItem = ev => {
        dispatch({ type: "ADD_TODO", payload: todoItem });
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

                <Button>Clear completed</Button>

            </div>

            <p>
                {state.todo}
            </p>
        </React.Fragment>



    )
}

export default TodoList;
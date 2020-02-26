import React, { useState, useReducer } from 'react';
import { Input, Button } from 'reactstrap';

import {initialState, simpleReducer } from '../reducers/reducer';

const TodoList = () => {

    const [todoList, setTodoList] = useState('');

    const [state, dispatch] = useReducer(simpleReducer, initialState)

    console.log(state)

    return (
        <React.Fragment>
            <Input 
            type="text"
            
            >
            </Input>

            <Button>Add Todo</Button>

            <Button>Clear completed</Button>


        </React.Fragment>

        

    )
}

export default TodoList;
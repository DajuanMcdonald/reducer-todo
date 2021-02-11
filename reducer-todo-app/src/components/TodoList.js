import React, { useReducer, useState } from 'react';
import {simpleReducer, initialState} from '../reducers/reducer';
import { Button, TextField, Input, FormControl } from '@material-ui/core';

import '../components/TodoList.css';

// Step 1: Set an initial state value through a reducer and render a list of todos from that state
function TodoList() {
    const [todo, setTodo] = useState('');
    const [state, dispatch] = useReducer(simpleReducer, initialState);

    return (
        <React.Fragment>
            <div className="App">
                <h1>Todo App</h1>
                <FormControl
                    onSubmit={e => {
                        e.preventDefault();
                        dispatch({ type: "add", todo });
                        setTodo('');
                    }}
                > 
                    <TextField id='filled-basic' type="text" label='Add Todo' onChange={e => setTodo(e.target.value)}/>
                    
                </FormControl>
                {/* Step 2: Add a form that dispatches an "ADD_TODO" action to be able to add a todo item to your list */}
                <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'add', todo, action: setTodo('') })}>ADD</Button>
                {/* Step 4: Build a function that let's you clear completed todos when you click on a "Clear Completed" button */}
                <Button variant="contained" color="secondary" onClick={() => dispatch({ type: 'delete', todo })}>DELETE</Button>
            </div>

                {/* <pre onClick={() => dispatch({ completed: true})}>
                {JSON.stringify(todos, null, 2)}
                </pre> */}

            <div id="block">



            {/* Step 3: Build a function that let's you mark todo items as completed when you click on them */}
            {state.todos.map((t, idx) => (<div
                className={t.completed ? 'completed' : 'incomplete'}
                
                key={idx}
                onClick={() =>
                    dispatch({
                        type: 'toggle', idx,
                        action: console.log(t.todo, 'completed?', !t.completed)
                    })
                }

            >{t.todo}</div>))}
      </div>


        </React.Fragment>
    );
}

export default TodoList;

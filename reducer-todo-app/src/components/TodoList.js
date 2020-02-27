import React, { useReducer, useState } from 'react';
import simpleReducer from '../reducers/reducer';
import { Button, Form, Input } from 'reactstrap';

import '../components/TodoList.css';

// Step 1: Set an initial state value through a reducer and render a list of todos from that state
function TodoList() {
    const [todo, setTodo] = useState('');
    const [{ todos }, dispatch] = useReducer(simpleReducer, { todos: [] });

    return (
        <React.Fragment>
            <h1>Todo App</h1>
            <div>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        dispatch({ type: "add", todo });
                        setTodo('');
                    }}
                >
                    <Input
                        type='text'
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                    >
                    </Input>
                </Form>
                {/* Step 2: Add a form that dispatches an "ADD_TODO" action to be able to add a todo item to your list */}
                <Button onClick={() => dispatch({ type: 'add', todo, action: setTodo('') })}>Add</Button>
                {/* Step 4: Build a function that let's you clear completed todos when you click on a "Clear Completed" button */}
                <Button onClick={() => dispatch({ type: 'delete', todo })}>Remove</Button>
            </div>

            {/* <pre onClick={() => dispatch({ completed: true})}>
      {JSON.stringify(todos, null, 2)}
      </pre> */}

            {/* Step 3: Build a function that let's you mark todo items as completed when you click on them */}
            {todos.map((t, idx) => (<div
                className={t.completed ? 'completed' : ''}
                key={idx}
                onClick={() =>
                    dispatch({
                        type: 'toggle', idx,
                        action: console.log(t.todo, 'completed?', !t.completed)
                    })
                }

            >
                {t.todo}
            </div>))}

        </React.Fragment>
    );
}

export default TodoList;

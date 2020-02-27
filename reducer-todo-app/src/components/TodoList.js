import React, { useReducer, useState } from 'react';
import simpleReducer, {initialState} from '../reducers/reducer';
import {Button, Form, Input} from 'reactstrap';

import '../components/TodoList.css';

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
                <Button onClick={() => dispatch({ type: 'add', todo, action: setTodo('') })}>Add</Button>
                <Button onClick={() => dispatch({ type: 'delete', todo })}>Remove</Button>
            </div>

            {/* <pre onClick={() => dispatch({ completed: true})}>
      {JSON.stringify(todos, null, 2)}
      </pre> */}

            {todos.map((t, idx) => (<div
                className="todoItems-list"
                key={idx}
                onClick={() => dispatch({ type: 'toggle', idx, action: console.log(t.todo, !t.completed) })}
                style={{
                    textDecoration: t.completed ? 'line-through' : ''
                }}

            >
                {t.todo}
            </div>))}

        </React.Fragment>
    );
}

export default TodoList;

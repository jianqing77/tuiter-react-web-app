// added useState
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, todoDoneToggle } from './reducers/todos-reducer'; // import the actions

// Define a functional component called 'Todos'
const Todos = () => {
    // ************** Retrieve todos from the store **************
    // retrieve todos from reducer state and assign to local todos constant
    // Use the 'useSelector' hook to retrieve the 'todos' array from the Redux store
    const todos = useSelector((state) => state.todos);

    /*****************************************************************************
     * useState() function is a hook in React that allows functional components
     * to have state. It returns an array containing two elements:
     * - the first is the current state value
     * -  the second is a function to update the state.
     * Here, we initialize the `todo` state to an object with a property `do` set
     * to an empty string. `setTodo` is the function returned by useState that can
     * be used to update the todo state.
     *****************************************************************************/
    // ************** Use useState to keep track of new todos **************
    // Define and initialize local state for new todo input
    const [todo, setTodo] = useState({ do: '' });

    // ************** Get the dispatch function from the store **************
    const dispatch = useDispatch();

    // Define a function that will be called when the "Create" button is clicked
    const createTodoClickHandler = () => {
        // Dispatch the "addTodo" action to add the new todo to the store
        // dispatch event to `addTodo` reducer function
        dispatch(addTodo(todo));
    };

    // Define a function that will be called when the "Delete" button is clicked
    // handle delete button click, accepts todo `index`
    const deleteTodoClickHandler = (index) => {
        // dispatch event to `deleteTodo` reducer function
        dispatch(deleteTodo(index));
    };

    // Define a function that will be called when the "toggle" button is clicked
    // handle checkbox click event, accept todo index
    // send index to reducer function passing index
    // of todo to toggle done field
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo));
    };

    /*****************************************************************************
     * todoChangeHandler function
     * - `setTodo` function is used to update the todo state with a newTodo object
     * that has a `do` property set to the new value of the input field.
     * - This updates the state of the `todo` object and causes a re-render of the
     * component with the new state value.
     *****************************************************************************/
    // Update local state with new todo input
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue,
        };
        setTodo(newTodo);
    };

    // Render a list of existing todos and an input to add new todos
    // Render the component
    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {/******* Add an input for new todos *******/}
                <li className="list-group-item">
                    {/* Button: call createTodoClickHandler to handle click event */}
                    <button onClick={createTodoClickHandler} className="btn btn-primary w-25 float-end">
                        Create
                    </button>
                    {/* call todoChangeHandler when the input value change */}
                    <input onChange={todoChangeHandler} value={todo.do} className="form-control w-75" />{' '}
                </li>
                {/******* Render the list of todos *******/}
                {todos.map((todo, index) => (
                    <li key={todo._id} className="list-group-item">
                        {/******* Render the list of todos *******/}
                        {/* Note () => {} as pass `index` parameter otherwise gets into infinite loop */}
                        <button
                            onClick={() => {
                                deleteTodoClickHandler(index);
                            }}
                            className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => toggleTodoDone(todo)}
                            className="me-2"
                        />
                        {todo.do}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todos;

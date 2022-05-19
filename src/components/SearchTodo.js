import React from 'react';

function SearchTodo(props) {

    return (
        <form >
            <input
                type="text"
                id="new-todo-input"
                className="todoInput search"
                name="text"
                onChange=""
                placeholder="Search tasks!"
            />
        </form>
    )
}

export default SearchTodo;

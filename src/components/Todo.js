import React, { useEffect, useRef, useState } from "react";
import { MdDeleteForever } from 'react-icons/md';
import { RiEdit2Line } from 'react-icons/ri';

function Todo(props) {
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState('');

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const edited = usePrev(edit);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newName.trim()) {
      return;
    }
    props.editTask(props.id, newName);
    setNewName("");
    setEdit(false);
  }

  function usePrev(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  
  useEffect(() => {
    if (!edited && edit) {
      editFieldRef.current.focus();
    }
    if (edited && !edit) {
      editButtonRef.current.focus();
    }
  }, [edited, edit]);

  const updateTask = (
    <form className="inputForm" onSubmit={handleSubmit}>
      <div>
        <input
          id={props.id}
          className="todoInput"
          type="text"
          value={newName || props.name}
          onChange={handleChange}
          ref={editFieldRef}
        />
        <button type="submit" className="inputButton "> Update </button>
      </div>
    </form>
  );

  const todoList = (
    <div className="todoRow">
        <div>
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-task" htmlFor={props.id} title="Click here if it is Completed."> {props.name} </label>
        </div>
        <div className="icons">
          <button 
            type="button"
            onClick={() => setEdit(true)}
            ref={editButtonRef} 
            className='editIcon edit' 
            title="Click here to edit your item..." > <RiEdit2Line />
          </button>

          <button  
            onClick={() => props.deleteTask(props.id)}
            className='removeIcon' 
            title="Delete item from this list" >  <MdDeleteForever />
          </button>
        </div>
    </div>
  );

  return (
    <li>{edit ? updateTask : todoList}</li>
  );
}
export default Todo;
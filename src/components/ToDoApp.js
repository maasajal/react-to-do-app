import React, { useState, useRef, useEffect } from "react";
import InputForm from "./InputForm";
import FiltersButton from "./FiltersButton";
import Todo from "./Todo";
import { nanoid } from "nanoid";
import CategoryTag from './CategoryTag';
import SearchTodo from "./SearchTodo";

function ToDoApp(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function usePrev(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  function addTask(name) {
    const newTask = { id: nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const MAP_FILTERING = {
    All: () => true,
    Active: task => !task.completed,
    Done: task => task.completed
  };
  const TODO_FILTER = Object.keys(MAP_FILTERING);

  const taskList = tasks
  .filter(MAP_FILTERING[filter])
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filteredList = TODO_FILTER.map(name => (
    <FiltersButton
      key={name}
      name={name}
      isClicked={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? 'To-Do tasks' : 'To-Do task';
  const headingText = `${taskList.length} ${tasksNoun}`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrev(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  const selectedTags = tags => {
    console.log(tags);
  };

  return (
    <div>
      <InputForm addTask={addTask} />

      <SearchTodo />

      <CategoryTag selectedTags={selectedTags}  tags={['Shopping', 'Cook', 'Eat']} />

      <h1 id="taskCount" tabIndex="-1" ref={listHeadingRef}> A list of {headingText}</h1>
        {filteredList}
      <ul
        role="list"
        aria-labelledby="taskCount"
      > {taskList} </ul>
    </div>
  );
}

export default ToDoApp;

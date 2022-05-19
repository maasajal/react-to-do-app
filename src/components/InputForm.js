import React, { useState } from "react";

function InputForm(props) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="inputForm">
      <h1> Enter your To Do items </h1>
      <input
        type="text"
        className="todoInput"
        name="text"
        value={name}
        onChange={handleChange}
        placeholder="Add your task!"
      />
      <button type="submit" className="inputButton"> Add </button>
    </form>
  );
}

export default InputForm;

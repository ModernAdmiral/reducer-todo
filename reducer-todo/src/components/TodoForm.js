import React, { useState } from "react";


const TodoForm = props => {
  const [newItem, setNewItem] = useState();

  const handleChange = event => {
    setNewItem(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: newItem });
    setNewItem(button
  const clearCompleted = event => {
    event.preventDefault();
    props.dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add a task..."
        value={newItem}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        <label>add</label>
      </button>
      <button onClick={clearCompleted}>
        <label>clear</label>
      </button>
    </form>
  );
};

export default TodoForm;

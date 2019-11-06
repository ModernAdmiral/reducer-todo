import React, { useState } from "react";
import styled from "styled-components";

const AddButton = styled.button``;

const ClearButton = styled.button``;

const TodoForm = props => {
  const [newItem, setNewItem] = useState();

  const handleChange = event => {
    setNewItem(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: newItem });
    setNewItem("");
  };

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
      <AddButton onClick={handleSubmit}>
        <label>add</label>
      </AddButton>
      <ClearButton onClick={clearCompleted}>
        <label>clear</label>
      </ClearButton>
    </form>
  );
};

export default TodoForm;

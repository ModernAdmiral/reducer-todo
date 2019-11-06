import React from "react";
import styled from "styled-components";

const TaskCard = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightblue;
  margin: 20px 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskName = styled.p`
  font-size: 1.5rem;
  margin: 20px;
`;

const Todo = props => {
  return (
    <TaskCard
      className={`task${props.item.completed ? " completed" : ""}`}
      onClick={props.onClick}
    >
      <TaskName>{props.item.item}</TaskName>
    </TaskCard>
  );
};

export default Todo;

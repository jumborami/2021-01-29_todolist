import React from "react";
import Styled from "styled-components";
import TodoItem from "../TodoItem/TodoItem";

const Container = Styled.div`
  width: 100%;
  height: 85%;
  padding: 0 20px;
  background-color: gray;
`;


export default function TodoList () {
  return (
    <Container>
      <TodoItem></TodoItem>
    </Container>
  )
}
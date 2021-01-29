import React from "react";
import Styled from "styled-components";
import TodoHead from "../TodoHead/TodoHead";
import TodoList from "../TodoList/TodoList";
//import { Mobile, Tablet, PC } from "../MediaQuery.tsx";


const Container = Styled.div`
  @media (min-width: 320px) {
    width : 90vw;
    height: 90vh;
    margin: 5vh auto;
    background-color: #f0efeb;
  }
  @media (min-width: 768px) {
    width : 60vw;
    height: 90vh;
    margin: 5vh auto;
    background-color: #f0efeb;
  }
  @media (min-width: 1024px) {
    width : 40vw;
    height: 90vh;
    margin: 5vh auto;
    background-color: #f0efeb;
  }
`;

export default function TodoTemplate () {
  return (
    <>
      <Container>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
      </Container>
    </>
  )
};


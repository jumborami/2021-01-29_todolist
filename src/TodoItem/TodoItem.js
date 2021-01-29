import React from "react";
import Styled from "styled-components";
import Delete from "../Delete/Delete";

const ItemLine = Styled.div`
  width: 100%;
  height: 8%;
  background-color: black;
`;
const ItemText = Styled.span`

`;

export default function TodoItem () {
  return (
    <ItemLine>
      <ItemText></ItemText>
      <Delete></Delete>
    </ItemLine>
  )
}


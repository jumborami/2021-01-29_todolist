import React from "react";
import Styled from "styled-components";
import DateInfo from "../DateInfo/DateInfo";

const Container = Styled.div`
  width: 100%;
  height: 15%;
  background-color: #eddcd2;
`;
const TopLeft = Styled.div`
  float: left;
  width: 70%;
  height: 50%;
  background-color: brown;
  color: #555;
`;
const TopRight = Styled.div`
  float: right;
  width: 30%;
  height: 50%;
  background-color: pink;
`;
const Bottom = Styled.div`
  float: left;
  width: 100%;
  height: 50%;
  background-color: yellow;
`;

export default function TodoHead () {
  return (
    <Container>
      <TopLeft>
        <DateInfo />
      </TopLeft>
      <TopRight>
        
      </TopRight>
      <Bottom>

      </Bottom>
    </Container>
  )
}
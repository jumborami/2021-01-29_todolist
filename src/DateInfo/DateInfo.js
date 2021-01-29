import React from "react";
import Styled from "styled-components";


/* const CurDate = Styled.span`
  display: block;
  height: 100%;
  font-size: 20px;
  padding: 15px 20px;
`; */
const CurDay = Styled.span`
  display: inline-block;
  width: auto;
  height: 100%;
  font-size: 20px;
  padding: 15px 0;
  padding-left: 10px;
  font-weight: 700;
`;
const CurMonth = Styled.span`
  display: inline-block;
  width: auto;
  height: 100%;
  font-size: 20px;
  padding: 15px 0;
`;

class DateInfo extends React.Component {
  state = {
    date: new Date()
  }
  render () {
    const { date } = this.state;
    return (
      <>   
      <CurDay>
        {date.getDay() === 0 
            ? "Sunday"
            : date.getDay() === 1 
            ? "Monday"
            : date.getDay() === 2 
            ? "Tuesday"
            : date.getDay() === 3 
            ? "Wednesday"
            : date.getDay() === 4 
            ? "Thursday"
            : date.getDay() === 5 
            ? "Friday"
            : "Saturday"}&nbsp;&nbsp;&nbsp;
      </CurDay>
      <CurMonth>
        {date.getMonth() === 0 
          ? "January"
          : date.getMonth() === 1 
          ? "February"
          : date.getMonth() === 2 
          ? "March"
          : date.getMonth() === 3 
          ? "April"
          : date.getMonth() === 4 
          ? "May"
          : date.getMonth() === 5 
          ? "June"
          : date.getMonth() === 6 
          ? "July"
          : date.getMonth() === 7 
          ? "August"
          : date.getMonth() === 8 
          ? "September"
          : date.getMonth() === 9 
          ? "October"
          : date.getMonth() === 10 
          ? "November"
          : "December"}&nbsp;
        {date.getDate()}
      </CurMonth>  
      </>
    );
  }
};

export default DateInfo;


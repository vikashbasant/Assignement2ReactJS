import React from 'react';
import ReactDOM from 'react-dom';


const name = "Vikash Kumar Basant";
const currDate = new Date();

ReactDOM.render(
  <>
    <h1>{`My Name is ${name}`}</h1>
    <p>{`Today date is : ${currDate.toLocaleDateString()}`}</p>
    <p>{`Time Now is : ${currDate.toLocaleTimeString()}`}</p>
  </>,
  document.getElementById('root')
);